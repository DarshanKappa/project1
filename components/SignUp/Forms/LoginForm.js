import { Box, Button, Typography } from "@mui/material";
import SimpleInput from "../../Inputs/SimpleInput";
import PasswordInput from "../../Inputs/PasswordInput";
import SelectInput from "../../Inputs/SelectInput";
import { useContext } from "react";
import { FormStepperContext } from "../../Forms/StepperForm";
import UserDuotoneSVG from "../../SVGs/UserDuotone";
import UserDuotone2SVG from "../../SVGs/UserDuotone2SVG";
import MessageSVG from "../../SVGs/MessageSVG";
import GroupAddUserSVG from "../../SVGs/GroupAddUserSVG";
import LockSVG from "../../SVGs/LockSVG";
import Option from "../../Inputs/Option";

const options = [
	"Chartered Accountant",
	"Tax Consultant",
	"Advocate",
	"Company Secretary"
]

function LoginForm({ sx }) {

	const {
		form: {
			watch,
			control,
			register,
			handleSubmit,
			getValues,
			setValue,
			onSubmit: submitHold
		},
		previousProps: {
			isPrevious,
			onPrevious
		},
		nextProps: {
			isNext,
			onNext
		}
	} = useContext(FormStepperContext)

	const onSubmit = (data) => {
		submitHold(() => {

		})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
				<Box sx={{
					width: "100%",
					// pr: 4,
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					placeItems: "center",
					...sx
				}}
				>
					<SimpleInput
						register={register}
						label="Email"
						name="personal.email"
						type="email"
						icon={<MessageSVG />}
						sx={{ my: 1 }}
						required
					/>
					<PasswordInput
						register={register}
						label="Password"
						name="personal.password"
						icon={<LockSVG />}
						sx={{ my: 1 }}
						required
					/>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
					<Button size="large" type="submit" sx={{ bgcolor: "primary", fontWeight: 600, textTransform: "none", ":hover": { bgcolor: "primary" } }} variant="contained">Login</Button>
				</Box>
			</form>
		</>
	);
}

export default LoginForm;
