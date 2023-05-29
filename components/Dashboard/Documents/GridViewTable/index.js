import AddDocumentCard from "./AddDocumentCard";
import PDFSVG from "../../../SVGs/PDFSVG";
import ExcelSVG from "../../../SVGs/ExcelSVG";
import ZipSVG from "../../../SVGs/ZipSVG";
import DocumentCard from "./DocumentCard";



function GridViewTable({ }) {
    return (
        <>
            <AddDocumentCard />
            <DocumentCard fileIcon={<ZipSVG />} />
            <DocumentCard fileIcon={<ExcelSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
            <DocumentCard fileIcon={<PDFSVG />} />
        </>
    );
}

export default GridViewTable;
