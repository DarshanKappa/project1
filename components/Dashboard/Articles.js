import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../../components/MainLayout";
import MainPage from "../../components/MainPage";
import Table from "../../components/Table/DataTable";
import AdvanceTable from "../../components/Table/AdvanceTable";
import React, { useState } from "react";
import SlideBar from "../../components/SlideBar";
import ArticleForm from "../../components/Dashboard/ArticleForm";
import Modal from "../../components/Modal";

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
            <Button variant="outlined" color="success" key="new_chat" onClick={onNewClient}>New Client</Button>,
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

