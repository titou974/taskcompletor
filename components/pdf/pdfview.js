import { useState, useEffect } from "react";
import axios from "axios";

const PDFView = () => {
  const [client, setClient] = useState(false);
  const [fetchedText, setFetchedText] = useState("");
  useEffect(() => {
    const fetchGeneratedText = async () => {
      try {
        const response = await axios.get("/api/getGeneratedText");
        const { finalText } = response.data;
        setFetchedText(finalText);
      } catch (error) {
        console.error("Error fetching generatedTitle:", error);
      }
    };
    fetchGeneratedText();
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full h-screen">
      <PDF test={fetchedText} />
    </PDFViewer>
  );
};

export default PDFView;
