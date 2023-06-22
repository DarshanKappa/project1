import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableToolBar from "./TableToolBar";


const headStyle = {
    borderBottom: 2,
    borderBottomColor: "#B8D0FF"
}

const colHeadStyle = {
    p: 0,
    border: "1px solid",
    borderColor: "#B8D0FF"
}

const colBodyStyle = {
    p: 0,
    border: "1px solid",
    borderColor: "#B8D0FF"
}

function DataTable({
    childen,
    headers,
    rows,
    toolBar,

}) {
    return (
        <>
            <TableContainer >

                <TableToolBar {...toolBar} />

                <Table>
                    <TableHead sx={headStyle} >
                        <TableRow  >
                            {
                                headers?.map((header, index) => (
                                    <TableCell key={index}  sx={colHeadStyle}  >
                                        {header}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            rows?.map((cols, ind) => (
                                <TableRow key={ind}>
                                    {
                                        cols?.map((col, index) => (
                                            <TableCell key={index} sx={colBodyStyle} >
                                                {col}
                                            </TableCell>

                                        ))
                                    }

                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default DataTable;
    