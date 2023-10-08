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

const styles = StyleSheet.create({
  body: {
    fontFamily: "TimesNewRomanRegular",
    paddingVertical: 50,
    paddingHorizontal: 80,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 800,
    textDecoration: 'underline',
    fontFamily: "TimesNewRomanRegular"
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








const PDFLetter = ({ title, sections }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
          {sections.map((section, index) => (
            <View key={index} style={styles.sectioncontainer}>
              <Text style={styles.text} wrap={true}>{section}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PDFLetter;
