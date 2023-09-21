import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Preloader from "../components/preloaderpdf";
import { isMobile } from "react-device-detect";

const Pdf = dynamic(() => import("../components/pdf/pdfview"), {
  ssr: false,
});

const PdfDownload = dynamic(() => import("../components/pdf/pdfdownload"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return(
    <div className="w-full">
      <Pdf />
    </div>
  )
};

export default View;
