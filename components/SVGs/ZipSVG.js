import { Box } from "@mui/material";
import Image from "next/image";


function ZipSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", flexShrink: 0, ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 -6 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_355_1916)">
                    <rect x="4" width="20" height="20" rx="1" fill="#FDA400" />
                </g>
                <rect x="12" width="2" height="1" fill="#1A2E35" />
                <rect x="14" y="1" width="2" height="1" fill="#1A2E35" />
                <rect x="12" y="2" width="2" height="1" fill="#1A2E35" />
                <rect x="14" y="3" width="2" height="1" fill="#1A2E35" />
                <rect x="12" y="4" width="2" height="1" fill="#1A2E35" />
                <rect x="14" y="5" width="2" height="1" fill="#1A2E35" />
                <rect x="13" y="10" width="2" height="1" fill="#1A2E35" />
                <rect x="12" y="6" width="2" height="1" fill="#1A2E35" />
                <rect x="14" y="7" width="2" height="1" fill="#1A2E35" />
                <rect x="12" y="8" width="2" height="1" fill="#1A2E35" />
                <path d="M12.8392 12.8039C12.9327 12.3365 13.3431 12 13.8198 12H14.1802C14.6569 12 15.0673 12.3365 15.1608 12.8039L15.7608 15.8039C15.8845 16.4227 15.4112 17 14.7802 17H14H13.2198C12.5888 17 12.1155 16.4227 12.2392 15.8039L12.8392 12.8039Z" fill="#1A2E35" />
                <defs>
                    <filter id="filter0_d_355_1916" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_355_1916" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_355_1916" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Box>
    );
}

export default ZipSVG;
