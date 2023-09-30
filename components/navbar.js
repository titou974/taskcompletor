"use client"

import { navLinks } from "../utils/constants";
import styles from "./style";
import Image from 'next/image';
import feather from '../public/img/feather.png';
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";



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

  const [mobileMenu, setMobileMenu] = useState(false);

  const menuAnim = {
    initial: {
      scaleY: 0,
    },
    show: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }
  }

  const containerAnim = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      }
    },
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  };



  return (
    <>
      <motion.nav
        className={`py-4 md:py-8 w-full z-20 text-white mx-auto fixed transition-all ${ startScroll ? 'bg-secondary shadow-xl' : 'bg-transparent' }`}

        variants={{
          show: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "show"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* General Navbar  */}
        <div className={`w-full relative flex items-center justify-center ${styles.paddingX} max-w-7xl mx-auto`}>
          <div className={`lg:absolute cursor-pointer left-[120px]`}>
              <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
          </div>
          <div className="w-full flex justify-center hidden lg:flex">
            <ul className="hidden lg:flex list-none gap-5 justify-between w-1/2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={`/${link.id}`} className="py-2 px-4 transition-colors hover:bg-[#011B6B] rounded-md cursor-pointer font-bold">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-end lg:hidden">
            <button onClick={(e) => setMobileMenu(true)} className="cursor-pointer">
              <Bars3Icon className="w-[25px]"/>
            </button>
          </div>
        </div>
        {/* Navbar for Generator */}
      </motion.nav>
      <AnimatePresence>
      { mobileMenu && (
          <motion.div variants={menuAnim} initial="initial" animate="show" exit="exit" className="fixed left-0 top-0 bottom-0 w-full h-screen bg-tertiary lg:hidden z-40 origin-top overflow-hidden">
            <div className={`h-full flex flex-col ${styles.paddingX} max-w-7xl`}>
              <div className="flex justify-center py-4 md:py-8">
                <div className={`lg:absolute cursor-pointer left-[120px]`}>
                  <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
                </div>
                <div className="w-full justify-end flex ">
                  <button onClick={(e) => setMobileMenu(false)} className="cursor-pointer">
                    <XMarkIcon className="w-[35px] text-white " />
                  </button>
                </div>
              </div>
              <motion.div variants={containerAnim} initial="initial" animate="show" exit="initial" className="mx-auto flex flex-col h-full items-center justify-center gap-40">
                { navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <MobileNavLink key={index} title={link.title} href={link.id} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )
      }
      </AnimatePresence>
    </>
  )
};
const MobileNavLinkAnim = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({title, href}) => {
  return (
    <motion.div variants={MobileNavLinkAnim} className="text-white text-2xl uppercase rounded-md py-2 px-4">
      <Link href={href} className="hover:bg-white hover:text-tertiary py-2 px-4 transition-colors rounded-md">
        {title}
      </Link>
    </motion.div>
  )
}



export default Navbar;
