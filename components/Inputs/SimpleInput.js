import { Box, Divider, Input, InputAdornment, InputBase, Stack, TextField, Typography } from "@mui/material";


function SimpleInput({ register = () => { }, label, name, icon, sx, ...restProps }) {
	return (
		<>
			<Stack sx={{ width: "100%", ...sx }}>
				<Typography sx={{ mb: 1, userSelect: "none" }} variant="body1" color="black	">{label}</Typography>
				<InputBase
					{...(name && register(name))}
					fullWidth
					sx={{
						height: 50,
						px: 2,
						bgcolor: "#DEE7EB",
						borderRadius: "4px",
					}}
					startAdornment={icon && (
						<InputAdornment position="start">
							<Stack flexDirection={"row"} sx={{placeItems: "center", height: 35}}>
								<Box sx={{width: 20, height: 20}}>
									{icon}
								</Box>
								<Divider sx={{ borderRightWidth: 1, ml: 2,  }} orientation="vertical" flexItem />
							</Stack>
						</InputAdornment>)
					}
					{...restProps}
				/>
			</Stack >
		</>
	);
}

export default SimpleInput;