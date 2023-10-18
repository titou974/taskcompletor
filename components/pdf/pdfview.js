import { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDFReport from "./reportpdfcreate";
import PDFLetter from "./letterpdfcreate";
import PDFLetterDetails from "./letterpdfdetailscreate";



const PDFView = () => {
  const [client, setClient] = useState(false);
  const [fetchedTitle, setFetchedTitle] = useState("");
  const [fetchedType, setFetchedType] = useState("");
  const [fetchedSubtitles, setFetchedSubtitles] = useState([]);
  const [fetchedSections, setFetchedSections] = useState([]);
  const [fetchedDetails, setFetchedDetails] = useState({});

  useEffect(() => {
    const getServersSideProps = async() => {
      try {
        const res = await axios.get('/api/documents');
        const content  = res.data[0];
        console.log(content)
        setFetchedType(content.type);
        setFetchedTitle(content.title);
        setFetchedSubtitles(content.subtitles);
        setFetchedSections(content.sections);
        content.type === "Lettre de motivation détaillée" && (
          setFetchedDetails(content.details)
        )

      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps();
    setClient(true);
  }, []);

  useEffect(() => {

    console.log(fetchedDetails);

  })


  return (
    <PDFViewer className="w-full h-screen">
      {fetchedType === "Présentation" && (
        <PDFReport title={fetchedTitle} subtitles={fetchedSubtitles} sections={fetchedSections} />
      )}
      {fetchedType === "Lettre de motivation" && (
        <PDFLetter title={fetchedTitle} sections={fetchedSections} />
      )}
      {fetchedType === "Lettre de motivation détaillée" && (
        <PDFLetterDetails title={fetchedTitle} sections={fetchedSections} details={fetchedDetails} />
      )}
    </PDFViewer>
  );
};

export default PDFView;
