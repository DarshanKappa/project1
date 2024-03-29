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
		<MainLayout menuItemList={menuItems} selectedItem={value}  >
			<MainPage>
				{(value === "Articles" && <Articles />)}
				{(value === "Clients" && <Clients />)}
				{(value === "Documents" && <Documents />)}
				{/* {(selectedItem === "Settings" && <Articles />)} */}
			</MainPage>
		</MainLayout>
	);
}

export default Dashboard;
