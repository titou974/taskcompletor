import { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./pdfcreate";



const PDFView = () => {
  const [client, setClient] = useState(false);
  const [fetchedTitle, setFetchedTitle] = useState("");
  const [fetchedType, setFetchedType] = useState("");
  const [fetchedSubtitles, setFetchedSubtitles] = useState([]);
  const [fetchedSections, setFetchedSections] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
=======
    const getServersSideProps = async() => {
      try {
        const res = await axios.get('/api/documents');
        const content  = res.data[0];
        console.log(content)
        setFetchedType(content.type);
        setFetchedTitle(content.title);
        setFetchedSubtitles(content.subtitles);
        setFetchedSections(content.sections);
      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps();
>>>>>>> 6053f6217a7cace90c3f3e8522d64681ec2457f5
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full h-screen">
      <PDF title={fetchedTitle} subtitles={fetchedSubtitles} sections={fetchedSections} />
    </PDFViewer>
  );
};

export default PDFView;
