import React, { useContext } from "react";
import { SelectContext } from "./SelectInput";
import Typography from "@mui/material/Typography";


function Option({ children, value: optionValue }) {

    const { value, setValue } = useContext(SelectContext);

    return (
        <React.Fragment>
            <Typography
                sx={{
                    borderRadius: "4px",
                    py: 1,
                    px: 2,
                    cursor: "pointer",
                    ...(value === optionValue &&
                        { bgcolor: "background.project.primary.main", color: "white" }),
                    ":hover": {
                        bgcolor: "#04476626"
                    }
                }}
                onClick={() => setValue(optionValue)}
                variant="body1"
                color="initial"
            >
                {children}
            </Typography>
        </React.Fragment>
    );
}

export default Option;
