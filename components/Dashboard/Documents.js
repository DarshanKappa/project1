import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import MainLayout from "../MainLayout";
import MainPage from "../MainPage";
import Table from "../Table/DataTable";
import AdvanceTable from "../Table/AdvanceTable";
import React, { useState } from "react";
import SlideBar from "../SlideBar";
import ArticleForm from "./ArticleForm";
import Modal from "../Modal";
import DocumentsToolBar from "./DocumentsToolBar";
import DocumentCard from "./DocumentCard";



function Documents({ }) {


    return (
        <React.Fragment>
            <Stack sx={{ height: "100%", width: "100%", px: 4, py: 2 }}>
                <DocumentsToolBar />

                <Box sx={{ width: "100%", flexGrow: 1, overflowY: "auto" }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", height: "100%", width: "100%", overflowY: "auto", py: 2, }}>

                        <DocumentCard  />
                        <DocumentCard />
                        <DocumentCard />
                        <DocumentCard />
                        <DocumentCard />
                        <DocumentCard />
                        <DocumentCard />
                        <DocumentCard />

                    </Box>
                </Box>





            </Stack>
        </React.Fragment>
    );
}

export default Documents;

