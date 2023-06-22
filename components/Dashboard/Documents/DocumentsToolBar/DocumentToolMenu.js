import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { createContext, useState } from "react";
import CheckRightSVG from "../../../SVGs/Documents/CheckRightSVG";


export const DocumentMenuContext = createContext();

function DocumentToolMenu({ children, menuItems, onMenuItemClick }) {

    const [value, setValue] = useState(menuItems?.[0]?.value);

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>

            <DocumentMenuContext.Provider value={{
                open: open,
                setAnchorEl: setAnchorEl,
                menuId: "Document-menu",
                buttonId: "Document-menu-button",
            }}>
                {children}
            </DocumentMenuContext.Provider>

            <Menu
                id="Document-menu"
                MenuListProps={{
                    'aria-labelledby': 'Document-menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        // width: 200,
                    },
                }}
            >
                {
                    menuItems?.map?.((item, index) => (
                        <MenuItem key={item?.value} sx={{ p: 0 }} onClick={() => { handleClose(); setValue(item.value); onMenuItemClick(item.value) }}>
                            <ListItemButton sx={{ pl: 3, pr: 4, }}>
                                <Box sx={{ display: "flex", width: "100%" }}>
                                    {React.cloneElement(item?.icon, { sx: { mr: 2, width: 18, height: 18 } })}
                                    <ListItemText sx={{ color: "primary.main", pr: 1, flexGrow: 1 }} primary={item?.name} />
                                    {
                                        value === item.value ? <CheckRightSVG sx={{ width: 16, height: 16 }} />
                                            : <React.Fragment />
                                    }
                                </Box>
                            </ListItemButton>
                        </MenuItem>
                    ))
                }
            </Menu>
        </React.Fragment>
    );
}

export default DocumentToolMenu;
