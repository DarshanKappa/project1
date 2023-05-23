import { Box, Grid, Stack } from "@mui/material";
import MainSideBar from "./MainSideBar";


function MainLayout({ children, menuItemList, selectedItem, setItem }) {
	return (
		<>
			<Stack sx={{
				flexDirection: "row",
				width: "100vw",
				height: "100vh",
			}}>
				<Box sx={{
					width: { xs: 150, sm: 200, md: 250, lg: 300 },
					height: "100%",
					flexShrink: 0
				}}>
					<MainSideBar menuItemList={menuItemList} selectedItem={selectedItem} setItem={setItem} />
				</Box>

				<Box sx={{
					width: "100%",
					height: "100%",
				}}>
					{children}
				</Box>
			</Stack>
		</>
	);
}

export default MainLayout;
