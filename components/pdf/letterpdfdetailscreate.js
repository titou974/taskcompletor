import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";



Font.register({ family: "TimesNewRomanRegular", src: 'assets/TimesNewRoman/TimesNewRomanRegular.ttf' });

Font.register({ family: "TimesNewRomanBold", src: 'assets/TimesNewRoman/TimesNewRomanBold.ttf' });

Font.register({ family: "TimesNewRomanItalic", src: 'assets/TimesNewRoman/TimesNewRomanItalic.ttf' });


const styles = StyleSheet.create({
  body: {
    fontFamily: "TimesNewRomanRegular",
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  details: {
    fontSize: 10,
    fontFamily: "TimesNewRomanItalic"
  },
  detailscontainer: {
    paddingBottom: 10,
  },
  object: {
    fontFamily: "TimesNewRomanBold",
    fontSize: 10,
  },
  objectcontainer: {
    paddingVertical: 15,
  },
  subtitle: {
    paddingBottom: 12,
    fontSize: 16,
    fontFamily: "TimesNewRomanBold",
  },
  text: {
    fontSize: 10,
    fontFamily: "TimesNewRomanRegular",
    lineHeight: 2,
    paddingTop: 10
  },
  titlecontainer: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 30
  },
  sectioncontainer: {
    display: "flex",
    justifyContent: "between",
    paddingVertical: 3
  },
})



const PDFLetterDetails = ({ title, sections, details }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        {details.map((paragraph, index) => (
          <View key={index} style={styles.detailscontainer}>
            {paragraph.map((line, index) => (
              <Text key={index} style={styles.details}>{line}</Text>
            ))}
          </View>
        ))}
        <View style={styles.objectcontainer}>
          <Text style={styles.object}>{title}</Text>
        </View>
        <View style={styles.sectioncontainer}>
          {sections.map((section, index) => (
            <Text style={styles.text} wrap={true}>{section}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFLetterDetails;
