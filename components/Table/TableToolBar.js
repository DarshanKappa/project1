import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';


function TableToolBar({ searchBar, buttons }) {

	return (
		<Box sx={{ pb: 2, display: "flex", justifyContent: "space-between" }}>

			<Box>
				{
					(searchBar && (
						<React.Fragment>
							<Box sx={{
								border: "1px solid",
								borderColor: "primary.main",
								display: "flex",
								placeItems: "center",
								width: { xs: 150, sm: 200, md: 250, lg: 400 }
							}}>
								<SearchIcon sx={{ color: "gray", mx: "4px", color: "primary.main" }} />
								<InputBase
									placeholder="search..."
								/>
							</Box>
						</React.Fragment>
					))
				}
			</Box>

			<Box>
				{
					buttons?.map?.((butt) => {
						return React.cloneElement(
							butt,
							{ sx: { width: 130, height: 30, borderRadius: 0, ml: 4, textTransform: "none", ...butt?.props?.sx } }
						)
					})
				}
			</Box>

		</Box>
	);
}

export default TableToolBar;
