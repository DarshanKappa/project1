import { Box, Divider, InputAdornment, Stack, TextField, Typography, IconButton, InputBase } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import SimpleInput2 from "./SimpleInput2";


function PasswordInput2({ register = () => { }, label, name, icon, sx, visibleButton, ...restProps }) {

	const [visible, setVisible] = useState(false);

	return (
		<SimpleInput2
			register={register}
			label={label}
			name={name}
			type={visible ? "text" : "password"}
			icon={icon}
			sx={sx}
			endAdornment={(visibleButton && (
				<IconButton aria-label="" sx={{ pr: 0 }} onClick={() => setVisible(!visible)}>
					{
						visible ? <VisibilityIcon sx={{color: "primary.main"}} /> : <VisibilityOffIcon sx={{color: "primary.main"}} />
					}
				</IconButton>)
			)}
			{...restProps}
		/>
	);
}

export default PasswordInput2;
