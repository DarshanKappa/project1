import { Box, Stack, Tab, Tabs } from "@mui/material";
import ArticleUserDetails from "./UserDetails";
import React, { useState } from "react";
import TabContainer, { TabContent, TabLabel, TabLabels } from "../../../TabComponents";
import Clients from "../../Client"
import Documents from "../../Documents"
import ActivityLogs, { Log } from "./ActivityLogs";


const logs = [
	{
		primary: <><strong>Lori Bedner</strong>has updated Contact Number from 857469325 to 8547126985</>,
		secondary: <>Tue, May 30, 2023 03: 17 PM (5 hours ago)</>
	},
	{
		primary: <><strong>Lori Bedner</strong>has updated Prifile image</>,
		secondary: <>Tue, May 30, 2023 03: 17 PM (5 hours ago)</>
	},
	{
		primary: <><strong>Lori Bedner</strong>has updated Document name form "Sample Doc.pdf" to "Sample PDF Doc.pdf"</>,
		secondary: <>Tue, May 30, 2023 03: 17 PM (5 hours ago)</>
	},
	{
		primary: <><strong>Lori Bedner</strong>has removed Document Sample Test Doc.pdf</>,
		secondary: <>Tue, May 30, 2023 03: 17 PM (5 hours ago)</>
	},
]

function ArticleDetails({ rowData }) {
	const [tab, settab] = useState(0);
	return (
		<Stack sx={{ height: "100%" }}>
			<ArticleUserDetails rowData={rowData} />

			<Box sx={{ py: 1, bgcolor: "primary.light" }} />

			<Box sx={{ flexGrow: 1, overflowY: "auto" }} >

				<TabContainer>

					<TabLabels>
						<TabLabel>Clients</TabLabel>
						<TabLabel>Documents</TabLabel>
						<TabLabel>Activity</TabLabel>
					</TabLabels>

					<TabContent>
						<TabItem>
							<Clients />
						</TabItem>
						<TabItem>
							<Documents />
						</TabItem>
						<TabItem>
							<ActivityLogs sx={{ pt: 4, pl: 8 }}>
								{
									logs?.map?.(child=>(
										<Log primary={child.primary} secondary={child.secondary} />
									))
								}

							</ActivityLogs>
						</TabItem>
					</TabContent>

				</TabContainer>

			</Box>

		</Stack>
	);
}

export default ArticleDetails;

function TabItem({ children, tab, index }) {
	return (
		// tab === index ? children : <React.Fragment />
		children
	);
}

// function TabContainer({ children, value }) {
//   return (
//     !Array.isArray(children) ?
//       children
//       :
//       children?.map((tab, index) => (
//         value === index ? tab : <React.Fragment />
//       ))
//   );
// }