import Box from "@mui/material/Box";

function CheckRightSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.81818 7.91045L0.954545 4.77612L0 5.8209L3.81818 10L12 1.04478L11.0455 0L3.81818 7.91045Z" fill="#044766" fill-opacity="0.75" />
            </svg>
        </Box>
    );
}

export default CheckRightSVG;
