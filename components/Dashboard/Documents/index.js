import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import MainLayout from "../../MainLayout";
import Table from "../../Table/DataTable";
import AdvanceTable from "../../Table/AdvanceTable";
import React, { createContext, useContext, useState } from "react";
import SlideBar from "../../SlideBar";
import ArticleForm from "../Article/ArticleForm";
import Modal from "../../Modal";
import DocumentsToolBar from "./DocumentsToolBar";
import DocumentCard from "./GridViewTable/DocumentCard";
import PDFSVG from "../../SVGs/PDFSVG";
import ExcelSVG from "../../SVGs/ExcelSVG";
import ZipSVG from "../../SVGs/ZipSVG";
import AddDocumentCard from "./GridViewTable/AddDocumentCard";
import ListViewTable from "./ListViewTable";
import DocumentMenu from "./DocumentMenu";
import GridViewTable from "./GridViewTable";
import DocumentToolMenu from "./DocumentsToolBar/DocumentToolMenu";
import ListSVG from "../../SVGs/Documents/ListSVG";
import GridSVG from "../../SVGs/Documents/GridSVG";

export const DocumentViewContext = React.createContext();

const menuItems = [
    {
        icon: <GridSVG />,
        name: "Grid",
        value: "grid"
    },
    {
        icon: <ListSVG />,
        name: "List",
        value: "list"
    },
]

function Documents({ }) {

    const [view, setview] = useState("grid");

    return (
        <React.Fragment>
            <DocumentMenu>
                <Stack sx={{ height: "100%", width: "100%", px: 4, py: 2 }}>
                    <DocumentToolMenu menuItems={menuItems} onMenuItemClick={(v) => setview(v)}>
                        <DocumentsToolBar />
                    </DocumentToolMenu>
                    <Box sx={{ width: "100%", flexGrow: 1, overflowY: "auto" }}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", overflowY: "auto", py: 4, }}>
                            {
                                view === "list" ?
                                    <ListViewTable />
                                    : <GridViewTable />
                            }
                        </Box>
                    </Box>
                </Stack>
            </DocumentMenu>
        </React.Fragment>
    );
}

export default Documents;

