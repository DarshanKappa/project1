import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArticleUserDetails from "./UserDetails";
import React from "react";
import TabContainer, { TabContent, TabItem, TabLabel, TabLabels } from "@components/TabComponents";
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
									logs?.map?.(child => (
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
