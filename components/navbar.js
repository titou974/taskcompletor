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
          <div className={`lg:absolute cursor-pointer left-[70px]`}>
              <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
          </div>
          <div className="w-full flex justify-center hidden lg:flex">
            <ul className="hidden lg:flex list-none justify-between w-7/12">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={`/${link.id}`} className={`py-2 px-4 transition-colors hover:bg-[#011B6B] rounded-md cursor-pointer font-bold navbar-icons flex items-center gap-4`}>
                    {link.title}
                    {link.title === "Générer un document" && (
                      <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 8.75H2.5V16.25H1.25C1.08579 16.2502 0.923159 16.218 0.771413 16.1552C0.619668 16.0925 0.48179 16.0004 0.365678 15.8843C0.249565 15.7682 0.157499 15.6303 0.09475 15.4786C0.0320015 15.3268 -0.000196196 15.1642 8.99427e-07 15V10C-0.000196196 9.83579 0.0320015 9.67316 0.09475 9.52141C0.157499 9.36967 0.249565 9.23179 0.365678 9.11568C0.48179 8.99956 0.619668 8.9075 0.771413 8.84475C0.923159 8.782 1.08579 8.7498 1.25 8.75ZM21.25 6.875V17.5C21.2493 18.1628 20.9857 18.7983 20.517 19.267C20.0483 19.7357 19.4128 19.9993 18.75 20H6.25C5.58716 19.9993 4.95166 19.7357 4.48296 19.267C4.01426 18.7983 3.75065 18.1628 3.75 17.5V6.875C3.74987 6.46458 3.83061 6.05816 3.98761 5.67896C4.1446 5.29975 4.37478 4.9552 4.66499 4.66499C4.9552 4.37478 5.29975 4.1446 5.67896 3.9876C6.05816 3.83061 6.46458 3.74987 6.875 3.75H11.25V1.25C11.25 0.918479 11.3817 0.600537 11.6161 0.366117C11.8505 0.131696 12.1685 0 12.5 0C12.8315 0 13.1495 0.131696 13.3839 0.366117C13.6183 0.600537 13.75 0.918479 13.75 1.25V3.75H18.125C18.5354 3.74987 18.9418 3.83061 19.321 3.9876C19.7002 4.1446 20.0448 4.37478 20.335 4.66499C20.6252 4.9552 20.8554 5.29975 21.0124 5.67896C21.1694 6.05816 21.2501 6.46458 21.25 6.875ZM10.3125 10C10.3125 9.69097 10.2209 9.38887 10.0492 9.13192C9.87748 8.87497 9.63345 8.6747 9.34794 8.55644C9.06243 8.43818 8.74827 8.40723 8.44517 8.46752C8.14208 8.52781 7.86367 8.67663 7.64515 8.89514C7.42663 9.11366 7.27781 9.39207 7.21752 9.69517C7.15723 9.99827 7.18818 10.3124 7.30644 10.5979C7.4247 10.8835 7.62497 11.1275 7.88192 11.2992C8.13887 11.4709 8.44097 11.5625 8.75 11.5625C8.9552 11.5625 9.15838 11.5221 9.34796 11.4436C9.53754 11.3651 9.70979 11.25 9.85489 11.1049C9.99998 10.9598 10.1151 10.7875 10.1936 10.598C10.2721 10.4084 10.3125 10.2052 10.3125 10ZM10 15H7.5V16.25H10V15ZM13.75 15H11.25V16.25H13.75V15ZM17.8125 10C17.8125 9.69097 17.7209 9.38887 17.5492 9.13192C17.3775 8.87497 17.1335 8.6747 16.8479 8.55644C16.5624 8.43818 16.2483 8.40723 15.9452 8.46752C15.6421 8.52781 15.3637 8.67663 15.1451 8.89514C14.9266 9.11366 14.7778 9.39207 14.7175 9.69517C14.6572 9.99827 14.6882 10.3124 14.8064 10.5979C14.9247 10.8835 15.125 11.1275 15.3819 11.2992C15.6389 11.4709 15.941 11.5625 16.25 11.5625C16.4552 11.5625 16.6584 11.5221 16.848 11.4436C17.0375 11.3651 17.2098 11.25 17.3549 11.1049C17.5 10.9598 17.6151 10.7875 17.6936 10.598C17.7721 10.4084 17.8125 10.2052 17.8125 10ZM17.5 15H15V16.25H17.5V15ZM25 10V15C25.0002 15.1642 24.968 15.3268 24.9052 15.4786C24.8425 15.6303 24.7504 15.7682 24.6343 15.8843C24.5182 16.0004 24.3803 16.0925 24.2286 16.1552C24.0768 16.218 23.9142 16.2502 23.75 16.25H22.5V8.75H23.75C23.9142 8.7498 24.0768 8.782 24.2286 8.84475C24.3803 8.9075 24.5182 8.99956 24.6343 9.11568C24.7504 9.23179 24.8425 9.36967 24.9052 9.52141C24.968 9.67316 25.0002 9.83579 25 10Z" fill="white"/>
                      </svg>

                    )}
                    {link.title === "À Propos" && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 0C15.1348 0 19.5 4.36518 19.5 9.75C19.5 15.1348 15.1348 19.5 9.75 19.5C4.36524 19.5 0 15.1348 0 9.75C0 4.36518 4.36524 0 9.75 0ZM10.7271 8.775H8.77714V14.625H10.7271V8.775ZM9.75991 4.63125C9.04904 4.63125 8.53339 5.14405 8.53339 5.83648C8.53339 6.55691 9.03545 7.06875 9.75991 7.06875C10.4562 7.06875 10.9709 6.55691 10.9709 5.85C10.9709 5.14405 10.4562 4.63125 9.75991 4.63125Z" fill="white"/>
                      </svg>
                    )}
                    {link.title === "FAQ" && (
                      <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.43653 12.6313C8.19421 12.6805 8.02012 12.8936 8.02012 13.1408V14.2594C8.02012 14.6902 7.67089 15.0394 7.24013 15.0394C6.80931 15.0394 6.46014 14.6902 6.46014 14.2594V12.012C6.46014 11.6023 6.77708 11.2624 7.18574 11.2339C8.10998 11.1693 9.46981 10.8549 10.5731 10.1508C11.6501 9.46355 12.44 8.4426 12.44 6.89884C12.44 5.41145 11.8883 4.38061 11.0871 3.69698C10.2662 2.99648 9.12438 2.61282 7.89855 2.56477C5.36009 2.46526 2.99438 3.76582 2.54136 5.79073C2.44729 6.2111 2.03026 6.47567 1.60989 6.3816C1.18948 6.28754 0.924959 5.8705 1.01897 5.45014C1.36503 3.90357 2.3642 2.77157 3.65711 2.03055C4.95689 1.28558 6.53361 0.950078 7.95965 1.00598C9.45125 1.06446 10.9547 1.53326 12.0997 2.51034C13.2646 3.50437 14 4.97689 14 6.89884C14 9.10263 12.8193 10.568 11.4123 11.4659C10.46 12.0736 9.38433 12.4386 8.43653 12.6313ZM5.94009 18.9394C5.94009 18.0778 6.63855 17.3794 7.50008 17.3794C8.36165 17.3794 9.06006 18.0778 9.06006 18.9394C9.06006 19.8009 8.36165 20.4993 7.50008 20.4993C6.63855 20.4993 5.94009 19.8009 5.94009 18.9394Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    )}
                  </Link>
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
                  <div key={index} className="overflow-hidden" >
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
      <Link href={href} className="hover:bg-white hover:text-tertiary py-2 px-4 transition-colors rounded-md flex items-center justify-center gap-5">
        {title}
        {title === "Générer un document" && (
          <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 8.75H2.5V16.25H1.25C1.08579 16.2502 0.923159 16.218 0.771413 16.1552C0.619668 16.0925 0.48179 16.0004 0.365678 15.8843C0.249565 15.7682 0.157499 15.6303 0.09475 15.4786C0.0320015 15.3268 -0.000196196 15.1642 8.99427e-07 15V10C-0.000196196 9.83579 0.0320015 9.67316 0.09475 9.52141C0.157499 9.36967 0.249565 9.23179 0.365678 9.11568C0.48179 8.99956 0.619668 8.9075 0.771413 8.84475C0.923159 8.782 1.08579 8.7498 1.25 8.75ZM21.25 6.875V17.5C21.2493 18.1628 20.9857 18.7983 20.517 19.267C20.0483 19.7357 19.4128 19.9993 18.75 20H6.25C5.58716 19.9993 4.95166 19.7357 4.48296 19.267C4.01426 18.7983 3.75065 18.1628 3.75 17.5V6.875C3.74987 6.46458 3.83061 6.05816 3.98761 5.67896C4.1446 5.29975 4.37478 4.9552 4.66499 4.66499C4.9552 4.37478 5.29975 4.1446 5.67896 3.9876C6.05816 3.83061 6.46458 3.74987 6.875 3.75H11.25V1.25C11.25 0.918479 11.3817 0.600537 11.6161 0.366117C11.8505 0.131696 12.1685 0 12.5 0C12.8315 0 13.1495 0.131696 13.3839 0.366117C13.6183 0.600537 13.75 0.918479 13.75 1.25V3.75H18.125C18.5354 3.74987 18.9418 3.83061 19.321 3.9876C19.7002 4.1446 20.0448 4.37478 20.335 4.66499C20.6252 4.9552 20.8554 5.29975 21.0124 5.67896C21.1694 6.05816 21.2501 6.46458 21.25 6.875ZM10.3125 10C10.3125 9.69097 10.2209 9.38887 10.0492 9.13192C9.87748 8.87497 9.63345 8.6747 9.34794 8.55644C9.06243 8.43818 8.74827 8.40723 8.44517 8.46752C8.14208 8.52781 7.86367 8.67663 7.64515 8.89514C7.42663 9.11366 7.27781 9.39207 7.21752 9.69517C7.15723 9.99827 7.18818 10.3124 7.30644 10.5979C7.4247 10.8835 7.62497 11.1275 7.88192 11.2992C8.13887 11.4709 8.44097 11.5625 8.75 11.5625C8.9552 11.5625 9.15838 11.5221 9.34796 11.4436C9.53754 11.3651 9.70979 11.25 9.85489 11.1049C9.99998 10.9598 10.1151 10.7875 10.1936 10.598C10.2721 10.4084 10.3125 10.2052 10.3125 10ZM10 15H7.5V16.25H10V15ZM13.75 15H11.25V16.25H13.75V15ZM17.8125 10C17.8125 9.69097 17.7209 9.38887 17.5492 9.13192C17.3775 8.87497 17.1335 8.6747 16.8479 8.55644C16.5624 8.43818 16.2483 8.40723 15.9452 8.46752C15.6421 8.52781 15.3637 8.67663 15.1451 8.89514C14.9266 9.11366 14.7778 9.39207 14.7175 9.69517C14.6572 9.99827 14.6882 10.3124 14.8064 10.5979C14.9247 10.8835 15.125 11.1275 15.3819 11.2992C15.6389 11.4709 15.941 11.5625 16.25 11.5625C16.4552 11.5625 16.6584 11.5221 16.848 11.4436C17.0375 11.3651 17.2098 11.25 17.3549 11.1049C17.5 10.9598 17.6151 10.7875 17.6936 10.598C17.7721 10.4084 17.8125 10.2052 17.8125 10ZM17.5 15H15V16.25H17.5V15ZM25 10V15C25.0002 15.1642 24.968 15.3268 24.9052 15.4786C24.8425 15.6303 24.7504 15.7682 24.6343 15.8843C24.5182 16.0004 24.3803 16.0925 24.2286 16.1552C24.0768 16.218 23.9142 16.2502 23.75 16.25H22.5V8.75H23.75C23.9142 8.7498 24.0768 8.782 24.2286 8.84475C24.3803 8.9075 24.5182 8.99956 24.6343 9.11568C24.7504 9.23179 24.8425 9.36967 24.9052 9.52141C24.968 9.67316 25.0002 9.83579 25 10Z" fill="white" />
          </svg>
        )}
        {title === "À Propos" && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 0C15.1348 0 19.5 4.36518 19.5 9.75C19.5 15.1348 15.1348 19.5 9.75 19.5C4.36524 19.5 0 15.1348 0 9.75C0 4.36518 4.36524 0 9.75 0ZM10.7271 8.775H8.77714V14.625H10.7271V8.775ZM9.75991 4.63125C9.04904 4.63125 8.53339 5.14405 8.53339 5.83648C8.53339 6.55691 9.03545 7.06875 9.75991 7.06875C10.4562 7.06875 10.9709 6.55691 10.9709 5.85C10.9709 5.14405 10.4562 4.63125 9.75991 4.63125Z" fill="white" />
          </svg>
        )}
        {title === "FAQ" && (
          <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.43653 12.6313C8.19421 12.6805 8.02012 12.8936 8.02012 13.1408V14.2594C8.02012 14.6902 7.67089 15.0394 7.24013 15.0394C6.80931 15.0394 6.46014 14.6902 6.46014 14.2594V12.012C6.46014 11.6023 6.77708 11.2624 7.18574 11.2339C8.10998 11.1693 9.46981 10.8549 10.5731 10.1508C11.6501 9.46355 12.44 8.4426 12.44 6.89884C12.44 5.41145 11.8883 4.38061 11.0871 3.69698C10.2662 2.99648 9.12438 2.61282 7.89855 2.56477C5.36009 2.46526 2.99438 3.76582 2.54136 5.79073C2.44729 6.2111 2.03026 6.47567 1.60989 6.3816C1.18948 6.28754 0.924959 5.8705 1.01897 5.45014C1.36503 3.90357 2.3642 2.77157 3.65711 2.03055C4.95689 1.28558 6.53361 0.950078 7.95965 1.00598C9.45125 1.06446 10.9547 1.53326 12.0997 2.51034C13.2646 3.50437 14 4.97689 14 6.89884C14 9.10263 12.8193 10.568 11.4123 11.4659C10.46 12.0736 9.38433 12.4386 8.43653 12.6313ZM5.94009 18.9394C5.94009 18.0778 6.63855 17.3794 7.50008 17.3794C8.36165 17.3794 9.06006 18.0778 9.06006 18.9394C9.06006 19.8009 8.36165 20.4993 7.50008 20.4993C6.63855 20.4993 5.94009 19.8009 5.94009 18.9394Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        )}
      </Link>
    </motion.div>
  )
}



export default Navbar;
