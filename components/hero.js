import Image from "next/image";
import styles from "./style";
import innovation from "../public/img/innovation.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
// import the icons you need
import {
  faChevronCircleDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hero = () => {

  const router = useRouter();
  return (
    <div className="relative w-full h-screen flex justify-center bg-primary text-white">
      <div
        className={`${styles.paddingX} flex flex-col md:flex-row items-center justify-center mx-auto w-full max-w-7xl`}
      >
        <div className="flex flex-col items-center md:items-start w-full">
          <h1 className={`${styles.heroHeadText} mb-3 lg:mb-0 md:mb-3`}>
            Task Completor
          </h1>
          <p className={`${styles.heroSubText} text-center md:text-start`}>
            Générer un beau document n’a jamais été aussi simple.
          </p>
          <Link
            href="/generator" className={`${styles.heroSubTextLight} my-8 w-1/3 z-10 bg-tertiary rounded-md`}
          >
            <button className="cta1">
              <p>Créer</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-[10px] pt-[3px] sm:w-[13px]"
              />
            </button>
          </Link>
        </div>
        <div className="w-9/12 xs:w-4/12 sm:w-3/12 md:w-full min-w-[300px]">
          <Image
            src={innovation}
            alt="Picture of a woman and IA"
            className="my-0 mx-auto"
            sizes="(min-width: 300px) 100vw"
          />
        </div>
      </div>
      <Link href="/generator" className="absolute bottom-12 w-full flex justify-center z-10">
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="w-[50px] hover:text-tertiary cursor-pointer transition-colors"
        />
      </Link>
    </div>
  );
};

export default Hero;
