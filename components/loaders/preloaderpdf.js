import {useEffect, useState} from "react";
import { m, AnimatePresence, easeOut } from "framer-motion";
import styles from "../style";
import Loader from "./loader";
import { fadeIn } from "../../utils/motion";

import PenLoader from "./penloader";

const Preloader = ({isVisible}) => {
  return (
    <AnimatePresence>
      {
        isVisible && (
          <m.div
          initial={{opacity: 0}}
          animate={{ y: "0%" , opacity: 1, duration: 0.75, ease: "easeOut"}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 0, y: "100%" }}
          className="absolute h-screen bg-tertiary w-full flex" >
            <div className="mx-auto flex flex-col justify-center align-center w-1/2 gap-20">
              <h1 className={`${styles.heroHeadText} text-center`}>Chargement de votre PDF</h1>
              <PenLoader />
            </div>
          </m.div>
        )
      }
    </AnimatePresence>
  )
}

export default Preloader;
