import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../../MainLayout";
import MainPage from "../../MainPage";
import Table from "../../Table/DataTable";
import AdvanceTable from "../../Table/AdvanceTable";
import React, { useState } from "react";
import SlideBar from "../../SlideBar";
import ArticleForm from "./ArticleForm";
import Modal from "../../Modal";

const headers = [
    "Name", "Username", "Email", "Contact", "Company",
]

const rows = [
    ["Darshan Prajapti", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Tvisha Patel", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Jaimin Jethva", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Sahil Chauhan", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Darshan Prajapti", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Tvisha Patel", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Jaimin Jethva", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Sahil Chauhan", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Darshan Prajapti", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Tvisha Patel", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Jaimin Jethva", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Sahil Chauhan", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Darshan Prajapti", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Tvisha Patel", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Jaimin Jethva", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
    ["Sahil Chauhan", "Software Engineer", "darshan.prajapati@fero.ai", "9865742154", "Fero.ai",],
]

function Articles({ }) {

    const [modal, setModal] = useState(false);

    const onCloseModal = () => {
        setModal(false)
    }

    const onNewClient = () => {
        setModal(true)
    }

    const toolBar = {
        searchBar: true,
        buttons: [
            <Button variant="outlined" color="primary" key="columns">Columns</Button>,
            <Button variant="outlined" color="primary" key="filter">Filter</Button>,
            <Button variant="outlined" color="success" key="new_chat" onClick={onNewClient}>New Article</Button>,
        ]
    }

    const tableProps = {
        headers,
        rows,
        isAction: true,
        toolBar
    }

    return (
        <React.Fragment>
            <Box sx={{ px: 2, py: 2 }}>
                <AdvanceTable {...tableProps} />
            </Box>

            <Modal open={modal} onClose={onCloseModal}>
                <ArticleForm onCloseModal={onCloseModal} />
            </Modal>
        </React.Fragment>
    );
}

export default Articles;

