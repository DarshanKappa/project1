import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import CheckedBox from "@svgs/CheckedBox";
import UnCheckedBox from "@svgs/UnCheckedBox";

const headRowStyle = {
    my: 1,
    px: 4,
    display: "flex",
}

const headColStyle = {
    display: "flex",
    justifyContent: "start",
    py: 2
}

const bodyRowStyle = {
    userSelect: "none",
    mt: 3,
    px: 4,
    display: "flex",
    boxShadow: "0px -14px 16px -22px #d9d9d994, 0px 18px 37px -15px #d9d9d994, 0px 8px 24px -4px #d9d9d994"
}

const bodyColStyle = {
    color: "primary.main",
    display: "flex",
    justifyContent: "start",
    py: 1,
    placeItems: "center"
}


function ListDocument({ headers, rows, widths }) {

    const [selectedIndex, setSelectedIndex] = useState(null);

    const onSelect = (index) => {
        if (index === selectedIndex) {
            setSelectedIndex(null)
        } else {
            setSelectedIndex(index)
        }
    }

    return (
        <Stack width={"100%"} sx={{ px: 2 }}>
            <Box sx={headRowStyle}>
                {
                    headers.map((col, ind) => (
                        <HeadCol key={ind} col={col} width={widths[ind]} />
                    ))
                }
            </Box>
            <Divider sx={{}} />
            {
                rows.map((row, index) => (
                    <Box
                        key={row?.[0]?.name}
                        sx={{ ...bodyRowStyle, bgcolor: index === selectedIndex ? "primary.light" : "white" }}
                    >
                        {
                            row.map((col, ind) => (
                                <Box key={{ ind }} sx={{ ...bodyColStyle, width: widths[ind] }}>
                                    {
                                        ind === 0 ?
                                            <NameCol index={index} selectedIndex={selectedIndex} onSelect={onSelect} file={col} />
                                            : ind === 2 ?
                                                <ModifiedCol col={col} />
                                                :
                                                <CommonCol col={col} />
                                    }
                                </Box>
                            ))
                        }
                    </Box>

                ))
            }
        </Stack>
    );
}

export default ListDocument;

export const HeadCol = ({ col, width, }) => {
    return (
        <Box key={col} sx={{ ...headColStyle, width: width }}>
            <Typography sx={{}} variant="h8" color="primary.main">
                {col}
            </Typography>
        </Box>
    );
}

export const NameCol = ({ index, selectedIndex, onSelect, file }) => {
    return (
        <>
            <IconButton
                aria-label="checked-button"
                onClick={() => onSelect(index)}
                sx={{ ":hover": { background: "none" } }}
            >

                {index === selectedIndex ?
                    <CheckedBox sx={{ width: 30, height: 30 }} />
                    : <UnCheckedBox sx={{ width: 30, height: 30 }} />}
            </IconButton>
            {React.cloneElement(file.icon, { sx: { width: 35, height: 35 } })}
            <Typography variant="body1" sx={{ pl: 1 }} color="primary.mian">
                {file.name}
            </Typography>
        </>
    );
}

export const ModifiedCol = ({ col }) => {
    return (
        <Box>
            <Typography variant="body2" color="primary.75%">{col.dateTime}</Typography>
            <Typography variant="caption" color="primary.75%">by {col.by}</Typography>
        </Box>
    );
}

export const CommonCol = ({ col }) => {
    return (
        <Typography variant="body1" color="primary.75%">
            {col}
        </Typography>
    );
}
