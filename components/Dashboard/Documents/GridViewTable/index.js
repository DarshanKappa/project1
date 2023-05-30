import AddDocumentCard from "./AddDocumentCard";
import PDFSVG from "../../../SVGs/PDFSVG";
import ExcelSVG from "../../../SVGs/ExcelSVG";
import ZipSVG from "../../../SVGs/ZipSVG";
import DocumentCard from "./DocumentCard";

const DocumentCardList = [
    {fileLink: "/images/fileimage.png",fileIcon: <PDFSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: [ "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <ExcelSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <ZipSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <PDFSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <ExcelSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <ZipSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <PDFSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
    {fileLink: "/images/fileimage.png",fileIcon: <ExcelSVG />, fileName: "Important File New Year 2023", updated: {datetime: "31 March 2023", by: "Pratik Patel" }, collaborators: ["Darshan", "Kishan", "Jaimin", "None"]},
]

function GridViewTable({ }) {
    return (
        <>
            <AddDocumentCard />
            {
                DocumentCardList.map((obj, index)=>(
                    <DocumentCard key={index} obj={obj} />
                ))
            }
        </>
    );
}

export default GridViewTable;
