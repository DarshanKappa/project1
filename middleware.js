import { NextResponse } from "next/server";



export async function middleware(request) {

    console.log("-------- Middleware ----------")
    console.log(request)
    const res = NextResponse.next({request: request})


    console.log("--------------- end middleware --------------------")



    return res

}

export const config = {
    matcher: "/api/:route*"
}

