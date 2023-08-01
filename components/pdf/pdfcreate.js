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


Font.register({ family: "OpenSansLight", src: "/assets/OpenSans-Light.ttf" });

const styles = StyleSheet.create({
  body: {
    fontFamily: "OpenSansLight",
    paddingTop: 20,
    paddingHorizontal: 100,
  },
});

const PDF = ({ props }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text wrap={false}>{props}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
