import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SimpleInput from "../../Inputs/SimpleInput";
import PasswordInput from "../../Inputs/PasswordInput";
import { FormStepperContext } from "../../Forms/StepperForm";
import MessageSVG from "../../SVGs/MessageSVG";
import LockSVG from "../../SVGs/LockSVG";

const options = [
	"Chartered Accountant",
	"Tax Consultant",
	"Advocate",
	"Company Secretary"
]

function UserLoginForm({ sx }) {

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
			console.log('------Submit User Login Form-----------')

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
						name="user.email"
						type="email"
						icon={<MessageSVG />}
						sx={{ my: 1 }}
						required
					/>
					<PasswordInput
						register={register}
						label="Password"
						name="user.password"
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

export default UserLoginForm;
