import { Box } from "@mui/material";
import Image from "next/image";


function PersonSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_890_6248)">
                    <circle cx="8" cy="4" r="3" fill="white" shape-rendering="crispEdges" />
                    <circle cx="8" cy="4" r="3" stroke="#044766" stroke-opacity="0.75" stroke-linecap="round" shape-rendering="crispEdges" />
                    <g style={{transform: "translate(2px, 8px)"}}>
                        <path d="M11 5C11 4.47471 10.8707 3.95457 10.6194 3.46927C10.3681 2.98396 9.99983 2.54301 9.53553 2.17157C9.07124 1.80014 8.52004 1.5055 7.91342 1.30448C7.30679 1.10346 6.65661 1 6 1C5.34339 1 4.69321 1.10346 4.08658 1.30448C3.47995 1.5055 2.92876 1.80014 2.46447 2.17157C2.00017 2.54301 1.63188 2.98396 1.3806 3.46927C1.12933 3.95457 1 4.47471 1 5L6 5H11Z" fill="white" stroke="#044766" stroke-opacity="0.75" stroke-linecap="round" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_890_6248" x="0.5" y="0.5" width="15" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_890_6248" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_890_6248" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Box>
    );
}

export default PersonSVG;
