import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { useState, useEffect, useRef } from "react";
import Introduction from "../components/introduction";

const Home = () => {
  const [navbarStepper, setNavbarStepper] = useState(false);
  const handleNavbarChange = (isVisible) => {
    setNavbarStepper(isVisible);
  }

  useEffect(() => {
    console.log('test', navbarStepper)
  })


  return (
    <>
      <Head>
        <title>Task Completor</title>
        <meta
          name="description"
          content="Une IA qui vous génère un contenu et un design que vous choisissez, le tout en quelques secondes."
        />
        <meta name="theme-color" content="#00003f"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="w-full">
        <Hero />
        <div className="h-screen background-introduction">
          <Introduction />
        </div>
      </div>
    </>
  );
};

export default Home;
