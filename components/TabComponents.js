import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";


function TabContainer({ children }) {

    const [tab, setTab] = useState(0);

    if (Array.isArray(children?.[0]?.props?.children)) {
        return (
            <>
                <Stack sx={{ height: "100%" }}>
                    <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                        {
                            children?.[0]?.props?.children?.map((tab, index) => (
                                <Tab index={index} label={tab.props.children} />
                            ))
                        }
                    </Tabs>
                    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                        {
                            Array.isArray(children?.[1]?.props?.children) ? (
                                children?.[1]?.props?.children?.map((cont, index) => (
                                    tab === index ? cont : <React.Fragment />
                                ))
                            ) : tab === 0 ? children?.[1]?.props?.children : <React.Fragment />
                        }
                    </Box>
                </Stack>
            </>
        )

    } else {
        return (
            <>
                <Stack sx={{ height: "100%" }}>
                    <Tabs value={0} onChange={(_, v) => setTab(v)}>
                        {
                            <Tab index={0} label={children?.[0]?.props?.children?.props?.children} />
                        }
                    </Tabs>
                    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                        {
                            Array.isArray(children?.[1]?.props?.children) ? (
                                children?.[1]?.props?.children?.map((cont, index) => (
                                    0 === index ? cont : <React.Fragment />
                                ))
                            ) : tab === 0 ? children?.[1]?.props?.children : <React.Fragment />
                        }
                    </Box>
                </Stack>
            </>
        )

    }
}

export default TabContainer;



export function TabLabel(children) {
    return (
        children
    );
}

export function TabLabels(children) {
    return (
        children
    );
}

export function TabContent({ children }) {
    return (
        children
    );
}

export function TabItem({ children }) {
    return (
        children
    );
}


