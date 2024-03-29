import Box from "@mui/material/Box";
import Image from "next/image";
// import DownloadIcon from "../../public/svgs/download.svg"


function CheckedBox({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>

            <Image
                fill
                style={{ width: "100%", height: "100%" }}
                src={"/svgs/checkBoxTrue.svg"}
            />
        </Box>
    );
}

export default CheckedBox;
