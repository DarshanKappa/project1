import Box from "@mui/material/Box";



function EmailSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6 0H1.4C0.63 0 0.00699999 0.675 0.00699999 1.5L0 10.5C0 11.325 0.63 12 1.4 12H12.6C13.37 12 14 11.325 14 10.5V1.5C14 0.675 13.37 0 12.6 0ZM12.6 10.5H1.4V3L7 6.75L12.6 3V10.5ZM7 5.25L1.4 1.5H12.6L7 5.25Z" fill="#044766" fill-opacity="0.75" />
            </svg>
        </Box>
    );
}

export default EmailSVG;
