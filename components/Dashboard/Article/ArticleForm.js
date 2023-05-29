import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import SimpleInput2 from "../../Inputs/SimpleInput2";
import UserDuotoneSVG from "../../SVGs/UserDuotone";
import PersonIcon from '@mui/icons-material/Person';
import PasswordInput2 from "../../Inputs/PasswordInput2";
import { useForm } from "react-hook-form";
import UserAddSVG from "../../SVGs/Article/UserAddSVG";
import CertificateSVG from "../../SVGs/Article/CertificateSVG";
import ChatPlusSVG from "../../SVGs/Article/ChatPlusSVG";
import MessageSVG from "../../SVGs/Article/MessageSVG";
import LockAltSVG from "../../SVGs/Article/LockAltSVG";
import PhoneSVG from "../../SVGs/Article/PhoneSVG";



function ArticleForm({ onCloseModal }) {

    const { register, handleSubmit, watch } = useForm();

    const onSubmit = () => {
        console.log(watch())
    }

    return (
        <>
            <Stack sx={{
                px: 2, width: 700
            }}>
                <Box sx={{}}>
                    <Typography sx={{ fontWeight: 600, my: 2 }} variant="h5" color="primary.main">Add New Article</Typography>
                    <Divider sx={{ width: "100%", my: 2, borderColor: "black" }} />
                </Box>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <SimpleInput2
                            register={register}
                            name="username"
                            label="Username"
                            icon={<UserAddSVG />}
                            inputProps={{ style: { borderRadius: "none" } }}
                            required
                            />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <SimpleInput2
                            register={register}
                            name="firstName"
                            label="First Name"
                            icon={<CertificateSVG />}
                            sx={{ width: "47%" }}
                            inputProps={{ style: { borderRadius: "none" } }}
                            required
                            />

                        <SimpleInput2
                            register={register}
                            name="lastName"
                            label="Last Name"
                            icon={<ChatPlusSVG />}
                            sx={{ width: "47%" }}
                            inputProps={{ style: { borderRadius: "none" } }}
                            required
                            />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <SimpleInput2
                            register={register}
                            name="email"
                            type="email"
                            label="Email"
                            inputProps={{ style: { borderRadius: "none" } }}
                            icon={<MessageSVG />}
                            required
                            />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <PasswordInput2
                            register={register}
                            name="password"
                            label="Password"
                            icon={<LockAltSVG />}
                            sx={{ width: "47%" }}
                            inputProps={{ style: { borderRadius: "none" } }}
                            visibleButton
                            required
                            />

                        <SimpleInput2
                            register={register}
                            name="contactNumber"
                            type="number"
                            label="Contact Number"
                            icon={<PhoneSVG />}
                            sx={{ width: "47%" }}
                            inputProps={{ style: { borderRadius: "none" } }}
                            required
                            />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end", pt: 4 }}>
                        <Button variant="contained" type="submit" sx={{ width: 120, ml: 1 }}>
                            Submit
                        </Button>
                        <Button variant="outlined" onClick={onCloseModal} sx={{ width: 120, ml: 1 }}>
                            Cancel
                        </Button>
                    </Box>

                </form>

            </Stack>

        </>
    );
}

export default ArticleForm;
