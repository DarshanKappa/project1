import Box from "@mui/material/Box";
import Image from "next/image";


function UserDuotone2SVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/user_duotone2.svg"}
            />
        </Box>
    );
}

export default UserDuotone2SVG;
