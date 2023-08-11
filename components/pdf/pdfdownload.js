import { useState, useEffect, useRef } from "react";
import { usePDF } from "@react-pdf/renderer";
import PDF from "./pdfcreate";



const PDFDownload = () => {
  const [instance, updateInstance] = usePDF({ document: <PDF /> });

  useEffect(() => {
    console.log(instance.url);
  }, []);
  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong: {error}</div>;

  return (
    <a href={instance.url} download="test.pdf">
      Download
    </a>
  );
};

export default PDFDownload;
