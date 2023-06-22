import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SimpleInput from "./SimpleInput";


function PasswordInput({ register = () => { }, label, name, icon, sx, visibleButton, ...restProps }) {

	const [visible, setVisible] = useState(false);

	return (
		<SimpleInput
			register={register}
			label={label}
			name={name}
			type={visible ? "text" : "password"}
			icon={icon}
			sx={sx}
			endAdornment={(visibleButton && (
				<IconButton aria-label="" sx={{ pr: 0 }} onClick={() => setVisible(!visible)}>
					{
						visible ? <VisibilityIcon /> : <VisibilityOffIcon />
					}
				</IconButton>)
			)}
			{...restProps}
		/>
	);
}

export default PasswordInput;
