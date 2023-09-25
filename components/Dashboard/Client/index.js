import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AdvanceTable from "@components/Table/AdvanceTable";
import React, { useState } from "react";
import Modal from "@components/Modal";
import ClientMenu from "@components/Dashboard/Client/ClientMenu";
import ClientMenuButton from "@components/Dashboard/Client/ClientMenu/ClientMenuButton";
import ClientForm from "@components/Dashboard/Client/ClientForm";

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
function Clients({ }) {
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
    <ClientMenu>
      <Box sx={{ px: 2, py: 2 }}>
        <AdvanceTable {...tableProps} />
      </Box>

      <Modal open={modal} onClose={onCloseModal}>
        <ClientForm onCloseModal={onCloseModal} />
      </Modal>
    </ClientMenu>
  );
}

export default Clients;
