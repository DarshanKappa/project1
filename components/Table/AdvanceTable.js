import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DataTable from "./DataTable";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';




function AdvanceTable({ headers, rows, action, toolBar }) {

    const newHeaders = [
        // First No. header
        (<IndexColHead key={0} />),

        // Other header
        ...headers.map((h, ind) => <CommonColHead value={h.name} key={ind + 1} />),

        // Action header
        (action.isAction && (<ActionColHead key={-1} />))
    ]


    const newRows = rows.map((row, index) => [
        // First index column
        (<IndexColBody value={index + 1} key={index + "-0"} />),

        // Other columns
        ...headers.map((h, ind) => (<CommonColBody value={row?.[h.key]} key={index + "-" + (ind + 1)} />)),

        //  Action column
        (action.isAction && <ActionButton rowData={row} key={index - +"-1"} {...action.props} />)
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


// here developer can change the child compoment by passing props, But Icon will not change
// And component should able to accept children.
export const ActionButton = (props) => (
    <Box {...props} textAlign={"center"}>
        {props.children ?
            React.cloneElement(props.children, {
                rowData: props?.rowData,
                children: (
                    <IconButton sx={{ p: 0 }}>
                        <MoreHorizIcon fontSize="medium" sx={{ color: "primary.main" }} />
                    </IconButton>
                )
            })
            :
            <IconButton sx={{ p: 0 }}>
                <MoreHorizIcon fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
        }
    </Box>
);
