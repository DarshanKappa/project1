import Box from "@mui/material/Box";
import Image from "next/image";


function UnCheckedBox({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>

            <Image
                fill
                style={{ width: "100%", height: "100%" }}
                src={"/svgs/checkBoxFalse.svg"}
            />
        </Box>
    );
}

export default UnCheckedBox;
