import { ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import React, { createContext, useState } from "react";
import ViewSVG from "../../../SVGs/ViewSVG";
import RenameSVG from "../../../SVGs/RenameSVG";
import InfoSVG from "../../../SVGs/InfoSVG";
import StartSVG from "../../../SVGs/StartSVG";
import RemoveSVG from "../../../SVGs/RemoveSVG";


export const ArticleMenuContext = createContext();

function ArticleMenu({ children }) {

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <React.Fragment>

            <ArticleMenuContext.Provider value={{
                open: open,
                setAnchorEl: setAnchorEl,
                menuId: "Article-menu",
                buttonId: "Article-menu-button",
            }}>
                {children}
            </ArticleMenuContext.Provider>

            <Menu
                id="Article-menu"
                MenuListProps={{
                    'aria-labelledby': 'Article-menu-button',
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

export default ArticleMenu;
