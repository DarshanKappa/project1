import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserMenuSVG from "@svgs/UserMenuSVG";
import GroupMenuSVG from "@svgs/GroupMenuSVG";
import DocumentMenuSVG from "@svgs/DocumentMenuSVG";
import SettingMenuSVG from "@svgs/SettingMenuSVG";



const menuItemStyle = {
    px: 3,
    py: 2,
    display: "flex",
    placeItems: "center",
    cursor: "pointer",
    textDecoration: "none"
}

const menu = [
    {
        name: "Articles",
        icon: <UserMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />
    },
    {
        name: "Clients",
        icon: <GroupMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />
    },
    {
        name: "Documents",
        icon: <DocumentMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />
    },
    {
        name: "Settings",
        icon: <SettingMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />
    },
]

function MainSideBar({ menuItemList, selectedItem }) {

    const router = useRouter();

    return (
        <Stack sx={{
            px: 2,
            py: 4
        }}>
            <Box sx={{
                border: "2px solid",
                borderColor: "primary.main",
                height: 50,
                mb: 5,
                display: "flex",
                justifyContent: "center",
                placeItems: "center",
            }}>
                <Typography variant="h4" sx={{ fontWeight: 900 }} color="primary.main">LOGO</Typography>
            </Box>
            <Stack>
                <Box sx={{ display: "flex", px: 2, placeItems: "center", mb: 4 }}>
                    <Box>
                        <Avatar />
                    </Box>
                    <Stack sx={{ pl: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }} color="primary.main">Angela Bishop</Typography>
                        <Typography variant="body2" color="primary.main">Angela Bishop</Typography>
                    </Stack>
                </Box>
                <Stack spacing={1}>
                    {
                        menuItemList?.map((m, index) => (
                            <Box key={m?.name} onClick={() => {selectedItem !== m?.name? router.push(`${m.route}`): null} }
                                sx={{ ...menuItemStyle, ...(selectedItem === m?.name ? { bgcolor: "primary.light" } : { ":hover": { bgcolor: "#e8f0ff6b" } }) }}>
                                {m.icon}
                                <Typography sx={{ pl: 2 }} variant="body1" color="primary.main">
                                    {m.name}
                                </Typography>
                            </Box>
                        ))
                    }
                </Stack>
            </Stack>
        </Stack>
    );
}

export default MainSideBar;
