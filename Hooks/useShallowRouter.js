import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function useShallowRouter(routeList, queryKey) {

    const router = useRouter();

    const [selectedItem, setSelectedItem] = useState();

    const push = (routeValue, routeName) => {
        router.push(routeValue, routeName, { shallow: true })
    }

    useEffect(() => {
        if (routeList && queryKey) {
            if (router.asPath.split("/").pop()!==`[${queryKey}]` && !(router.query[queryKey] && router.query[queryKey] === selectedItem?.route)) {

                let isBreak = false
                routeList.map(obj => {
                    if (router?.query?.[queryKey] && router.query[queryKey] === obj.route) {
                        setSelectedItem(obj)
                        isBreak = true
                    }
                })

                if (!isBreak) {
                    if(router.query[queryKey]){
                        push(routeList[0].route)
                        setSelectedItem(routeList[0])                        
                    }else{
                        push(`${router.asPath}/${routeList[0].route}`)
                        setSelectedItem(routeList[0])
                    }
                }
            }
        }
    }, [router?.query?.[queryKey]])


    return { value: selectedItem?.value, push: push }
}

export default useShallowRouter;