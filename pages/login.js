import React from "react";
import SimpleInput from "../components/Inputs/SimpleInput";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import StepperForm from "../components/Forms/StepperForm";
import PersonalInformation from "../components/SignUp/Forms/PersonalInformation";
import CompanyInformation from "../components/SignUp/Forms/CompanyInformation";
import Page from "../components/Page";
import Link from "next/link";
import AdminLoginForm from "../components/SignUp/Forms/AdminLoginForm";
import UserLoginForm from "../components/SignUp/Forms/UserLoginForm";

const stepsName = [
	"Admin",
	"User",
]


function LogIn() {
	return (
		<Grid container height="100vh">
			<Grid item xs={6} sx={{ px: 10, py: 15, display: "flex", justifyContent: "center" }}>
				<Stack sx={{ width: 500 }}>


					<Typography sx={{ fontWeight: 600 }} variant="h6" color="initial">
						Login to your Account
					</Typography>

					<StepperForm
						stepper={false}
						stepsName={stepsName}
						sx={{
							display: "flex",
							flexDirection: "column",
							placeItems: "center",
							width: { xs: 100, sm: 100, md: 100, lg: "100%" }
						}}
					>
						{[
							<AdminLoginForm sx={{ width: "100%" }} />
							,
							<UserLoginForm sx={{ width: "100%" }} />
						]}
					</StepperForm>

					<Typography sx={{ textAlign: "center" }} variant="body1" color="initial">
						Don't have a account? <Link href="#" style={{ textDecoration: "underline", color: "#5DB03E" }}>Signup</Link>
					</Typography>

				</Stack>

			</Grid>

			<Grid item xs={6} sx={{ bgcolor: "background.project.primary.main" }}  >
			</Grid>
		</Grid>
	);
}

export default LogIn;