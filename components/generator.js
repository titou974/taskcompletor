"use client"

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './sectionwrapper';
import Image from 'next/image';
import Cercle1 from '../public/img/icon1white.svg';
import Cercle2 from '../public/img/icon2white.svg';
import Cercle3 from '../public/img/icon3white.svg';
import Cercle4 from '../public/img/icon4white.svg';
import Cercle5 from '../public/img/icon5white.svg';
import { styles } from '../pages/style';
import DropDown from './dropdown';
import DropDownLang from './dropdownlang';
import DropDownType from './dropdowntype';
import PenLoader from './penloader';
import { PlusIcon } from '@heroicons/react/20/solid';
import Loader from './loader';
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import RenderReport from './pdf/pdfreport';
import axios from 'axios';

const Generator = () => {

  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [doc, setDoc] = useState("Exercice");
  const [lang, setLang] = useState("Formel 📝");
  const [prompt, setPrompt] = useState("");
  const [dest, setDest] = useState("");
  const [persoType, setPersoType] = useState("Élève 👩‍🎓");
  const [domain, setDomain] = useState("");
  const [theme, setTheme] = useState("");
  const [questions, setQuestions] = useState("");
  const [job, setJob] = useState("");
  const [competences, setCompetences] = useState("");
  const [experiences, setExperiences] = useState("");
  const [company, setCompany] = useState("");
  const [myName, setMyName] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [generatedDoc, setGeneratedDoc] = useState("");
  const [generatedSections, setGeneratedSections] = useState([]);
  const [length, setLength] = useState(0);
  const [doneGeneration, setDoneGeneration] = useState(false);
  const [finalText, setFinalText] = useState("");
  const docRef = useRef();

  const scrollToDoc = () => {
    if (docRef.current !== null) {
      docRef.current.scrollIntoView({ behavior: "smooth" })
    }
  };

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
  });

  const generateDoc = async(e) => {
    e.preventDefault();
    setGeneratedDoc("");
    setGeneratedSections([]);
    setDoneGeneration(false);
    setLoading(true);
    setLength(0);
    setFinalText('');
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
    };

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    };

    const onParse = (event) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          let text = JSON.parse(data).text ?? "";
          const regex1 = /Rapport[^.]*\n/;
          const regex3 = /(\d+\.\s.+)\n(.+)/g;

          setGeneratedDoc((prev) => {
            const fulltext = prev + text;
            if (regex1.test(fulltext) === false) {
              setGeneratedTitle(fulltext);
            };
            const sections = [...fulltext.matchAll(regex3)];
            setGeneratedSections(sections);
            setLength(sections.length);
            setFinalText(fulltext)
            return fulltext;
          })


        } catch (e) {
          console.error(e);
        }
      }
    };


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
    try {
      const apiResponse = await axios.post('/api/saveGeneratedText', { finalText });
      console.log(apiResponse.data.message); // 'Generated title saved successfully!'
    } catch (error) {
      console.error('Error saving generatedTitle:', error);
    }
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
          <textarea value={doc === "Lettre" ? dest : company} onChange={doc === "Lettre" ? (e) => setDest(e.target.value) : (e) => setCompany(e.target.value)} rows={2} className="w-5/12 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700" placeholder={`${doc === "Lettre" ? "Mike Tyson" : "Café Élementaire"}`}/>
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-10 ${doc === "Lettre" || doc === "Rapport" || doc === "Lettre de motivation" || doc === "Fiche de révision" ? "" : "hidden"}`}>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle2} width={50} height={50} alt="step 2"/>
          <h2 className={`${styles.sectionSubText} ${doc === "Lettre" || doc === "Rapport" ? "lg:block" : "lg:hidden"} hidden font-bold`}>Sélectionner un language</h2>
          <h2 className={`${styles.sectionSubText} ${doc === "Lettre" || doc === "Rapport" ? "lg:hidden" : "hidden"} font-bold`}>Language</h2>
          <h2 className={`${styles.sectionSubText} ${doc === "Lettre de motivation" ? "" : "hidden"} font-bold`}>Job visé</h2>
          <h2 className={`${styles.sectionSubText} ${doc === "Fiche de révision" ? "" : "hidden"} font-bold`}>Matière</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className={`w-full md:w-1/2 ${doc === "Lettre" || doc === "Rapport" ? "" : "hidden"}`}>
          <DropDownLang type={lang} setType={(newLang) => setLang(newLang)}/>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className={`w-full md:w-1/2 ${doc === "Lettre de motivation" || doc === "Fiche de révision" ? "" : "hidden"}`}>
          <textarea value={job} onChange={(e) => setJob(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Lettre de motivation" ? "" : "hidden"}`} placeholder="Serveur"/>
          <textarea value={theme} onChange={(e) => setTheme(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Fiche de révision" ? "" : "hidden"}`} placeholder="Marketing digital"/>
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-10 ${doc === "Exercice" ? "" : "hidden"}`}>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle2} width={50} height={50} alt="step 2"/>
          <h2 className={`${styles.sectionSubText} font-bold hidden lg:block`}>Sélectionner un type d'écriture</h2>
          <h2 className={`${styles.sectionSubText} font-bold lg:hidden`}>Type d'écriture</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <DropDownType type={persoType} setType={(newType) => setPersoType(newType)}/>
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-6`}>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle3} width={50} height={50} alt="step 3"/>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Rapport" || doc === "Lettre" ? "" : "hidden"}`}>Décrivez le(s) sujet(s)</h2>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Exercice" ? "" : "hidden"}`}>Nom de la matière</h2>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Lettre de motivation" ? "" : "hidden"}`}>Compétences</h2>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Fiche de révision" ? "" : "hidden"}`}>Chapitre(s)</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <textarea value={subject} onChange={(e) => setSubject(e.target.value)} rows={4} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc === "Rapport" || doc === "Lettre" ? "" : "hidden"}`} placeholder='Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique.'/>
          <textarea value={theme} onChange={(e) => setTheme(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Exercice" ? "" : "hidden"}`} placeholder="Financial Reporting"/>
          <textarea value={domain} onChange={(e) => setDomain(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Fiche de révision" ? "" : "hidden"}`} placeholder="SEO et SEA"/>
          <textarea value={competences} onChange={(e) => setCompetences(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Lettre de motivation" ? "" : "hidden"}`} placeholder="Bilingue anglais, dynamique, bonne mémoire"/>
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-6 ${doc === "Lettre de motivation" || doc === "Exercice" ? "" : "hidden"}`}>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle4} width={50} height={50} alt="step 3"/>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Exercice" ? "" : "hidden"}`}>Domaine de la matière</h2>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Lettre de motivation" ? "" : "hidden"}`}>Expériences</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <textarea value={domain} onChange={(e) => setDomain(e.target.value)} rows={1} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Exercice" ? "" : "hidden"}`} placeholder="Capital immatériel du groupe Kering"/>
          <textarea value={experiences} onChange={(e) => setExperiences(e.target.value)} rows={4} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Lettre de motivation" ? "" : "hidden"}`} placeholder="barman pendant 1 mois aux fontaines (le mois dernier) et serveur au Ritz l'été 2022"/>
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-6 ${doc === "Exercice" ? "" : "hidden"}`}>
        <motion.div variants={textVariant()} className='flex items-center gap-4 w-full md:w-1/2'>
          <Image src={Cercle5} width={50} height={50} alt="step 3"/>
          <h2 className={`${styles.sectionSubText} font-bold ${doc === "Exercice" ? "" : "hidden"}`}>Consignes et Questions</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='w-full md:w-1/2'>
          <textarea value={questions} onChange={(e) => setQuestions(e.target.value)} rows={4} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${doc == "Exercice" ? "" : "hidden"}`}
            placeholder="5.1 Qu'est-ce qui est le plus frappant lorsque l'on regarde les actifs de KERING ?
            5.2 Quelle est la valeur présentée par KERING pour son portefeuille de marques ? Cette valeur vous semble-t-elle réaliste ?
            5.3 Quels sont les autres actifs incorporels ?
            5.4 Comment les marques sont-elles comptabilisées ?
            5.5 Comment les autres actifs incorporels sont-ils comptabilisés ?
            5.6 Est-ce que le groupe KERING a une politique de recherche et développement ?"/>
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
      <div ref={docRef}>
        <RenderReport generatedTitle={generatedTitle} generatedSections={generatedSections} length={length} />
      </div>
      <div className={`${styles.paddingX} m-0 fixed bottom-0 right-0 left-0 ${loading ? "" : "hidden"}`} >
        <PenLoader />
      </div>
    </div>
  )
}

export default Generator;
