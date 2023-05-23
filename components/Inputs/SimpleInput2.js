import { Box, Divider, Input, InputAdornment, InputBase, Stack, TextField, Typography } from "@mui/material";
import React from "react";


function SimpleInput2({ register = () => { }, label, name, icon, sx, inputProps, required, ...restProps }) {
	return (
		<>
			<Stack sx={{ width: "100%", ...sx }}>
				<Typography sx={{ mb: "4px", userSelect: "none" }} variant="body2" color="black	">{label}
					<Typography variant="h6" color="error" component={"span"}>
						{required && "*"}
					</Typography>
				</Typography>

				<InputBase
					{...(name && register(name))}
					fullWidth
					required={required}
					sx={{
						height: 50,
						px: 2,
						border: "1px solid",
						color: "primary.main",
						// borderRadius: "4px",
						...inputProps?.style
					}}
					startAdornment={icon && (
						<>
							<InputAdornment position="start">
								<Stack flexDirection={"row"} sx={{ placeItems: "center", height: 35, mr: 1, justifyContent: "center" }}>
									<Box sx={{ width: 25, height: 25 }}>
										{React.cloneElement(icon, { sx: { color: "primary.main" } })}
									</Box>
								</Stack>
							</InputAdornment>
							{/* < Divider sx={{  borderRight: "1px solid", ml: 1, mr: 1, height: "100%" }} orientation="vertical" flexItem /> */}
						</>
					)
					}
					{...restProps}
				/>
			</Stack >
		</>
	);
}

export default SimpleInput2;