import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StepperForm from "@components/Forms/StepperForm";
import AdminLoginForm from "@components/SignUp/Forms/AdminLoginForm";
import UserLoginForm from "@components/SignUp/Forms/UserLoginForm";


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
							<AdminLoginForm key={0} sx={{ width: "100%" }} />
							,
							<UserLoginForm key={1} sx={{ width: "100%" }} />
						]}
					</StepperForm>

					<Typography sx={{ textAlign: "center" }} variant="body1" color="initial">
						{"Don't have a account?"}
						<Link href="#" style={{ textDecoration: "underline", color: "#5DB03E" }}>Signup</Link>
					</Typography>

				</Stack>

			</Grid>

			<Grid item xs={6} sx={{ bgcolor: "background.project.primary.main" }}  >
			</Grid>
		</Grid>
	);
}

export default LogIn;
