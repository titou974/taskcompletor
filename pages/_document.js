import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#00003f"/>
          <meta
          name="description"
          content="Une IA qui vous génère un contenu et un design que vous choisissez, le tout en quelques secondes."
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
