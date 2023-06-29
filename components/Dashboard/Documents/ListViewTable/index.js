import React from "react";
import ListDocument from "./ListDocument"
import PDFSVG from "../../../SVGs/PDFSVG";
import ExcelSVG from "../../../SVGs/ExcelSVG";
import ZipSVG from "../../../SVGs/ZipSVG";
import DocumentMenuButton from "../DocumentMenu/DocumentMenuButton"


const headers = [
    "Name", "Collaborators", "Modified", "File size", ""
]

const rows = [
    [{ name: "Simple PDF Doc", icon: <PDFSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={1} />
    ],
    [{ name: "Simple Execel Doc", icon: <ExcelSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={2} />
    ],
    [{ name: "Simple Zip Doc", icon: <ZipSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={3} />
    ],
    [{ name: "Simple PDF Doc", icon: <PDFSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={4} />
    ],
    [{ name: "Simple Execel Doc", icon: <ExcelSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={5} />
    ],
    [{ name: "Simple Zip Doc", icon: <ZipSVG sx={{ width: 20, height: 20 }} /> }, "2 Collaborators", { by: "Pratik Patel", dateTime: "31 March 2023 ar 2:12 PM" }, "1 MB",
    <DocumentMenuButton key={6} />
    ],
]

const width = [
    "35%", "25%", "25%", "10%", "5%"
]


function ListViewTable({ }) {
    return (
        <>
            <ListDocument headers={headers} rows={rows} widths={width} />
        </>
    );
}

export default ListViewTable;
