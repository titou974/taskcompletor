import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Generator from "../components/generator"

const Home = () => {
  return (
    <>
      <Head>
        <title>Task Completor</title>
        <meta
          name="description"
          content="Une IA qui vous génère un contenu et un design que vous choisissez, le tout en quelques secondes."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
        <Navbar />
        <div className="w-full bg-primary">
          <Hero />
          <Generator />
        </div>
    </>
  );
}

export default Home;
