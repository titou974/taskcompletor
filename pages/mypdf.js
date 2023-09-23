import dynamic from "next/dynamic";
import { useEffect, useState, isPresent } from "react";
import Preloader from "../components/loaders/preloaderpdf";

const Pdf = dynamic(() => import("../components/pdf/pdfview"), {
  ssr: false,
});

const PdfDownload = dynamic(() => import("../components/pdf/pdfdownload"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setClient(true)
  }, [])


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 5000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])


  return(
    <div className="w-full">
      <Preloader isVisible={loading} />
      <Pdf />
    </div>
  )
};

export default View;
