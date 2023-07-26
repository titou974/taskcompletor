import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReportPDF = dynamic(() => import("../components/pdf/pdfview"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true)
  }, [])

  return(
    <ReportPDF />
  )
}

export default View;
