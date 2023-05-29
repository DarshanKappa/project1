import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ThemeContext({ children }) {

    const theme = createTheme({
        palette: {
            primary: {
                light: "#E8F0FF",
                main: "#044766",
                "75%": "#044766bf"
            },
            success: {
                main: "#5DB03E"
            },
            background: {
                project: {
                    primary: {
                        main: "#044766"
                    },
                    paper: {
                        main: "#DEE7EB"
                    }
                },
            }

        }
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ThemeContext;
