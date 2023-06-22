import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function DocumentContent({ fileIcon, fileName }) {
	return (
		<CardContent sx={{
			px: 0,
			py: 0,
			height: 55,
			display: "flex",
			placeItems: "center",
		}}>

			{React.cloneElement(fileIcon, { sx: { width: 40, height: 40, } })}

			<Typography
				variant="body1"
				component={"div"}
				sx={{
					px: 1,
					color: "primary.75%",
					width: "100%",
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				}} color="primary.main">
				{fileName}
			</Typography>
		</CardContent>
	);
}

