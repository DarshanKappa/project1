    import { Box } from "@mui/material";
    import Image from "next/image";


    function CallSVG({ sx }) {
        return (
            <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
                <Image
                    fill
                    sx={{ width: "100%", height: "100%" }}
                    src={"/svgs/call.svg"}
                />
            </Box>
        );
    }

    export default CallSVG;
