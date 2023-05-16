import { Box } from "@mui/material";
import Image from "next/image";


function MessageSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/message.svg"}
            />
        </Box>
    );
}

export default MessageSVG;
