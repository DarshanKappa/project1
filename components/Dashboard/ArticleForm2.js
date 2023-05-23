import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import SimpleInput from "../Inputs/SimpleInput";
import SimpleInput2 from "../Inputs/SimpleInput2";
import UserMenuSVG from "../SVGs/UserDuotone"
import { useForm } from "react-hook-form";
import UserAddSVG from "../SVGs/Article/UserAddSVG";


function ArticleForm({ }) {


    const { register, handleSubmit, watch } = useForm();

    const onSubmit = () => {
        console.log(watch())
    }

    return (
        <Box sx={{ height: "100%", p: 2, width: 800, bgcolor: "primary.light" }}>
            <Stack sx={{ height: "100%", width: "100%", }}>
                <Box sx={{ px: 2, py: 2 }}>
                    <Typography sx={{ fontWeight: 600 }} variant="h5" color="primary.main">Add New Article</Typography>
                </Box>

                <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
                    <Stack sx={{ height: "100%", p: 2, bgcolor: "white" }}>

                        <Box sx={{ width: "100%", display: "flex", py: 2 }}>
                            <Box sx={{ display: "flex", width: "100%", placeItems: "center" }}>
                                <Divider sx={{ width: "100%", borderColor: "black" }} />
                            </Box>
                            <Typography sx={{ flexShrink: 0, px: 2, fontWeight: 600 }} variant="body1" color="initial">Basic Details</Typography>
                            <Box sx={{ display: "flex", width: "100%", placeItems: "center" }}>
                                <Divider sx={{ width: "100%", borderColor: "black" }} />
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <SimpleInput2
                                register={register}
                                name="firstName"
                                label="First Name"
                                icon={<UserAddSVG />}
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                            />
                            <SimpleInput2
                                register={register}
                                name="lastName"
                                icon={<UserMenuSVG />}
                                label="Last Name"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="username"
                                icon={<UserMenuSVG />}
                                label="Username"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="email"
                                icon={<UserMenuSVG />}
                                label="Email"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="password"
                                icon={<UserMenuSVG />}
                                label="Password"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="contactNumber"
                                icon={<UserMenuSVG />}
                                label="Contact Number"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                        </Box>

                        <Typography variant="body1" color="initial" sx={{
                            py: 4,
                            fontWeight: 600
                        }}>
                            Address Details
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <SimpleInput2
                                register={register}
                                name="address.country"
                                icon={<UserMenuSVG />}
                                label="Country"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="address.state"
                                icon={<UserMenuSVG />}
                                label="State"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="address.streetAddress"
                                icon={<UserMenuSVG />}
                                label="Street Address"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                                />
                            <SimpleInput2
                                register={register}
                                name="address.pincode"
                                icon={<UserMenuSVG />}
                                label="Pincode"
                                required
                                sx={{ width: "47%", py: 1 }}
                                inputProps={{
                                    style: {
                                        height: 45
                                    }
                                }}
                            />
                        </Box>

                        <Stack sx={{ height: "100%", justifyContent: "end" }}>
                            <Box sx={{ display: "flex", justifyContent: "end" }}>
                                <Button variant="contained" type="submit" sx={{ width: 120, ml: 1 }}>
                                    Add
                                </Button>
                                <Button variant="outlined" sx={{ width: 120, ml: 1 }}>
                                    Cancel
                                </Button>
                            </Box>
                        </Stack>

                    </Stack>
                </form>

            </Stack>

        </Box>
    );
}

export default ArticleForm;
