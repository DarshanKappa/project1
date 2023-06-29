import Box from "@mui/material/Box";
import Image from "next/image";


function GroupAddUserSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/group_add_light.svg"}
            />
        </Box>
    );
}

export default GroupAddUserSVG;
