import { Box, Button, IconButton, Typography } from "@mui/material";
import DataTable from "./DataTable";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SlideBar from "../SlideBar";
import ArticleForm from "../Dashboard/ArticleForm2";
import { useState } from "react";




function AdvanceTable({ headers, rows, isAction, toolBar }) {

    const newHeaders = [
        // First No. header
        (<IndexColHead />),

        // Other header
        ...headers.map(h => <CommonColHead value={h} />),

        // Action header
        (isAction && (<ActionColHead />))
    ]


    const newRows = rows.map((row, index) => [
        // First index column
        (<IndexColBody value={index + 1} />),

        // Other columns
        ...row.map(r => (<CommonColBody value={r} />)),

        //  Action column
        (isAction && <ActionButton />)
    ])

    return (
        <>
            <DataTable headers={newHeaders} rows={newRows} toolBar={toolBar} />
        </>
    );
}

export default AdvanceTable;



const indexColHeadStyle = {
    px: 1,
    py: 1,
    bgcolor: "primary.light",
    textAlign: "center",
    fontWeight: 600,
    color: "primary.main"
}

const commonColHeadStyle = {
    px: 2,
    py: 1,
    fontWeight: 600,
    textAlign: "left",
    color: "primary.main"
}

const actionColHeadStyle = {
    px: 2,
    py: 1,
    fontWeight: 600,
    textAlign: "center",
    color: "primary.main"
}

const indexColBodyStyle = {
    px: 1,
    py: 1,
    bgcolor: "primary.light",
    textAlign: "center",
    color: "primary.main"
}

const commonColBodyStyle = {
    px: 2,
    py: 1,
    color: "primary.main"
}


export const IndexColHead = () => (
    <Typography variant="body2" sx={indexColHeadStyle}>
        No.
    </Typography>
);

export const CommonColHead = ({ value }) => (
    <Typography variant="body2" sx={commonColHeadStyle}>
        {value}
    </Typography>
);

export const ActionColHead = () => (
    <Typography variant="body2" sx={actionColHeadStyle}>
        Action
    </Typography>
);

export const IndexColBody = ({ value }) => (
    <Typography sx={indexColBodyStyle} variant="body2" >
        {value}
    </Typography>
);

export const CommonColBody = ({ value }) => (
    <Typography sx={commonColBodyStyle} variant="body2" >
        {value}
    </Typography>
);

export const ActionButton = () => (
    <Box textAlign={"center"}>
        <IconButton sx={{ p: 0 }}>
            <MoreHorizIcon fontSize="medium" sx={{ color: "primary.main" }} />
        </IconButton>
    </Box>
);
