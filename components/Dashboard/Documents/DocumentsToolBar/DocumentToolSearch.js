import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';


function DocumentToolSearch({ sx }) {
    return (
        <>
            <Box sx={{
                border: "1px solid",
                borderColor: "primary.75%",
                display: "flex",
                placeItems: "center",
                width: "100%",
                ...sx,
            }}>
                <SearchIcon sx={{ mx: "4px", color: "primary.75%" }} />
                <InputBase
                    placeholder="search..."
                />
            </Box>
        </>
    );
}

export default DocumentToolSearch;