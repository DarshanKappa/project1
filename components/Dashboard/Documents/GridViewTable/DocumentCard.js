import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton, MenuItem, Menu, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PDFSVG from "../../../SVGs/PDFSVG";
import React, { useState } from "react";
import ViewSVG from "../../../SVGs/ViewSVG";
import RenameSVG from "../../../SVGs/RenameSVG";
import InfoSVG from "../../../SVGs/InfoSVG";
import StartSVG from "../../../SVGs/StartSVG";
import RemoveSVG from "../../../SVGs/RemoveSVG";
import DocumentMenuButton from "../DocumentMenu/DocumentMenuButton";

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

function DocumentCard({ fileIcon }) {

	const [anchorEl, setAnchorEl] = useState(null)

	const open = Boolean(anchorEl)

	const handleClose = () => {
		setAnchorEl(null)
	}


	return (
		<>
			<Card sx={documentCardStyle}>
				<CardMedia sx={{ bgcolor: "yellow", height: 200 }}>
					<Box sx={{ width: "100%", height: "100%", position: "relative", }}>
						<Image
							fill
							style={{ width: "100%", height: "100%", padding: 20, backgroundColor: "white", color: "black" }}
							src={"/images/fileimage.png"}
						/>
					</Box>
				</CardMedia>
				<CardContent sx={{ px: 0, py: 0, height: 55, display: "flex", placeItems: "center", }}>

					{React.cloneElement(fileIcon, { sx: { width: 40, height: 40, } })}

					<Typography variant="body1" component={"div"} sx={{ px: 1, color: "primary.75%", width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} color="primary.main">Important File New Years 2022 - 2023</Typography>
				</CardContent>
				<CardActions sx={{ display: "flex", height: 30, placeItems: "center", justifyContent: "space-between", p: 0 }}>

					<Typography variant="caption" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pr: 1 }} color="initial">Last Opened 31 March 2023</Typography>

					<Box sx={{ display: "flex", p: 0 }}>
						<AvatarGroup sx={{ border: "0px solid", placeItems: "center" }}>
							<Avatar sx={{ height: 20, width: 20, bgcolor: "seagreen", border: "0px!important" }}>K</Avatar>
							<Avatar sx={{ height: 20, width: 20, bgcolor: "orange", border: "0px!important" }}>D</Avatar>
							<Avatar sx={{ height: 20, width: 20, bgcolor: "tomato", border: "0px!important" }}>T</Avatar>
						</AvatarGroup>
						<DocumentMenuButton />
					</Box>

				</CardActions>
			</Card>
		</>
	);
}

export default DocumentCard;