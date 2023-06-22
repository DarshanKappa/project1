import { Box } from "@mui/material";
import Image from "next/image";


function GridSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V5.33333H5.33333V0H0ZM4 4H1.33333V1.33333H4V4ZM0 6.66667V12H5.33333V6.66667H0ZM4 10.6667H1.33333V8H4V10.6667ZM6.66667 0V5.33333H12V0H6.66667ZM10.6667 4H8V1.33333H10.6667V4ZM6.66667 6.66667V12H12V6.66667H6.66667ZM10.6667 10.6667H8V8H10.6667V10.6667Z" fill="#044766" fill-opacity="0.75" />
            </svg>
        </Box>
    );
}

export default GridSVG;
