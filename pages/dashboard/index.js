import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../../components/MainLayout";
import MainPage from "../../components/MainPage";
import Table from "../../components/Table/DataTable";
import AdvanceTable from "../../components/Table/AdvanceTable";
import React, { useEffect, useState } from "react";
import SlideBar from "../../components/SlideBar";
import ArticleForm from "../../components/Dashboard/ArticleForm";
import Modal from "../../components/Modal";
import Articles from "../../components/Dashboard/Articles";
import UserMenuSVG from "../../components/SVGs/UserMenuSVG";
import GroupMenuSVG from "../../components/SVGs/GroupMenuSVG";
import DocumentMenuSVG from "../../components/SVGs/DocumentMenuSVG";
import SettingMenuSVG from "../../components/SVGs/SettingMenuSVG";
import { Router, useRouter } from "next/router";
import Documents from "../../components/Dashboard/Documents";
import Clients from "../../components/Dashboard/Clients";

const menuItems = [
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

function Dashboard({ }) {

	const router = useRouter();
	console.log(router)

	const [selectedItem, setSelectedItem] = useState(menuItems[0].name);

	useEffect(()=>{
		useRouter
	}, [selectedItem])

	return (
		<React.Fragment>
			<MainLayout menuItemList={menuItems} selectedItem={selectedItem} setItem={setSelectedItem} >
				<MainPage>
					{(selectedItem === "Articles" && <Articles />)}
					{(selectedItem === "Clients" && <Clients />)}
					{(selectedItem === "Documents" && <Documents />)}
					{/* {(selectedItem === "Settings" && <Articles />)} */}
				</MainPage>
			</MainLayout>
		</React.Fragment>
	);
}

export default Dashboard;
