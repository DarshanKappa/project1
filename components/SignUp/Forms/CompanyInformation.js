import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SimpleInput from "@formFields/SimpleInput";
import { FormStepperContext } from "@components/Forms/StepperForm";
import CertificateSVG from "@svgs/CertificateSVG";
import PercentSVG from "@svgs/PercentSVG";
import MapSVG from "@svgs/MapSVG";
import Map2SVG from "@svgs/Map2SVG";
import CallSVG from "@svgs/CallSVG";
import PinSVG from "@svgs/PinSVG";


function CompanyInformation({ sx }) {

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
			console.log("Company info")
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
				<Box sx={{
					width: "100%",
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					placeItems: "center",
					pr: 4,
					...sx
				}}
				>
					<SimpleInput
						register={register}
						label="Company Name"
						name="company.companyName"
						icon={<CertificateSVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="Contact Number"
						name="company.contactNumber"
						icon={<CallSVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="Address"
						name="company.address"
						icon={<PinSVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="Area"
						name="company.area"
						icon={<Map2SVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="Country"
						name="company.country"
						icon={<MapSVG />}
						sx={{ my: 1 }}
						required
					/>
					<SimpleInput
						register={register}
						label="GST Number"
						name="company.gstNumber"
						icon={<PercentSVG />}
						sx={{ my: 1 }}
						required
					/>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
				<Button type="submit" sx={{ bgcolor: "primary", ":hover": { bgcolor: "primary" } }} variant="contained">Process</Button>
				</Box>
			</form>
		</>
	);
}

export default CompanyInformation;
