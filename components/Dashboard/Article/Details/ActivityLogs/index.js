import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import React from 'react';


function ActivityLogs({ children, sx }) {
    console.log(children)
    const newChildren = Array.isArray(children) ? children : children ? [children] : children
    return (
        <>
            <Box sx={{ ...sx, display: "flex" }}>
                <Stack>
                    {
                        newChildren?.map?.((child, ind) => (
                            <>
                                {
                                    ind !== 0 ? <Divider sx={{ height: 100, width: 7, borderColor: "primary.75%" }} orientation="vertical" flexItem />
                                        : <React.Fragment />
                                }
                                <Box sx={{ width: 14, height: 14, borderRadius: 100, border: "1px solid", borderColor: "primary.main" }} />
                            </>
                        ))
                    }
                </Stack>

                <Stack sx={{ pl: 2 }}>

                    {
                        newChildren?.map?.(child => {
                            console.log(child)
                            return (
                                <>
                                    {
                                        React.cloneElement(child, { sx: { height: 114 } })
                                    }
                                </>
                            )
                        })
                    }

                </Stack>
            </Box>

        </>
    );
}

export default ActivityLogs;

export const Log = ({ primary, secondary, sx }) => {
    return (
        <Box sx={sx}>
            <Typography sx={{ lineHeight: 1, pb: "3px" }} variant="body1" color="primary.main">{primary}</Typography>
            <Typography sx={{ lineHeight: 1, pb: "3px" }} variant="body2" color="primary.75%">{secondary}</Typography>
        </Box>
    );
}