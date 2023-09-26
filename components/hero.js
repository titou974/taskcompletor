import Image from "next/image";
import styles from "./style";
import innovation from "../public/img/innovation.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import { useRef } from "react";
// import the icons you need
import {
  faChevronCircleDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import TaskCompletorSvg from "../public/img/Task Completor.svg"
import { m, useScroll, useTransform } from "framer-motion";
import feather from "../public/img/feather.png"
import Introduction from "./introduction";

const Hero = () => {
  const ref = useRef(null);
  const introductionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const scrollToIntro = () => {
    if (introductionRef.current !== null) {
      introductionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.log("error scrolling after generation")
    }
  };

  return (
    <>
    <div ref={ref} className="relative grid place-items-center w-full h-screen flex justify-center text-white overflow-hidden bg-tertiary">
      <div
        className={`${styles.paddingX} flex flex-col md:flex-row items-center justify-center mx-auto w-full max-w-7xl`}
      >
        <m.div style={{y: textY}} className="flex flex-col items-center md:items-start w-full z-10">
          <div className={`font-bold border-white border-2 rounded-md px-10 py-10 z-10 bg-black bg-opacity-20 hover:bg-green-400 hover:bg-opacity-100 shadow-xl mb-[250px]`}>
            <div className="flex justify-center align-center gap-4 lg:gap-6">
              <h1 className="text-[20px] sm:text-[50px] lg:text-[60px]">Task Completor</h1>
              <div className="w-[30px] sm:w-[50px] md:w-[60px] ">
                <Image src={feather} alt="a feather"/>
              </div>
            </div>
            <h2 className="pt-4 text-center text-sm md:text-2xl">Une IA pour gérer vos tâches du quotidien</h2>
          </div>
          {/* <Link
            href="/generator" className={`${styles.heroSubTextLight} my-8 w-1/3 z-10 bg-tertiary rounded-md`}
          >
            <button className="cta1">
              <p>Créer</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-[10px] pt-[3px] sm:w-[13px]"
              />
            </button>
          </Link> */}
        </m.div>
        <m.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/img/background/backgroundfull.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY,
          }}
          />
        <m.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(/img/background/backgroundplants.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          />
        <m.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/img/background/backgroundsky.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY2,
          }}
          />
        {/* <div className="w-9/12 xs:w-4/12 sm:w-3/12 md:w-full min-w-[300px]">
          <Image
            src={innovation}
            alt="Picture of a woman and IA"
            className="my-0 mx-auto"
            sizes="(min-width: 300px) 100vw"
          />
        </div> */}
      </div>
      <m.button
        onClick={(e) => scrollToIntro()}
        className="absolute bottom-24 w-full flex justify-center z-10"
        animate={{
          y: [0, 24, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}>
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="w-[50px] hover:text-tertiary cursor-pointer transition-colors"
        />
      </m.button>
    </div>
    <m.div className="background-introduction" ref={introductionRef}>
      <Introduction />
    </m.div>
    </>
  );
};

export default Hero;
