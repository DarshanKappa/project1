import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import UserAddSVG from "../../../SVGs/Article/UserAddSVG";
import DownloadSVG from "../../../SVGs/DownloadSVG";

const documentCardStyle = {
    width: 260,
    height: (285 + 12 + 12),
    // px: 4,
    // py: 4,
    mx: 3,
    mb: 6,
    bgcolor: "primary.light",
    boxShadow: "0px 6px 3px -3px rgba(0,0,0,0.2), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.12)",
}

function AddDocumentCard({ }) {
    return (
        <>
            <Card sx={documentCardStyle}>
                <Stack sx={{height: "100%"}}>
                    <Typography sx={{textAlign: "center", mt: 3}} variant="h7" color="primary.main">
                        Upload a new document
                    </Typography>

                    <Box sx={{border: "1px dashed", bgcolor: "#E5E5E5", borderColor: "primary.main", m: 3, pt: 2, pb: 4, height: "100%", display: "flex", placeItems: "center", flexDirection: "column"}}>
                        <Typography sx={{textAlign: "center"}} variant="caption" color="primary.main">
                            Drop your files here
                        </Typography>

                        <DownloadSVG sx={{fill: "red"}} />

                        <Typography variant="caption" color="primary.main">Or</Typography>

                        <Button size="small" variant="outlined" sx={{borderRadius: 0, textTransform: "none"}}>
                            Browse Files
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </>
    );
}

export default AddDocumentCard;
