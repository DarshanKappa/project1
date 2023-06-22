import { Box, Stack } from "@mui/material";
import MainSearchBar from "./MainSearchBar";


function MainPage({ children }) {

    return (
        <Stack width="100%" height="100%" sx={{ px: 2, py: 2, bgcolor: "primary.light" }}>

            <Box width="100%" sx={{ height: 80, display: "flex", justifyContent: "space-between", placeItems: "center", flexShrink: 0 }}>
                <MainSearchBar sx={{ bgcolor: "white" }} />
            </Box>

            <Box width="100%" sx={{ bgcolor: "white", flexGrow: 1, overflowY: "auto" }}>
                    {children}
            </Box>

        </Stack>
    );
}

export default MainPage;
