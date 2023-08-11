import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import axios from "axios";


Font.register({ family: "OpenSansLight", src: "/assets/OpenSans-Light.ttf" });

const styles = StyleSheet.create({
  body: {
    fontFamily: "OpenSansLight",
    paddingTop: 20,
    paddingHorizontal: 100,
  },
});

const PDF = () => {
  const [fetchedText, setFetchedText] = useState("");
  const [client, setClient] = useState(false);
  useEffect(() => {
    const getServersSideProps = async() => {
      try {
        const res = await axios.get('/api/documents');
        const props  = res.data[0].content;
        setFetchedText(props)
      } catch (error) {
        console.log('Error fetching props:', error)
      }
    };
    getServersSideProps()
    setClient(true);
    ;})
  return (
    <Document>
      <Page size="A4" style={styles.body} wrap={true}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text wrap={true}>{fetchedText}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
