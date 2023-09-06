import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


function SimpleInput({ register = () => { }, label, name, icon, sx, inputProps, ...restProps }) {
	return (
		<>
			<Stack sx={{ width: "100%", ...sx }}>
				<Typography sx={{ mb: 1, userSelect: "none" }} variant="body1" color="black	">{label}</		Typography>
				<InputBase
					{...(name && register(name))}
					fullWidth
					sx={{
						height: 50,
						px: 2,
						bgcolor: "background.project.paper.main",
						borderRadius: "4px",
						...inputProps?.style
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