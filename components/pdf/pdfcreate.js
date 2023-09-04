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
import innovation from "../../public/img/icon1black.svg";


Font.register({ family: "OpenSansLight", src: "/assets/OpenSans-Light.ttf" });

const styles = StyleSheet.create({
  body: {
    fontFamily: "OpenSansLight",
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 800,

  }
});

const generatedSections = [['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.'], ['1. Introduction', 'Les poissons sont des créatures fascinantes qui vivent dans les océans, les rivières et les lacs du monde entier. Dans ce rapport, nous allons explorer certains faits intéressants sur les poissons et apprendre pourquoi ils sont si importants pour notre écosystème.']]

const PDF = ({ props }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={{ display: "flex", justifyContent: "center", paddingBottom: 30 }}>
          <Text style={styles.title}>Les poissons : tout ce que vous devez savoir !</Text>
        </View>
          {generatedSections.map((sections, index) => (
            <View key={index} style={{ display: "flex", justifyContent: "center", paddingVertical: 25}}>
              <Text style={{paddingBottom: 10, fontSize: 14}} wrap={true}>{sections[0]}</Text>
              <Text style={{fontSize: 10}} wrap={true}>{sections[1]}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PDF;
