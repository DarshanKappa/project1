import { useContext } from "react";
import { ArticleMenuContext } from ".";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export function ArticleMenuButton({ children, rowData }) {

    const {
        open,
        setAnchorEl,
        menuId,
        buttonId,
        setRowData,
    } = useContext(ArticleMenuContext);

    return (
        <IconButton
            aria-label="more"
            id={buttonId}
            aria-controls={open ? menuId : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(e) => { setRowData(rowData); setAnchorEl(e.currentTarget) }}
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
