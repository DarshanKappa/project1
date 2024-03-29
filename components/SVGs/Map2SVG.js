import Box from "@mui/material/Box";
import Image from "next/image";


function Map2SVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/map2.svg"}
            />
        </Box>
    );
}

export default Map2SVG;
