"use client"

import { navLinks } from "../utils/constants";
import styles from "./style";
import Image from 'next/image';
import feather from '../public/img/feather.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestion,
  faFileCirclePlus,
  faHouse
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

const steps = [
  { title: 'Générer', description: 'Rentrez vos informations' },
  { title: 'Modifier', description: 'Personnalisez le contenu' },
  { title: 'Télécharger', description: 'PDF ou Word' },
]


const Navbar = ({hover, modifyingStep, doc, lang, myName, dest, emotion, messageLength, language, subject, mailType}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");

  // const changeNavbar = () => {
  //   if (window.scrollY >= 30) {
  //     setIsScrolling(true)
  //   } else {
  //     setIsScrolling(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNavbar);
  //   return () => {
  //     window.removeEventListener('scroll', changeNavbar);
  //   };
  // }, [])

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
        {isMobile && (
          <NavbarScrolling isScrolling={isScrolling} />
        )
        }
        {!isMobile && (
          <NavbarFixed />
          )
        }
    </>
  )
}

const NavbarFixed = () => {

  return (
    <nav className={`py-4 w-full absolute flex items-center justify-center z-20 text-white top-4`}>
      {/* General Navbar  */}
      <div className={`hidden md:block cursor-pointer absolute left-5 sm:left-10 lg:left-24`}>
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
    </nav>
  )
};

const NavbarScrolling = () => {
  const router = useRouter()
  return (
    <nav
      className={`navbar-phone rounded-full`}
    >
      <ul className="flex lg:hidden list-none gap-16 justify-center align-center">
          <li key="homefixed">
            <Link href={`/`} className={`hover:bg-tertiary text-tertiary hover:text-white rounded-full transition-colors cursor-pointer block p-3`}>
              <FontAwesomeIcon icon={faHouse} className='h-7 w-7' size="xl" />
            </Link>
          </li>
          <li key="generatorfixed">
            <Link href={`/${navLinks[0].id}`} className={`hover:bg-tertiary rounded-full text-tertiary hover:text-white transition-colors cursor-pointer block p-3`}>
              <FontAwesomeIcon icon={faFileCirclePlus} className='h-7 w-7' size="xl" />
            </Link>
          </li>
          <li key="questionfixed">
            <Link href="/" className={`hover:bg-tertiary rounded-full text-tertiary hover:text-white transition-colors block p-3`}>
              <FontAwesomeIcon icon={faQuestion} className='w-7 h-7' size="xl" />
            </Link>
          </li>
      </ul>
    </nav>
  )
}

const NavbarTypewriter = ({isScrolling, text, hover}) => {

  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className={`${hover ? "bg-green-400 text-white" : "navbar-bg"} transition-colors w-9/12 max-w-xl h-[60px] md:h-[80px] md:w-7/12 fixed py-4 my-0 flex items-center justify-center z-20 top-4 rounded-full left-1/2 right-1/2 mx-auto overflow-hidden shadow-navbar`}
    >
      <div className="w-full flex justify-center">
        <div className="hidden lg:block text-sm mx-auto text-center w-9/12 font-bold">
          <TypewriterComponent
                options={{
                  strings: text,
                  autoStart: true,
                  cursorClassName: "hidden",
                  typeSpeed: 10,
                }}
            />
        </div>
        <div className="lg:hidden text-[12px] w-9/12 mx-auto text-center font-bold">
          <TypewriterComponent
              options={{
                strings: text,
                autoStart: true,
                cursorClassName: "hidden",
                typeSpeed: 10,
              }}
          />
        </div>
        <div className="hidden items-center">
          <a className="hover:text-secondary cursor-pointer transition-colors">Se connecter</a>
          <a className="cta3 cursor-pointer ms-4">
            <p>S'enregistrer</p>
          </a>
        </div>
      </div>
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
