import { Box, Stack, Switch } from "@mui/material";
import MainSearchBar from "./MainSearchBar";
import { createContext, useState } from "react";

export const DocumentViewContext = createContext();

function MainPage({ children }) {

    const [view, setView] = useState("grid")

    const onViewChange = (_, value)=>{
        if(value){
            setView("list")
        }
        else{
            setView("grid")
        }
    }

    return (
        <Stack width="100%" height="100%" sx={{ px: 2, py: 2, bgcolor: "primary.light" }}>

            <Box width="100%" sx={{ height: 80, display: "flex", justifyContent: "space-between", placeItems: "center", flexShrink: 0 }}>
                <MainSearchBar sx={{ bgcolor: "white" }} />
                <Switch onChange={onViewChange} color="warning"/>
            </Box>

            <Box width="100%" sx={{ bgcolor: "white", flexGrow: 1, overflowY: "auto" }}>
                <DocumentViewContext.Provider value={{
                    view: view
                }} >
                    {children}
                </DocumentViewContext.Provider>
            </Box>

        </Stack>
    );
}

export default MainPage;
