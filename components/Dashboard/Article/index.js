import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AdvanceTable from "../../Table/AdvanceTable";
import React, { useEffect, useState } from "react";
import ArticleForm from "./ArticleForm";
import Modal from "../../Modal";
import ArticleMenu from "./ArticleMenu";
import ArticleMenuButton from "./ArticleMenu/ArticleMenuButton";
import RenameSVG from "../../SVGs/RenameSVG";
import RemoveSVG from "../../SVGs/RemoveSVG";
import ArticleDetails from "./Details";

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

const menuItems = [
  {
    name: "View",
    value: "view",
    icon: <RenameSVG />,
  },
  {
    name: "Edit",
    value: "edit",
    icon: <RenameSVG />,
  },
  {
    name: "Delete",
    value: "delete",
    icon: <RemoveSVG />,
  },
];

function Articles({}) {
  const [modal, setModal] = useState(false);
  const [menuitem, setMenuitem] = useState(null);
  const [rowData, setRowData] = useState({});

  useEffect(() => {
    // router.push("dashboard", "dashboard/articles", {shallow: true})
  }, []);

  const onCloseModal = () => {
    setModal(false);
  };

  const onNewClient = () => {
    setModal(true);
  };

  const onMenuItemClick = (data, menu) => {
    setMenuitem(menu);
    setRowData(data);
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
        New Article
      </Button>,
    ],
  };

  const tableProps = {
    headers,
    rows,
    toolBar,
    // In Action Button: here developer can change the child compoment by passing props, But Icon will not change.
    // And component should be able to accept children.
    // I'll have default prop rowData.
    action: { isAction: true, props: { children: <ArticleMenuButton /> } },
  };

  return (
    <React.Fragment>
      <ArticleMenu onMenuItemClick={onMenuItemClick} menuItems={menuItems}>
        {menuitem ? (
          <>
            {menuitem === "view" && <ArticleDetails rowData={rowData} />}
            {menuitem === "edit" && <>Edit</>}
            {menuitem === "delete" && <>Delete</>}
          </>
        ) : (
          <Box sx={{ px: 2, py: 2 }}>
            <AdvanceTable {...tableProps} />
          </Box>
        )}

        <Modal open={modal} onClose={onCloseModal}>
          <ArticleForm onCloseModal={onCloseModal} />
        </Modal>
      </ArticleMenu>
    </React.Fragment>
  );
}

export default Articles;
