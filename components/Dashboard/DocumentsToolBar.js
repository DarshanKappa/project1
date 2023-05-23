import { Box, Divider, InputAdornment, MenuItem, Select, Stack, SvgIcon, createTheme } from "@mui/material";
import SelectInput from "../Inputs/SelectInput"
import Option from "../Inputs/Option"
import Person from '@mui/icons-material/Person';


function SVG({ className }) {
    return (
        <>
            <SvgIcon width="12" height="8" viewBox="-3 -3 18 14" className={className}>
                <path d="M1.41 0L6 4.94467L10.59 0L12 1.52227L6 8L0 1.52227L1.41 0Z" fill="#044766" fill-opacity="0.75" />
            </SvgIcon>
        </>
    );
}

const theme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                        backgroundColor: '#202020',
                        color: '#fff',
                    }),
                }),
            },
        },
    },
});

function DocumentsToolBar({ }) {
    return (
        <>
            <Stack sx={{
                py: 2
            }}>
                <Box sx={{ m: 1 }}>

                    <Select
                        size="small"
                        variant="outlined"
                        sx={{ width: 300, mr: 1, color: "primary.main", bgcolor: "#D9D9D9", '.MuiOutlinedInput-notchedOutline': { border: "none",  } }}
                        IconComponent={SVG}
                        defaultValue={"null"}
                        onChange={(e) => console.log(e)}
                    >
                        <MenuItem value={"null"} sx={{color: "gray"}}>Client</MenuItem>
                        <MenuItem value={"Text"}>Darshan1</MenuItem>
                        <MenuItem value={"Filled"}>Darshan2</MenuItem>
                        <MenuItem value={"Outlined"}>Darshan3</MenuItem>
                    </Select>

                    <Select
                        size="small"
                        variant="outlined"
                        sx={{ width: 300, mr: 1, color: "primary.main", bgcolor: "#D9D9D9", '.MuiOutlinedInput-notchedOutline': { border: "none",  } }}
                        IconComponent={SVG}
                        defaultValue={"null"}
                        onChange={(e) => console.log(e)}
                    >
                        <MenuItem value={"null"} sx={{color: "gray"}}>Client</MenuItem>
                        <MenuItem value={"Text"}>Darshan1</MenuItem>
                        <MenuItem value={"Filled"}>Darshan2</MenuItem>
                        <MenuItem value={"Outlined"}>Darshan3</MenuItem>
                    </Select>

                    <Select
                        size="small"
                        variant="outlined"
                        sx={{ width: 300, mr: 1, color: "primary.main", bgcolor: "#D9D9D9", '.MuiOutlinedInput-notchedOutline': { border: "none",  } }}
                        IconComponent={SVG}
                        defaultValue={"null"}
                        onChange={(e) => console.log(e)}
                    >
                        <MenuItem value={"null"} sx={{color: "gray"}}>Client</MenuItem>
                        <MenuItem value={"Text"}>Darshan1</MenuItem>
                        <MenuItem value={"Filled"}>Darshan2</MenuItem>
                        <MenuItem value={"Outlined"}>Darshan3</MenuItem>
                    </Select>

                </Box>
                <Divider />
            </Stack>
        </>
    );
}

export default DocumentsToolBar;