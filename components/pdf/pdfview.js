import { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./pdfcreate";



const PDFView = () => {
  const [client, setClient] = useState(false);
  const [fetchedText, setFetchedText] = useState("");
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full h-screen">
      <PDF props={fetchedText} />
    </PDFViewer>
  );
};

export default PDFView;
