import { Box } from "@mui/material";
import Image from "next/image";


function LockAltSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/article/lock_alt.svg"}
            />
        </Box>
    );
}

export default LockAltSVG;
