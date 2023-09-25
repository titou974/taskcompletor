import styles from "./style";
import { m } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div className={`${styles.padding} relative h-screen overflow-hidden`}>
      <m.div initial="hidden" variants={fadeIn("right", "spring", 0.5, 0.75)} whileInView="show" viewport={{once: true}} className="w-full">
        <Link
          href="/generator" className={`font-bold my-8 z-10 rounded-md mx-auto`}
        >
            <m.button className="cta1 py-8 w-full md:w-1/2 mx-auto" initial="hidden" variants={fadeIn("right", "spring", 0.5, 0.75)} whileInView="show" viewport={{once: true}}>
              <p className={`xl:text-[60px] md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px]`}>Créer</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="pt-[6px] w-[14px] sm:w-[17px] xl:w-[25px]"
              />
            </m.button>
        </Link>
      </m.div>
    </div>
  )
};

export default Introduction;
