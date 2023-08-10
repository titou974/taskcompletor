import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Pdf = dynamic(() => import("../components/pdf/pdfdownload"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return(
    <Pdf />
  )
};

export default View;
