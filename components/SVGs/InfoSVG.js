import Box from "@mui/material/Box";
import Image from "next/image";


function InfoSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/menu/info.svg"}
            />
        </Box>
    );
}

export default InfoSVG;
