import { Box, Divider, InputAdornment, InputBase, MenuItem, Select, Stack, SvgIcon, createTheme } from "@mui/material";
import SelectInput from "../../../Inputs/SelectInput"
import Option from "../../../Inputs/Option"
import Person from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import DocumentToolFilter from "./DocumentToolFilter";
import DocumentToolSearch from "./DocumentToolSearch";


const filterOptions = [
    { option: "Option1", value: "option1" },
    { option: "Option2", value: "option2" },
    { option: "Option3", value: "option3" },
    { option: "Option4", value: "option4" },
    { option: "Option5", value: "option5" },
]

function DocumentsToolBar({ }) {
    return (
        <>
            <Stack>
                <Box sx={{ display: "flex", m: 1 }}>

                    <Box sx={{ px: 1, width: "25%" }}>
                        <DocumentToolFilter
                            label="Client"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "25%" }}>
                        <DocumentToolFilter
                            label="Category"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "25%" }}>
                        <DocumentToolFilter
                            label="Financial Year"
                            options={filterOptions}
                        />
                    </Box>

                    <Box sx={{ px: 1, width: "25%" }}>
                        <DocumentToolSearch sx={{ height: "100%" }} />
                    </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
            </Stack >
        </>
    );
}

export default DocumentsToolBar;