import { Box, Button } from "@mui/material";
import SimpleInput from "../../Inputs/SimpleInput";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PasswordInput from "../../Inputs/PasswordInput";
import PublicIcon from '@mui/icons-material/Public';
import MapIcon from '@mui/icons-material/Map';
import PercentIcon from '@mui/icons-material/Percent';
import { useContext } from "react";
import { FormStepperContext } from "../../Forms/StepperForm";
import CertificateSVG from "../../SVGs/CertificateSVG";
import PercentSVG from "../../SVGs/PercentSVG";
import MapSVG from "../../SVGs/MapSVG";
import Map2SVG from "../../SVGs/Map2SVG";
import CallSVG from "../../SVGs/CallSVG";
import PinSVG from "../../SVGs/PinSVG";


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
