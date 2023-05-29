import { Box } from "@mui/material";
import Image from "next/image";


function ExcelSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", flexShrink: 0, ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 -6 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_730_1825)">
                    <rect x="7.33105" width="5.55129" height="4.99703" fill="#008000" />
                    <rect x="12.8818" width="5.55129" height="4.99703" fill="#008000" fill-opacity="0.9" />
                    <rect x="12.8818" y="4.99609" width="5.55129" height="4.99703" fill="#008000" fill-opacity="0.7" />
                    <rect x="12.8955" y="14.9805" width="5.55129" height="4.99703" fill="#008000" />
                    <rect x="7.34375" y="15.0039" width="5.55129" height="4.99703" fill="#008000" fill-opacity="0.9" />
                    <rect x="12.8818" y="9.98438" width="5.55129" height="4.99703" fill="#008000" fill-opacity="0.8" />
                    <rect width="5.55129" height="4.99703" transform="matrix(-1 -0.000380333 0.000469384 -1 23.9932 19.9805)" fill="#008000" fill-opacity="0.9" />
                    <rect width="5.55129" height="4.99703" transform="matrix(-1 -0.000380333 0.000469384 -1 23.9932 14.9805)" fill="#008000" fill-opacity="0.7" />
                    <rect width="5.55129" height="4.99703" transform="matrix(-1 -0.000380333 0.000469384 -1 23.9893 5)" fill="#008000" />
                    <rect width="5.55129" height="4.99703" transform="matrix(-1 -0.000380333 0.000469384 -1 23.998 9.99609)" fill="#008000" fill-opacity="0.8" />
                    <g filter="url(#filter1_d_730_1825)">
                        <rect x="4" y="4.99609" width="11.1026" height="9.99407" fill="#008000" />
                    </g>
                    <path d="M11.0439 12.9961C10.9639 12.8361 10.8679 12.6601 10.7559 12.4681C10.6439 12.2708 10.5212 12.0681 10.3879 11.8601C10.2545 11.6468 10.1159 11.4361 9.97185 11.2281C9.82785 11.0148 9.68919 10.8148 9.55585 10.6281C9.42252 10.8148 9.28385 11.0148 9.13985 11.2281C8.99585 11.4361 8.85719 11.6468 8.72385 11.8601C8.59585 12.0681 8.47319 12.2708 8.35585 12.4681C8.24385 12.6601 8.14785 12.8361 8.06785 12.9961H7.21185C7.45185 12.5268 7.72919 12.0494 8.04385 11.5641C8.36385 11.0788 8.70252 10.5801 9.05985 10.0681L7.28385 7.45209H8.17985L9.54785 9.51609L10.8999 7.45209H11.7879L10.0439 10.0361C10.4065 10.5534 10.7479 11.0574 11.0679 11.5481C11.3879 12.0388 11.6705 12.5214 11.9159 12.9961H11.0439Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_730_1825" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_730_1825" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_730_1825" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Box>
    );
}

export default ExcelSVG;
