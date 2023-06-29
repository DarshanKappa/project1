import { Box, Divider, MenuItem, Select, Stack, Typography } from "@mui/material";
import GroupAddUserSVG from "../SVGs/GroupAddUserSVG";
import React from "react";



function SelectInput2({ children, register = () => { }, name, icon, sx, label, required }) {
    return (
        <Stack sx={{width:"100%", ...sx}}>
            <Typography sx={{ mb: 1, userSelect: "none" }} variant="body1" color="black	">{label}</Typography>

            <Select
                {...(name && register(name))}
                fullWidth
                variant="outlined"
                required={required}
                IconComponent={""}
                sx={{
                    height: 50,
                    py: 0,
                    bgcolor: "background.project.paper.main",
                    ".MuiOutlinedInput-notchedOutline": {
                        border: "none!important"
                    },
                }}
                MenuProps={{
                    sx: {
                        ".MuiMenu-paper": {
                            marginTop: "15px",
                            paddingLeft: "50px",
                            boxShadow: 0,
                        },
                        ".MuiMenu-list": {
                            backgroundColor: "background.project.paper.main",
                            borderRadius: "3px"
                        },
                    },
                }}
                inputProps={{
                    sx: {
                        px: 1
                    }
                }}
                startAdornment={
                    icon ? (
                        <Box sx={{ display: "flex", height: 35, placeItems: "center" }}>
                            {React.cloneElement(icon, { sx: { width: 20, height: 20 } })}
                            <Divider orientation="vertical" sx={{ width: 2, pl: 2 }} flexItem />
                        </Box>
                    ) : <React.Fragment />
                }
            >
                {
                    Array.isArray(children) ?
                        children?.map(child => React.cloneElement(child, { sx: { "&.Mui-selected": { backgroundColor: "primary.main", color: "white" } } }))
                        : React.cloneElement(children, { sx: { "&.Mui-selected": { backgroundColor: "primary.main", color: "white" } } })
                }
            </Select>
        </Stack>
    );
}

export default SelectInput2;