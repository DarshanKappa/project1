import React from "react";
import MainLayout from "@components/MainLayout";
import MainPage from "@components/MainPage";
import Articles from "@components/Dashboard/Article";
import UserMenuSVG from "@svgs/UserMenuSVG";
import GroupMenuSVG from "@svgs/GroupMenuSVG";
import DocumentMenuSVG from "@svgs/DocumentMenuSVG";
import SettingMenuSVG from "@svgs/SettingMenuSVG";
import Documents from "@components/Dashboard/Documents";
import Clients from "@components/Dashboard/Client";
import useShallowRouter from "@hooks/useShallowRouter";
import { jsPDF } from 'jspdf';
import { Box, Button } from "@mui/material";
// import webshot from "webshot";
import domtoimage from 'dom-to-image';
import { CookieSharp } from "@mui/icons-material";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';




const menuItems = [
	{
		name: "Articles",
		icon: <UserMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />,
		route: "articles",
	},
	{
		name: "Clients",
		icon: <GroupMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />,
		route: "clients",
	},
	{
		name: "Documents",
		icon: <DocumentMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />,
		route: "documents",
	},
	{
		name: "Settings",
		icon: <SettingMenuSVG sx={{ color: "primary.main", width: 30, height: 30 }} />,
		route: "settings",
	},
]

const routeList = [
	{
		route: "articles",
		value: "Articles",
	},
	{
		route: "clients",
		value: "Clients",
	},
	{
		route: "documents",
		value: "Documents",
	},
	{
		route: "settings",
		value: "Settings",
	},
]

function Dashboard({ }) {

	const { value, push } = useShallowRouter(routeList, "slug")

	return (
		<>
			<Button
				variant="contained"
				onClick={async () => {
					const node = document.getElementById('pdf');
					toPng(node, {})
						.then(async (url) => {

							const a = document.createElement('a');
							a.style.display = 'none';
							a.href = url;
							// the filename you want
							a.download = 'todo-1.png';
							document.body.appendChild(a);
							a.click();
						})

						
					// 		domtoimage.toPng(node)
					// 			.then(async function (dataUrl) {
					// 				console.log("-------------data URL-----------------")
					// 				console.log(dataUrl)
					// 				var img = new Image();
					// 				img.src = dataUrl;

					// 				let res = await fetch(dataUrl)
					// 				let data = await res.blob();
					// 				let metadata = {
					// 					type: 'image/png'
					// 					// type: 'application/pdf'
					// 				};
					// 				let file = new File([data], "test.png", metadata);
					// 				console.log(file)

					// 				// const url = window.URL.createObjectURL(file);
					// 				// const a = document.createElement('a');
					// 				// a.style.display = 'none';
					// 				// a.href = url;
					// 				// // the filename you want
					// 				// a.download = 'todo-1.png';
					// 				// document.body.appendChild(a);
					// 				// a.click();
					// 				// window.URL.revokeObjectURL(dataUrl);

					// 				            var doc = new jsPDF();
					// doc.addImage(dataUrl, 'PNG', 15, 40, 180, 180);
					// doc.save('pension-report' + '.pdf');


					// 				jsPDF()


					// 				document.body.appendChild(img);
					// 				console.log("OKkd-=====================================");
					// 			})
					// 			.catch(function (error) {
					// 				console.error('oops, something went wrong!', error);
					// 			});
				}}
			>
				HTML to PDF
			</Button>
			<Box id="pdf">

				<MainLayout menuItemList={menuItems} selectedItem={value}  >
					<MainPage>
						{(value === "Articles" && <Articles />)}
						{(value === "Clients" && <Clients />)}
						{(value === "Documents" && <Documents />)}
						{/* {(selectedItem === "Settings" && <Articles />)} */}
					</MainPage>
				</MainLayout>
			</Box>
		</>
	);
}

export default Dashboard;
