import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../../components/MainLayout";
import MainPage from "../../components/MainPage";
import Table from "../../components/Table/DataTable";
import AdvanceTable from "../../components/Table/AdvanceTable";
import React, { useEffect, useState } from "react";
import SlideBar from "../../components/SlideBar";
import ArticleForm from "../../components/Dashboard/Article/ArticleForm";
import Modal from "../../components/Modal";
import Articles from "../../components/Dashboard/Article";
import UserMenuSVG from "../../components/SVGs/UserMenuSVG";
import GroupMenuSVG from "../../components/SVGs/GroupMenuSVG";
import DocumentMenuSVG from "../../components/SVGs/DocumentMenuSVG";
import SettingMenuSVG from "../../components/SVGs/SettingMenuSVG";
import { Router, useRouter } from "next/router";
import Documents from "../../components/Dashboard/Documents";
import Clients from "../../components/Dashboard/Client";
import useShallowRouter from "../../Hooks/useShallowRouter";

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

	const {  value, push } = useShallowRouter(routeList, "slug")

	return (
		<React.Fragment>
			<MainLayout menuItemList={menuItems} selectedItem={value}  >
				<MainPage>
					{(value === "Articles" && <Articles />)}
					{(value === "Clients" && <Clients />)}
					{(value === "Documents" && <Documents />)}
					{/* {(selectedItem === "Settings" && <Articles />)} */}
				</MainPage>
			</MainLayout>
		</React.Fragment>
	);
}

export default Dashboard;
