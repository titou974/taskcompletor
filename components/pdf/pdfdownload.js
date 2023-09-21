import { useState, useEffect, useRef } from "react";
import { usePDF } from "@react-pdf/renderer";
import PDF from "./pdfcreate";
import axios from "axios";
import Link from "next/link";



const PDFDownload = () => {
  const [client, setClient] = useState(false);
  const [fetchedTitle, setFetchedTitle] = useState("");
  const [fetchedType, setFetchedType] = useState("");
  const [fetchedSubtitles, setFetchedSubtitles] = useState([]);
  const [fetchedSections, setFetchedSections] = useState([]);


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
      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps();
    setClient(true);
    console.log('voilou', fetchedTitle)
  }, []);


  const [instance, updateInstance] = usePDF({ document: <PDF title={fetchedTitle} subtitles={fetchedSubtitles} sections={fetchedSections}/> });


  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Oups! petite erreur: {error}</div>;

  return (
    <a href={instance.url} download={`${fetchedTitle}.pdf`} className="mx-auto p-2 bg-white text-tertiary">
      Télécharger mon PDF
    </a>
  );
};

export default PDFDownload;
