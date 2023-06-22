import { useContext } from "react";
import { DocumentMenuContext } from ".";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export function DocumentMenuButton({ }) {

    const {
        open,
        setAnchorEl,
        menuId,
        buttonId,
    } = useContext(DocumentMenuContext);

    return (
        <IconButton
            aria-label="more"
            id={buttonId}
            aria-controls={open ? menuId : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(e) => { setAnchorEl(e.currentTarget) }}
        >
            <MoreVertIcon sx={{ color: "primary.main" }} />
        </IconButton>
    );
}

export default DocumentMenuButton;
