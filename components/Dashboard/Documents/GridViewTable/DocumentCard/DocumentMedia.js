import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";

export default function DocumentMedia({ src }){
	return (
		<CardMedia sx={{ bgcolor: "white", height: 200 }}>
			<Box sx={{
				width: "100%",
				height: "100%",
				overflow: "hidden",
				position: "relative",
			}}>
				<Image
					width={300}
					height={300}
					style={{
						width: "100%",
						height: "auto",
						padding: 20,
						backgroundColor: "white",
						color: "black"
					}}
					src={src}
				/>
			</Box>
		</CardMedia>
	);
}


