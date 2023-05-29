import { ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import React, { createContext, useState } from "react";
import ViewSVG from "../../../SVGs/ViewSVG";
import RenameSVG from "../../../SVGs/RenameSVG";
import InfoSVG from "../../../SVGs/InfoSVG";
import StartSVG from "../../../SVGs/StartSVG";
import RemoveSVG from "../../../SVGs/RemoveSVG";


export const DocumentMenuContext = createContext();

function DocumentMenu({ children }) {

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
                menuId: "document-menu",
                buttonId: "document-menu-button",
            }}>
                {children}
            </DocumentMenuContext.Provider>

            <Menu
                id="document-menu"
                MenuListProps={{
                    'aria-labelledby': 'document-menu-button',
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
                        <ListItemText sx={{ color: "primary.main" }} primary="Rename" />
                    </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4 }}>
                        <InfoSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="Get info" />
                    </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4 }}>
                        <StartSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="Favourites" />
                    </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ p: 0 }}>
                    <ListItemButton sx={{ pl: 3, pr: 4 }}>
                        <RemoveSVG sx={{ mr: 2, width: 15, height: 15 }} />
                        <ListItemText sx={{ color: "primary.main" }} primary="Remove" />
                    </ListItemButton>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default DocumentMenu;
