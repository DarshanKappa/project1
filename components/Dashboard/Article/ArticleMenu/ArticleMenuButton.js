import { useContext } from "react";
import { ArticleMenuContext } from ".";
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export function ArticleMenuButton({ children }) {

    const {
        open,
        setAnchorEl,
        menuId,
        buttonId,
    } = useContext(ArticleMenuContext);

    return (
        <IconButton
            aria-label="more"
            id={buttonId}
            aria-controls={open ? menuId : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(e) => { setAnchorEl(e.currentTarget) }}
        >
            {
                children ?
                    children
                    :
                    <MoreVertIcon sx={{ color: "primary.main" }} />
            }
        </IconButton>
    );
}

export default ArticleMenuButton;
