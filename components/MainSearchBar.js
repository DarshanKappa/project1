import { Box, Divider, IconButton, InputBase } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';


function MainSearchBar({ sx }) {
    return (
        <Box sx={{
            display: "flex",
            width: 500,
            border: "1px solid",
            borderRadius: 1,
            ...sx
        }}>
            <IconButton>
                <LanguageIcon sx={{color: "primary.main"}} />
            </IconButton>
            <Divider sx={{ borderRightWidth: 1, borderColor: "primary.main"  }} orientation="vertical" flexItem />
            <InputBase
                type="text"
                fullWidth
                placeholder="search anything..."
                sx={{
                    px: 2
                }}
            />
        </Box>
    );
}

export default MainSearchBar;
