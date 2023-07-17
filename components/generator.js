"use client"

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from './sectionwrapper'
import Image from 'next/image'
import Cercle1 from '../public/img/icon1white.svg'
import Cercle2 from '../public/img/icon2white.svg'
import Cercle3 from '../public/img/icon3white.svg'
import { styles } from '../pages/style'
import DropDown from './dropdown'
import DropDownLang from './dropdownlang'
import { PlusIcon } from '@heroicons/react/20/solid'
import Loader from './loader'
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";




const Generator = () => {

  const [loading, setLoading] = useState(false)
  const [subject, setSubject] = useState("")
  const [doc, setDoc] = useState("Exercice")
  const [lang, setLang] = useState("Formel 📝")
  const [prompt, setPrompt] = useState("")
  const [dest, setDest] = useState("")
  const [persoType, setPersoType] = useState("Élève")
  const [domain, setDomain] = useState("")
  const [theme, setTheme] = useState("")
  const [generatedDoc, setGeneratedDoc] = useState("")
  const [questions, setQuestions] = useState("")
  const [job, setJob] = useState("")
  const [competences, setCompetences] = useState("")
  const [experiences, setExperiences] = useState("")
  const [company, setCompany] = useState("")
  const [myName, setMyName] = useState("")

  const docRef = useRef()

  const scrollToDoc = () => {
    if (docRef.current !== null) {
      docRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (doc === "Rapport") {
      setPrompt(`Écrivez un rapport d'une page maximum sur le sujet ${subject} en utilisant un langage ${lang}. Structurez votre rapport en sections principales, numérotées de manière claire et concise (1, 2, 3, etc.). Assurez-vous d'inclure les informations les plus importantes et les principales idées dans chaque section. Veillez à utiliser le ton et le registre appropriés pour le style de langage choisi. Concentrez-vous sur la clarté et la précision de votre écriture tout en respectant la limite d'une page maximum.`)
    } else if (doc === "Lettre") {
      setPrompt(`Cher ChatGPT, je souhaiterais que vous rédigiez une lettre détaillée à ${dest}. La lettre devrait aborder ${subject} et fournir des informations spécifiques, des explications détaillées et des arguments convaincants. ${lang === "Formelle" ? "Veuillez utiliser un ton formel et respectueux tout au long de la lettre." : "Veuillez utiliser un ton familier et amical tout au long de la lettre."} Assurez-vous d'inclure une introduction claire, des paragraphes bien structurés et une conclusion pertinente. Merci d'avance pour votre aide et votre expertise dans la rédaction de cette lettre importante.`)
    } else if (doc === "Exercice") {
      setPrompt(`Vous êtes un ${persoType} dans le domaine de ${domain}. Vous êtes sollicité pour résoudre un exercice sur ${theme}. Veuillez répondre aux questions suivantes en tant que ${persoType} : ${questions}. Veuillez fournir des explications détaillées et des exemples pertinents pour soutenir vos réponses.`)
    } else if (doc === "Fiche de révision") {
      setPrompt(`Générez une fiche de révision sur ${theme} en ${domain}. Assurez-vous d'inclure des exemples clairs et des illustrations si possible. Organisez la fiche de manière à faciliter la révision, en utilisant des titres, des sous-titres et des puces pour les points clés.`)
    } else if (doc === "Lettre de motivation") {
      setPrompt(`Cher ChatGPT, je suis à la recherche d'un emploi dans ${job}. Pouvez-vous m'aider à rédiger une lettre de motivation convaincante qui mettra en valeur mes compétences (compétences: ${competences}), mon expérience pertinente (mes expériences: ${experiences}) et ma motivation à travailler pour l'entreprise ${company} ? Mon nom est ${myName}. J'aimerais que ma lettre soit claire, concise et engageante, et qu'elle capture l'attention du recruteur dès le début. Merci d'avance pour votre aide précieuse !`)
    }
  })

  const generateDoc = async(e) => {
    e.preventDefault();
    setGeneratedDoc("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? ""
          setGeneratedDoc((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    }

    // https://web.dev/streams/#the-getreader-and-read-methods
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }
    scrollToDoc();
    setLoading(false);
  };

  return (
    <div className='w-full flex flex-col gap-20 text-white'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle1} width={50} height={50} alt="step 1"/>
          <h2 className={`${styles.sectionSubText} font-bold hidden lg:block`}>Sélectionner un type de document</h2>
          <h2 className={`${styles.sectionSubText} font-bold lg:hidden`}>Type de document</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <DropDown type={doc} setType={(newDoc) => setDoc(newDoc)} />
        </motion.div>
        <motion.div variants={textVariant()} className={`w-full md:w-1/2 flex justify-between ${doc === "Lettre" || doc === "Lettre de motivation" ? "" : "hidden"}`}>
          <h2 className={`${styles.sectionSubText} font-bold w-5/12`}>Expéditeur</h2>
          <h2 className={`${styles.sectionSubText} ${doc === "Lettre de motivation" ? "hidden" : "" } font-bold w-5/12`}>Destinataire</h2>
          <h2 className={`${styles.sectionSubText} ${doc === "Lettre" ? "hidden" : "" } font-bold w-5/12`}>Entreprise</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className={`w-full md:w-1/2 flex justify-between ${doc === "Lettre" || doc === "Lettre de motivation" ? "" : "hidden"}`}>
          <textarea value={myName} onChange={(e) => setMyName(e.target.value)} rows={2} className="w-5/12 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700" placeholder='Votre nom'/>
          <textarea value={dest} onChange={(e) => setDest(e.target.value)} rows={2} className="w-5/12 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700" placeholder={`${doc === "Lettre" ? "Mike Tyson" : "LVMH"}`}/>
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle2} width={50} height={50} alt="step 2"/>
          <h2 className={`${styles.sectionSubText} ${doc !== "Lettre" || doc !== "Rapport" ? "lg:hidden" : ""} font-bold hidden lg:block`}>Sélectionner un language</h2>
          <h2 className={`${styles.sectionSubText} ${doc !== "Lettre" || doc !== "Rapport" ? "hidden" : ""} font-bold lg:hidden`}>Language</h2>
          <h2 className={`${styles.sectionSubText} ${doc !== "Exercice" ? "lg:hidden" : ""} font-bold hidden lg:block`}>Sélectionner un type de réponse</h2>
          <h2 className={`${styles.sectionSubText} ${doc !== "Exercice" ? "hidden" : ""} font-bold lg:hidden`}>Type</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <DropDownLang type={lang} setType={(newLang) => setLang(newLang)}/>
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle3} width={50} height={50} alt="step 3"/>
          <h2 className={`${styles.sectionSubText} font-bold`}>Décrivez le(s) sujet(s)</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <textarea value={subject} onChange={(e) => setSubject(e.target.value)} rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5  px-4 py-2 text-gray-700 caret-gray-700" placeholder='Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique.'/>
        </motion.div>
      </div>
      {!loading && (
        <button className={`${styles.sectionSubText} bg-white hover:bg-black text-black hover:text-white w-full md:w-1/2 mx-auto h-20 py-2 px-4 rounded-md flex justify-center items-center`} onClick={(e) => generateDoc(e)}>
          {`Générer votre document`}
          <PlusIcon className='w-[35px] ms-2'></PlusIcon>
        </button>
      )}
      {loading && (
        <button disabled className={`${styles.sectionSubText} bg-white text-black w-full md:w-1/2 mx-auto h-20 py-2 px-4 rounded-md`}>
          <Loader/>
        </button>
      )}
      <div className='py-10' ref={docRef}>
        <p>{generatedDoc}</p>
      </div>
      { console.log(doc) }
      { console.log(prompt) }
    </div>
  )
}

export default SectionWrapper(Generator, "generator")
