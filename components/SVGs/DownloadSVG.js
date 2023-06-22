import Box from "@mui/material/Box";
import Image from "next/image";
// import DownloadIcon from "../../public/svgs/download.svg"


function DownloadSVG({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>

            <Image
                fill
                style={{ width: "100%", height: "100%", opacity: "0.1" }}
                src={"/svgs/download.svg"}
            />
        </Box>
    );
}

export default DownloadSVG;
