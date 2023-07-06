import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StepperForm from "@components/Forms/StepperForm";
import PersonalInformation from "@components/SignUp/Forms/PersonalInformation";
import CompanyInformation from "@components/SignUp/Forms/CompanyInformation";
import Link from "next/link";


const stepsName = [
	"Personal Information",
	"Company Information",
]

function SignUp() {
	return (
		<Grid container height="100vh">
			<Grid item xs={6} sx={{ px: 10, py: 15, display: "flex", justifyContent: "center" }}>
				<Stack sx={{ width: 500 }}>


					<Typography sx={{ fontWeight: 600 }} variant="h6" color="initial">Signup</Typography>

					<StepperForm stepsName={stepsName} sx={{
						display: "flex",
						flexDirection: "column",
						placeItems: "center",
						width: { xs: 100, sm: 100, md: 100, lg: "100%" }
					}}>
						{[
							<PersonalInformation key="0" sx={{ height: 350, width: "100%" }} />
							,
							<CompanyInformation key="0" sx={{ height: 350, width: "100%" }} />
						]}
					</StepperForm>

					<Typography sx={{ textAlign: "center" }} variant="body1" color="primary">
						<Link href="#" style={{ textDecoration: "underline", color: "#5DB03E" }}>Back to Login</Link>
					</Typography>

				</Stack>

			</Grid>

			<Grid item xs={6} sx={{ bgcolor: "background.project.primary.main" }}  >
			</Grid>
		</Grid>
	);
}

export default SignUp;