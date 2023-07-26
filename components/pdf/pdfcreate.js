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

Font.register({ family: "OpenSansLight", src: "/assets/OpenSans-Light.ttf" });

const styles = StyleSheet.create({
  body: {
    fontFamily: "OpenSansLight",
    paddingTop: 20,
    paddingHorizontal: 100,
  },
});

const PDF = ({ test }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text wrap={false}>{test}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
