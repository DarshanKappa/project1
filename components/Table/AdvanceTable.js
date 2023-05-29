import { Box, Button, IconButton, Typography } from "@mui/material";
import DataTable from "./DataTable";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SlideBar from "../SlideBar";
import { useState } from "react";




function AdvanceTable({ headers, rows, isAction, toolBar }) {

    const newHeaders = [
        // First No. header
        (<IndexColHead key={0} />),

        // Other header
        ...headers.map((h, ind) => <CommonColHead value={h} key={ind+1} />),

        // Action header
        (isAction && (<ActionColHead key={-1} />))
    ]


    const newRows = rows.map((row, index) => [
        // First index column
        (<IndexColBody value={index + 1} key={index+"-0"} />),

        // Other columns
        ...row.map((r, ind) => (<CommonColBody value={r} key={index+"-"+(ind+1)} />)),

        //  Action column
        (isAction && <ActionButton key={index-+"-1"} />)
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


export const IndexColHead = (props) => (
    <Typography {...props} variant="body2" sx={indexColHeadStyle}>
        No.
    </Typography>
);

export const CommonColHead = ({ value, key }) => (
    <Typography key={key} variant="body2" sx={commonColHeadStyle}>
        {value}
    </Typography>
);

export const ActionColHead = (props) => (
    <Typography {...props} variant="body2" sx={actionColHeadStyle}>
        Action
    </Typography>
);

export const IndexColBody = ({ value, key }) => (
    <Typography sx={indexColBodyStyle} key={key} variant="body2" >
        {value}
    </Typography>
);

export const CommonColBody = ({ value, key }) => (
    <Typography sx={commonColBodyStyle} key={key} variant="body2" >
        {value}
    </Typography>
);

export const ActionButton = (props) => (
    <Box {...props} textAlign={"center"}>
        <IconButton sx={{ p: 0 }}>
            <MoreHorizIcon fontSize="medium" sx={{ color: "primary.main" }} />
        </IconButton>
    </Box>
);
