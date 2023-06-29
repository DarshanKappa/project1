import React from "react";
import Card from "@mui/material/Card";
import DocumentMedia from "./DocumentMedia";
import DocumentContent from "./DocumentContent";
import DocumentActions from "./DocumentActions";



const documentCardStyle = {
	width: 260,
	height: "fit-content",
	px: "12px",
	py: "12px",
	mx: 3,
	mb: 6,
	bgcolor: "primary.light",
	boxShadow: "0px 6px 3px -3px rgba(0,0,0,0.2), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.12)",
}

function DocumentCard({ obj }) {
	return (
		<Card sx={documentCardStyle}>

			<DocumentMedia src={obj.fileLink} />

			<DocumentContent fileIcon={obj.fileIcon} fileName={obj.fileName} />

			<DocumentActions collaborators={obj.collaborators} updated={obj.updated} />

		</Card>
	);
}

export default DocumentCard;
