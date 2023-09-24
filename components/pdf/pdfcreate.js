import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
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
    fontSize: 20,
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
    fontSize: 14,
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
    paddingVertical: 25
  },
})



const generatedSections = [['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.']]





const PDF = ({ title, subtitles, sections }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
          {subtitles.map((subtitle, index) => (
            <View key={index} style={styles.sectioncontainer}>
              <Text style={styles.subtitle} wrap={true}>{subtitle}</Text>
              <Text style={styles.text} wrap={true}>{sections[index]}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PDF;
