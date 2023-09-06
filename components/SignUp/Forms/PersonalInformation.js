import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PasswordInput from "@formFields/PasswordInput";
import SimpleInput from "@formFields/SimpleInput";
import SelectInput2 from "@formFields/SelectInput2";
import { FormStepperContext } from "components/Forms/StepperForm";
import UserDuotoneSVG from "@svgs/UserDuotone";
import UserDuotone2SVG from "@svgs/UserDuotone2SVG";
import MessageSVG from "@svgs/MessageSVG";
import GroupAddUserSVG from "@svgs/GroupAddUserSVG";
import LockSVG from "@svgs/LockSVG";

const options = [
	"Chartered Accountant",
	"Tax Consultant",
	"Advocate",
	"Company Secretary"
]

function PersonalInformation({ sx }) {

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
		console.log(watch())
		submitHold(() => {
			console.log("Personal info")
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
				<Box sx={{
					width: "100%",
					pr: 4,
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					placeItems: "center",
					...sx
				}}
				>
					<SimpleInput
						register={register}
						label="Name"
						name="personal.name"
						icon={<UserDuotoneSVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="Username"
						name="personal.username"
						icon={<UserDuotone2SVG />}
						sx={{ my: 1 }}
						required
					/>
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
					<SelectInput2
						register={register}
						name="personal.profession"
						label={"Profession"}
						icon={<GroupAddUserSVG />}
						required
						sx={{ my: 1 }}
					>
						{
							options?.map(op=>(
								<MenuItem key={op} value={op}>{op}</MenuItem>
							))
						}
					</SelectInput2>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
					<Button size="large" type="submit" sx={{ bgcolor: "primary", fontWeight: 600, textTransform: "none", ":hover": { bgcolor: "primary" } }} variant="contained">Proceed</Button>
				</Box>
			</form>
		</>
	);
}

export default PersonalInformation;
