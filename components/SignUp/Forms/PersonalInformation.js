import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SimpleInput from "../../Inputs/SimpleInput";
import PasswordInput from "../../Inputs/PasswordInput";
import SelectInput from "../../Inputs/SelectInput";
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

	console.log(watch())

	const [count, setCount] = useState(0)

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
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
					<Button variant="contained" onClick={()=>setCount(count+1)}>{count}</Button>
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
					<SelectInput
						register={register}
						label="Profession"
						name="personal.profession"
						icon={<GroupAddUserSVG />}
						sx={{ my: 1 }}
						required
						// control={control}
						setValue={setValue}
						watch={watch}

					>
						{
							options?.map(opt => (
								<Option key={opt} value={opt}>{opt}</Option>
							))
						}
					</SelectInput>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
					<Button size="large" type="submit" sx={{ bgcolor: "primary", fontWeight: 600, textTransform: "none", ":hover": { bgcolor: "primary" } }} variant="contained">Proceed</Button>
				</Box>
			</form>
		</>
	);
}

export default PersonalInformation;
