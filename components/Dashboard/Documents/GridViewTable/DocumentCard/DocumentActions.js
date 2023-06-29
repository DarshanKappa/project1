import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DocumentMenuButton from "../../DocumentMenu/DocumentMenuButton";


const colors = [
	"tomato",
	"seagreen",
	"orange"
]

export default function DocumentActions({ collaborators, updated }) {
	return (
		<CardActions sx={{
			display: "flex",
			height: 30,
			placeItems: "center",
			justifyContent: "space-between",
			p: 0
		}}>

			<Typography
				variant="caption"
				sx={{
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
					pr: 1
				}}
			>
				Last Opened {updated?.datetime}
			</Typography>


			<Box sx={{ display: "flex", p: 0 }}>
				<AvatarGroup sx={{ border: "0px solid", placeItems: "center" }}>
					{
						collaborators?.map((name, ind) => (
							<Avatar
								key={name}
								sx={{ height: 20, width: 20, bgcolor: colors[ind % 3], border: `1px solid ${colors[ind % 3]}!important`, placeItems: "center", justifyContent: "center" }}>
								{name?.charAt?.(0)}
							</Avatar>
						))
					}
				</AvatarGroup>
				<DocumentMenuButton />
			</Box>

		</CardActions>
	);
}
