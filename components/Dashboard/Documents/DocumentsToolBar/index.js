import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DocumentToolFilter from "./DocumentToolFilter";
import DocumentToolSearch from "./DocumentToolSearch";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ViewSVG from "@svgs/Documents/ViewSVG";
import { DocumentMenuContext } from "./DocumentToolMenu";


const filterOptions = [
    { option: "Option1", value: "option1" },
    { option: "Option2", value: "option2" },
    { option: "Option3", value: "option3" },
    { option: "Option4", value: "option4" },
    { option: "Option5", value: "option5" },
]

function DocumentsToolBar({ }) {

    const {
        open,
        setAnchorEl,
        menuId,
        buttonId,
    } = useContext(DocumentMenuContext);

    return (
        <>

            <Stack>
                <Box sx={{ display: "flex", m: 1 }}>

                    <Box sx={{ px: 1, width: "20%" }}>
                        <DocumentToolFilter
                            label="Client"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "20%" }}>
                        <DocumentToolFilter
                            label="Category"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "20%" }}>
                        <DocumentToolFilter
                            label="Financial Year"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "20%" }}>
                        <DocumentToolSearch sx={{ height: "100%" }} />
                    </Box>

                    <Box sx={{ px: 1, width: "20%", display: "flex", justifyContent: "end" }}>

                        <IconButton
                            aria-label="more"
                            id={buttonId}
                            aria-controls={open ? menuId : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={(e) => { setAnchorEl(e.currentTarget) }}
                            sx={{ py: 0, px: 2 }}
                        >
                            <ViewSVG sx={{ width: 40, height: 40 }} />
                        </IconButton>

                        <Button variant="contained" sx={{ textTransform: "none", borderRadius: 0, bgcolor: "secondary.main" }}>
                            <FileUploadOutlinedIcon />
                            <Typography variant="body1" sx={{ px: 1 }} color="white">
                                Upload
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
            </Stack >
        </>
    );
}

export default DocumentsToolBar;