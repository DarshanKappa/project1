import { Box, Button } from "@mui/material";
import React from "react";



function StepperButtons({
    isPrevious = true,
    isNext = false,
    isClose = true,
    submitName = "Submit",
    disableSubmit = false,
    onSubmit = () => { },
    onClose = () => { },
    onPrevious = () => { },
    onNext = () => { },
    variant = "text"
}) {


    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", placeItems: "center" }}>
            <Box>
                {
                    isPrevious ?
                        <Button
                            size="small"
                            onClick={onPrevious}
                            variant={variant}
                            sx={{color: "white"}}
                        >
                            Previous
                        </Button>
                        :
                        React.Fragment
                }
            </Box>

            <Box>
                {
                    isClose ?
                        <Button
                            size="small"
                            color={"error"}
                            onClick={onClose}
                            variant={variant}
                            sx={{mr: 2}}
                        >
                            Close
                        </Button>
                        :
                        React.Fragment
                }
                <Button
                    type="submit"
                    color={"success"}
                    size="small"
                    disabled={disableSubmit}
                    onClick={isNext ? onNext : onSubmit}
                    variant={variant}
                >
                    {isNext ? "Next" : submitName}
                </Button>
            </Box>
        </Box>
    );
}

export default StepperButtons;
