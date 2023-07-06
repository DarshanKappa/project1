import Box from "@mui/material/Box";


function Page({ children }) {
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "lightblue",
            display: "flex",
            justifyContent: "center",
            placeItems: "center"
        }}>
            <Box sx={{
                width: { xs: 200, sm: 500, md: 650, lg: 1200 },
                bgcolor: "white"
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default Page;
