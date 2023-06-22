import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { createContext, useState } from "react";
import ViewSVG from "../../../SVGs/ViewSVG";
import RenameSVG from "../../../SVGs/RenameSVG";
import RemoveSVG from "../../../SVGs/RemoveSVG";


export const ClientMenuContext = createContext();

function ClientMenu({ children }) {

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <React.Fragment>

            <ClientMenuContext.Provider value={{
                open: open,
                setAnchorEl: setAnchorEl,
                menuId: "Client-menu",
                buttonId: "Client-menu-button",
            }}>
                {children}
            </ClientMenuContext.Provider>

            <Menu
                id="Client-menu"
                MenuListProps={{
                    'aria-labelledby': 'Client-menu-button',
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
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4, }}>
                        <ViewSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="View" />
                    </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4 }}>
                        <RenameSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="Edit" />
                    </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4 }}>
                        <RemoveSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="Delete" />
                    </ListItemButton>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default ClientMenu;
