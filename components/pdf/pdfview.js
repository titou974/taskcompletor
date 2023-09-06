import { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./pdfcreate";



const PDFView = () => {
  const [client, setClient] = useState(false);
  const [fetchedText, setFetchedText] = useState("");
  useEffect(() => {
    const getServersSideProps = async() => {
      try {
        const res = await axios.get('/api/documents');
        const props  = res.data[0].sections;
        setFetchedText(props)
      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps();
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full h-screen">
      <PDF props={fetchedText} />
    </PDFViewer>
  );
};

export default PDFView;
