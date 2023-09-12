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

const steps = [
  { title: 'Générer', description: 'Rentrez vos informations' },
  { title: 'Modifier', description: 'Personnalisez le contenu' },
  { title: 'Télécharger', description: 'PDF ou Word' },
]


const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [])

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScrolling isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  )
}

const NavbarFixed = () => {

  return (
    <nav className={`w-full fixed py-4 my-0 flex items-center justify-center z-20 text-white top-4`}>
      {/* General Navbar  */}
      <div className={`hidden sm:block cursor-pointer absolute left-5 sm:left-10 lg:left-24`}>
          <Image src={feather} alt="A writer feather" className= {`w-[30px] sm:w-[38px] lg:w-[45px] z-50`}/>
      </div>
      <div className="w-full flex justify-center max-w-7xl">
        <ul className="hidden lg:flex list-none gap-5">
          {navLinks.map((link) => (
            <li key={link.id} className="px-8 xl:px-10 py-2 transition-colors hover:bg-tertiary rounded-full">
              <Link href={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden list-none gap-10 md:gap-16">
          <li>
            <Link href={`/`} className={`p-4 hover:bg-tertiary rounded-full text-white transition-colors cursor-pointer`}>
              <FontAwesomeIcon icon={faHouse} className='text-2xl w-[30px]'/>
            </Link>
          </li>
          <li>
            <Link href={`/${navLinks[0].id}`} className={`p-4 hover:bg-tertiary rounded-full text-white transition-colors cursor-pointer`}>
              <FontAwesomeIcon icon={faFileCirclePlus} className='text-2xl w-[30px]'/>
            </Link>
          </li>
          <li>
            <Link href="/" className={`p-4 hover:bg-tertiary rounded-full text-white transition-colors`}>
              <FontAwesomeIcon icon={faQuestion} className='text-2xl w-[18px]'/>
            </Link>
          </li>
        </ul>
        <div className="hidden items-center">
          <a className="hover:text-secondary cursor-pointer transition-colors">Se connecter</a>
          <a className="cta3 cursor-pointer ms-4">
            <p>S'enregistrer</p>
          </a>
        </div>
      </div>
      {/* Navbar for Generator */}
    </nav>
  )
};

const NavbarScrolling = ({isScrolling}) => {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className={`navbar-bg w-9/12 md:w-7/12 fixed py-4 my-0 flex items-center justify-center z-20 text-white top-4 rounded-full left-1/2`}
    >
      <div className="w-full flex justify-center max-w-7xl">
        <ul className="hidden lg:flex list-none gap-5">
          {navLinks.map((link) => (
            <li key={link.id} className="text-white px-8 xl:px-10  py-2 transition-colors hover:bg-tertiary rounded-full">
              <Link href={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden list-none gap-10 md:gap-16">
          <li>
            <Link href={`/`} className="p-4 hover:bg-tertiary rounded-full text-white transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faHouse} className='text-2xl w-[30px]'/>
            </Link>
          </li>
          <li>
            <Link href={`/${navLinks[0].id}`} className="p-4 hover:bg-tertiary rounded-full text-white transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faFileCirclePlus} className='text-2xl w-[30px]'/>
            </Link>
          </li>
          <li>
            <Link href="/" className="p-4 hover:bg-tertiary rounded-full text-white transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faQuestion} className='text-2xl w-[18px]'/>
            </Link>
          </li>
        </ul>
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
