import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../../MainLayout";
import MainPage from "../../MainPage";
import Table from "../../Table/DataTable";
import AdvanceTable from "../../Table/AdvanceTable";
import React, { useState } from "react";
import SlideBar from "../../SlideBar";
import ArticleForm from "./ClientForm";
import Modal from "../../Modal";
import ClientMenuButton from "./ClientMenu/ClientMenuButton";
import ClientMenu from "./ClientMenu";

const headers = [
  { name: "Name", key: "name" },
  { name: "Username", key: "username" },
  { name: "Email", key: "email" },
  { name: "Contact", key: "contactNumber" },
  { name: "Company", key: "company" },
];

const rows = [
  {
    name: "Darshan Prajapti",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Tvisha Patel",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Jaimin Jethva",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Sahil Chauhan",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Darshan Prajapti",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Tvisha Patel",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Jaimin Jethva",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Sahil Chauhan",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Darshan Prajapti",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Tvisha Patel",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Jaimin Jethva",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Sahil Chauhan",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Darshan Prajapti",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Tvisha Patel",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Jaimin Jethva",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
  {
    name: "Sahil Chauhan",
    username: "Software Engineer",
    email: "darshan.prajapati@fero.ai",
    contactNumber: "9865742154",
    company: "Fero.ai",
  },
];

function Clients({}) {
  const [modal, setModal] = useState(false);

  const onCloseModal = () => {
    setModal(false);
  };

  const onNewClient = () => {
    setModal(true);
  };

  const toolBar = {
    searchBar: true,
    buttons: [
      <Button variant="outlined" color="primary" key="columns">
        Columns
      </Button>,
      <Button variant="outlined" color="primary" key="filter">
        Filter
      </Button>,
      <Button
        variant="outlined"
        color="success"
        key="new_chat"
        onClick={onNewClient}
      >
        New Client
      </Button>,
    ],
  };

  const tableProps = {
    headers,
    rows,
    toolBar,
    action: { isAction: true, props: { children: <ClientMenuButton /> } },
  };

  return (
    <React.Fragment>
      <ClientMenu>
        <Box sx={{ px: 2, py: 2 }}>
          <AdvanceTable {...tableProps} />
        </Box>

        <Modal open={modal} onClose={onCloseModal}>
          <ArticleForm onCloseModal={onCloseModal} />
        </Modal>
      </ClientMenu>
    </React.Fragment>
  );
}

export default Clients;
