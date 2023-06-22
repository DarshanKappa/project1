import { Box } from "@mui/material";
import Image from "next/image";


function EditSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" fill="white" />
                <path d="M8.57443 4.57574L3.96615 9.18402C3.95435 9.19582 3.94256 9.20758 3.93081 9.21929C3.77119 9.37847 3.61774 9.53148 3.50934 9.72293C3.40095 9.91438 3.34868 10.1247 3.29432 10.3435C3.29032 10.3596 3.2863 10.3757 3.28226 10.3919L2.95206 11.7127C2.94965 11.7223 2.94721 11.7321 2.94475 11.7419C2.90614 11.8959 2.86247 12.0702 2.84797 12.2185C2.83181 12.3836 2.8333 12.6828 3.07458 12.9241C3.31587 13.1654 3.6151 13.1669 3.78023 13.1507C3.9285 13.1362 4.10276 13.0926 4.25684 13.0539C4.26664 13.0515 4.27637 13.049 4.286 13.0466L5.60679 12.7164C5.62298 12.7124 5.63914 12.7084 5.65524 12.7044C5.87401 12.65 6.08432 12.5978 6.27577 12.4894C6.46721 12.381 6.62023 12.2275 6.7794 12.0679C6.79112 12.0561 6.80287 12.0444 6.81468 12.0325L11.423 7.42426C11.4406 7.40662 11.4582 7.38909 11.4757 7.37165C11.6947 7.15341 11.9 6.94888 12.0181 6.71043C12.2399 6.26278 12.2399 5.73722 12.0181 5.28957C11.9 5.05112 11.6947 4.84659 11.4757 4.62835C11.4582 4.61091 11.4406 4.59338 11.423 4.57574C11.4053 4.55809 11.3878 4.5405 11.3703 4.523C11.1521 4.304 10.9476 4.09875 10.7091 3.98058C10.2615 3.75876 9.73592 3.75876 9.28827 3.98058C9.04982 4.09875 8.84528 4.304 8.62705 4.523C8.6096 4.5405 8.59207 4.5581 8.57443 4.57574Z" stroke="#044766" stroke-opacity="0.75" stroke-width="1.2" />
                <path d="M8.33203 5L10.9987 7.66667" stroke="#044766" stroke-opacity="0.75" stroke-width="1.2" />
            </svg>
        </Box>
    );
}

export default EditSVG;
