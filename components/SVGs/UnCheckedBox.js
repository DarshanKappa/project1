import { Box } from "@mui/material";
import Image from "next/image";
// import DownloadIcon from "../../public/svgs/download.svg"


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
