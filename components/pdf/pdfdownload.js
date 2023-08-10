import { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./pdfcreate";



const PDFDownload = () => {
  const [client, setClient] = useState(false);
  const [fetchedText, setFetchedText] = useState("");
  useEffect(() => {
    const getServersSideProps = async() => {
      try {
        const res = await axios.get('/api/documents');
        const props  = res.data[0].content;
        setFetchedText(props)
      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps();
    setClient(true);
  }, []);

  return (
    <PDFDownloadLink className="w-full h-screen" document={< PDF props={fetchedText} />}>
      Télécharger
    </PDFDownloadLink>
  );
};

export default PDFDownload;
