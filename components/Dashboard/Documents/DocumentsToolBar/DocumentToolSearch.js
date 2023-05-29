import { Box, Divider, InputAdornment, InputBase, MenuItem, Select, Stack, SvgIcon, createTheme } from "@mui/material";
import SelectInput from "../../../Inputs/SelectInput"
import Option from "../../../Inputs/Option"
import Person from '@mui/icons-material/Person';
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