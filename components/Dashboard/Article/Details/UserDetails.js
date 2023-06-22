import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import EditSVG from "../../../SVGs/Article/Details/EditSVG";
import CallSVG from "../../../SVGs/Article/Details/CallSVG";
import EmailSVG from "../../../SVGs/Article/Details/EmailSVG";
import PersonSVG from "../../../SVGs/Article/Details/PersonSVG";


function ArticleUserDetails({ rowData }) {
    return ( 
        <Box sx={{display: "flex", placeItems: "center", px: 4, py: 2}}>
            <Stack sx={{placeItems: "center"}}>
                <ProfileImage sx={{width: 100, height: 100}} />
                <Typography sx={{pt: 1, fontWeight: 900}} variant="body1" color="primary.main">
                    {rowData.name}
                </Typography>

            </Stack>
            
            <Stack sx={{flexGrow: 1, px: 5}}>
                <Box sx={{display: "flex", placeItems: "center", py: 1}}>
                    <CallSVG sx={{width: 18, height: 18}} />
                    <Typography sx={{px: 1}} variant="body1" color="primary.75%">+91 {rowData.contactNumber}</Typography>
                </Box>
                <Box sx={{display: "flex", placeItems: "center", py: 1}}>
                    <PersonSVG sx={{width: 20, height: 20}} />
                    <Typography sx={{px: 1}} variant="body1" color="primary.75%">{rowData.name}</Typography>
                </Box>
                <Box sx={{display: "flex", placeItems: "center", py: 1}}>
                    <EmailSVG sx={{width: 18, height: 18}} />
                    <Typography sx={{px: 1}} variant="body1" color="primary.75%">{rowData.email}</Typography>
                </Box>


            </Stack>

            <Stack sx={{height: "100%"}}>
                <Button sx={{textTransform: "none"}}>
                    Edit
                    <EditSVG  sx={{width: 20, height: 20, ml: 1}} />
                </Button>
            </Stack>

        </Box>
     );
}

export default ArticleUserDetails;

function ProfileImage({ sx }) {
    return (
        <Box sx={{ width: "100%", height: "100%", ...sx, position: "relative" }}>
            <Image
                fill
                sx={{ width: "100%", height: "100%" }}
                src={"/svgs/article/1.png"}
            />
        </Box>
    );
}

