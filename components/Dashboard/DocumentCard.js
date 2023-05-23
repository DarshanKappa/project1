import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PDFSVG from "../SVGs/PDFSVG";

const documentCardStyle = {
	width: 260, 
	height: "fit-content", 
	p: 2, 
	mx: 3, 
	mb: 6, 
	bgcolor: "primary.light",
	boxShadow: "0px 6px 4px -1px rgba(0,0,0,0.2), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.12)",
}

function DocumentCard({ }) {
	return (
		<Card sx={documentCardStyle}>
			<CardMedia sx={{ bgcolor: "yellow" }}>
				<Box sx={{ width: "100%", height: 200, position: "relative", }}>
					<Image
						fill
						style={{width: "100%", height: "100%", padding: 20,  backgroundColor: "white"}}
						src={"/images/file.png"}
					/>
				</Box>
			</CardMedia>
			<CardContent sx={{ px: 0, py: 2, display: "flex", placeItems: "center" }}>

				<PDFSVG sx={{ width: 30, height: 30, bgcolor: "red" }} />

				<Typography variant="body1" component={"div"} sx={{ px: 2, width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} color="primary.main">Important File New Years 2022 - 2023</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "space-between", p: 0 }}>

				<Typography variant="caption" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pr: 1 }} color="initial">Last Opened 31 March 2023</Typography>

				<Box sx={{ display: "flex", p: 0 }}>
					<AvatarGroup sx={{ border: "0px solid", placeItems: "center" }}>
						<Avatar sx={{ height: 20, width: 20, bgcolor: "orange", border: "0px!important" }}>D</Avatar>
						<Avatar sx={{ height: 20, width: 20, bgcolor: "tomato", border: "0px!important" }}>T</Avatar>
					</AvatarGroup>
					<MoreVertIcon />
				</Box>

			</CardActions>
		</Card>
	);
}

export default DocumentCard;