"use client"

import { navLinks } from "../utils/constants";
import styles from "./style";
import Image from 'next/image';
import feather from '../public/img/feather.png';
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  { title: 'Générer', description: 'Rentrez vos informations' },
  { title: 'Modifier', description: 'Personnalisez le contenu' },
  { title: 'Télécharger', description: 'PDF ou Word' },
]


const Navbar = ({hover, modifyingStep, doc, lang, myName, dest, emotion, messageLength, language, subject, mailType}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest >= 10) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }

    if (latest > previous && latest > 180 ) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // const truncateText = (text, maxLength) => {
  //   if (text.length > maxLength) {
  //       return text.substring(0, maxLength) + '...';
  //   } else {
  //       return text;
  //   }
  // }

  // useEffect(() => {
  //   if (doc === "Rapport") {
  //     setTypewriterText("Générer un Rapport")
  //     if (lang === "formel") {
  //       setTypewriterText("Générer un Rapport formel 📝")
  //       if (subject !== "") {
  //         setTypewriterText(`Générer un Rapport formel sur "${truncateText(subject, 50)}" 📝`)
  //       }
  //     } else if (lang === "informel") {
  //       setTypewriterText("Générer un Rapport informel 📢")
  //       if (subject !== "") {
  //         setTypewriterText(`Générer un Rapport informel sur "${truncateText(subject, 50)}" 📢`)
  //       }
  //     }
  //   } else if (doc === "Message") {
  //     setTypewriterText("Générer un Message")
  //     if (myName) {
  //       setTypewriterText(`Générer un Message de "${truncateText(myName, 15)}"`)
  //       if (dest) {
  //         setTypewriterText(`Générer un Message de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}"`)
  //         if (emotion === "joie" && messageLength && language) {
  //           setTypewriterText(`Générer un Message ${messageLength} en ${language} de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" avec joie 😂`)
  //         } else if (emotion === "gratitude" && messageLength && language) {
  //           setTypewriterText(`Générer un Message ${messageLength} en ${language} de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" avec gratitude 🙏`)
  //         } else if (emotion === "tristesse" && messageLength && language) {
  //           setTypewriterText(`Générer un Message ${messageLength} en ${language} de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" avec tristesse 😥`)
  //         } else if (emotion === "colère" && messageLength && language) {
  //           setTypewriterText(`Générer un Message ${messageLength} en ${language} de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" avec colère 😡`)
  //         }
  //       }
  //     }
  //   } else if (doc === "Email") {
  //     setTypewriterText("Générer un Email")
  //     if (myName) {
  //       setTypewriterText(`Générer un Email de "${truncateText(myName, 15)}"`)
  //       if (dest) {
  //         setTypewriterText(`Générer un Email de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}"`)
  //         if (mailType === "école" && language) {
  //           setTypewriterText(`Générer un Email pour une école de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" en ${language} 👩‍🎓`)
  //         } else if (mailType === "entreprise" && language) {
  //           setTypewriterText(`Générer un Email pour une entreprise de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" en ${language} 💼`)
  //         } else if (mailType === "personnel" && language) {
  //           setTypewriterText(`Générer un Email personnel de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" en ${language} ✌️`)
  //         } else if (mailType === "administratif" && language) {
  //           setTypewriterText(`Générer un Email administratif de "${truncateText(myName, 15)}" à "${truncateText(dest, 15)}" en ${language} 📝`)
  //         }
  //       }
  //     }
  //   } else {
  //     setTypewriterText(`Task completor ne permet pas encore de générer ce document`)
  //   };
  // })

  return (
    <>
      <NavbarFixed startScroll={isScrolling} hidden={hidden} />
    </>
  )
}

const NavbarFixed = ({startScroll, hidden}) => {
  return (
    <motion.nav
      className={`py-4 md:py-8 w-full z-20 text-white mx-auto fixed transition-all ${ startScroll ? 'bg-secondary shadow-lg' : 'bg-transparent' }`}

      variants={{
        show: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "show"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* General Navbar  */}
      <div className={`w-full relative flex items-center justify-center ${styles.paddingX} max-w-7xl mx-auto`}>
        <div className={`md:absolute cursor-pointer left-[120px]`}>
            <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
        </div>
        <div className="w-full flex justify-center">
          <ul className="hidden md:flex list-none gap-5 justify-between w-1/2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={`/${link.id}`} className="py-2 px-4 transition-colors hover:bg-tertiary rounded-md cursor-pointer font-bold">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Navbar for Generator */}
    </motion.nav>
  )
};

const NavbarScrolling = () => {
  return (
    <motion.nav
      className={`py-4 w-full absolute flex items-center justify-center z-20 text-white top-4`}
      variants={{
        show: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "show"}
      transition={{ duration: 0.35, ease: "easeInOut" }}

    >
      {/* General Navbar  */}
      <div className={`md:block cursor-pointer absolute left-5 sm:left-10 lg:left-24`}>
          <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
      </div>
      <div className="w-full flex justify-center max-w-7xl">
        <ul className="hidden md:flex list-none gap-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`/${link.id}`} className="px-8 xl:px-10 py-2 transition-colors hover:bg-tertiary rounded-full cursor-pointer">{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Navbar for Generator */}
    </motion.nav>
  )
}



const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export default Navbar;
