"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, Fragment } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./sectionwrapper";
import Image from "next/image";
import Cercle1 from "../public/img/icon1white.svg";
import Cercle2 from "../public/img/icon2white.svg";
import Cercle3 from "../public/img/icon3white.svg";
import Cercle4 from "../public/img/icon4white.svg";
import Cercle5 from "../public/img/icon5white.svg";
import styles from "./style";
import DropDownDoc from "./dropdowndoc";
import DropDownLang from "./dropdownlang";
import DropDownType from "./dropdowntype";
import PenLoader from "./penloader";
import { PencilSquareIcon, CheckCircleIcon, DocumentIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import feather from "../public/img/feather.png"
import Loader from "./loader";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import RenderReport from "./pdf/pdfreport";
import axios from "axios";
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import ModalIntro from "./modalintro";
import ModalSaved from "./modalsaved";
import { ShareIcon, BackspaceIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import TabsDocument from "./tabsdocument";
import RadioGroupLangType from "./radiogrouplangtype";
import RadioGroupPersoType from "./radiogrouppersotype";
import { docType } from "../utils/constants";
import EditTextAreaReport from "./editableinputs";
import {
  Alert,
  AlertIcon,
  CloseButton
} from '@chakra-ui/react'


const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [doc, setDoc] = useState("Exercice");
  const [lang, setLang] = useState("formel");
  const [prompt, setPrompt] = useState("");
  const [dest, setDest] = useState("");
  const [persoType, setPersoType] = useState("élève");
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
  const [finalText, setFinalText] = useState("");
  const [saved, setSaved] = useState(false)
  const [modalIntroIntersection, setModalIntroIntersection] = useState(false);
  const [modalIntroVisible, setModalIntroVisible] = useState(false);
  const [modalIntroDesactivate, setModalIntroDesactivate] = useState(false);
  const [modifyingStep, setModifyingStep] = useState(false);
  const [generationError, setGenerationError] = useState(false);
  const [doneGeneration, setDoneGeneration] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  const docRef = useRef();
  const modalIntroRef = useRef();

  const closeModalIntro = () => {
    setModalIntroDesactivate(true);
  }
  
  const backToGeneration = () => {
    setModifyingStep(false);
  }

  const goToModifying = () => {
    setModifyingStep(true);
  }

  {/* Modal Intro Apparition on Intersection*/}

  useEffect(() => {
    const observerIntro = new IntersectionObserver(
      ([entry]) => {
      console.log(entry.isIntersecting);
      setModalIntroIntersection(entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    )
    observerIntro.observe(modalIntroRef.current);
    return () => {
      observerIntro.disconnect();
    }
  })

  useEffect(() => {
    if (modalIntroIntersection && !modalIntroDesactivate) {
      setGeneratedDoc('test')
    } else {
      setModalIntroVisible(false)
    }
  })

  {/* Generation Bug Alert */}

  useEffect(() => {
    if (finalText === "" && doneGeneration) {
      setGenerationError(true);
    } else if (finalText !== "" && doneGeneration) {
      setModifyingStep(true);
    }
  });

  {/* Scroll to Save Button after Generation*/}

  const scrollToDoc = () => {
    if (docRef.current !== null) {
      docRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function closeModal() {
    setIsOpen(false)
  };

  function openModal() {
    setIsOpen(true)
  };

  const saveDocument = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/documents", {
        content: finalText,
      });
      setSaved(true)
      openModal();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    {/* Prompt Set Up*/}
    if (doc === "Rapport") {
      setPrompt(
        `Écrivez un rapport d'une page maximum sur le sujet ${subject} en utilisant un langage ${lang === "informel" ? "familier" : "formel"}. Structurez votre rapport ${lang === "informel" ? "avec un titre et" : ""} en sections principales, numérotées de manière claire et concise (1, 2, 3, etc.). Assurez-vous d'inclure les informations les plus importantes et les principales idées dans chaque section. Veillez à utiliser le ton et le registre appropriés pour le style de langage choisi. Concentrez-vous sur la clarté et la précision de votre écriture tout en respectant la limite d'une page maximum.`,
      );
    } else if (doc === "Lettre") {
      setPrompt(
        `Cher ChatGPT, je souhaiterais que vous rédigiez une lettre détaillée à ${dest}. La lettre devrait aborder ${subject} et fournir des informations spécifiques, des explications détaillées et des arguments convaincants. ${
          lang === "Formelle"
            ? "Veuillez utiliser un ton formel et respectueux tout au long de la lettre."
            : "Veuillez utiliser un ton familier et amical tout au long de la lettre."
        } Assurez-vous d'inclure une introduction claire, des paragraphes bien structurés et une conclusion pertinente. Merci d'avance pour votre aide et votre expertise dans la rédaction de cette lettre importante.`,
      );
    } else if (doc === "Exercice") {
      setPrompt(
        `Vous êtes un ${persoType} dans le domaine de ${domain}. Vous êtes sollicité pour résoudre un exercice sur ${theme}. Veuillez répondre aux questions suivantes en tant que ${persoType} : ${questions}. Veuillez fournir des explications détaillées et des exemples pertinents pour soutenir vos réponses.`,
      );
    } else if (doc === "Fiche de révision") {
      setPrompt(
        `Générez une fiche de révision sur ${theme} en ${domain}. Assurez-vous d'inclure des exemples clairs et des illustrations si possible. Organisez la fiche de manière à faciliter la révision, en utilisant des titres, des sous-titres et des puces pour les points clés.`,
      );
    } else if (doc === "Lettre de motivation") {
      setPrompt(
        `Cher ChatGPT, je suis à la recherche d'un emploi dans ${job}. Pouvez-vous m'aider à rédiger une lettre de motivation convaincante qui mettra en valeur mes compétences (compétences: ${competences}), mon expérience pertinente (mes expériences: ${experiences}) et ma motivation à travailler pour l'entreprise ${company} ? Mon nom est ${myName}. J'aimerais que ma lettre soit claire, concise et engageante, et qu'elle capture l'attention du recruteur dès le début. Merci d'avance pour votre aide précieuse !`,
      );
    }
    console.log(generationError);
  });


  const generateDoc = async (e) => {
    {/* Generate The Document*/}
    e.preventDefault();
    setSaved(false);
    setGeneratedDoc("");
    setGeneratedTitle("");
    setGeneratedSections([]);
    setDoneGeneration(false);
    setLoading(true);
    setLength(0);
    setFinalText("");
    setModifyingStep(false);
    setGenerationError(false);
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
      setGenerationError(true);
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const regexSelector = (fulltext) => {
      const regex1 = /Rapport[^.]*\n/;
      const regex3 = /(\d+\.\s.+)\n(.+)/g;
      const titleRegex = /^([^\n]+)/;
      console.log(fulltext);
      {/* Structuring the Document */}
      if (doc === "Rapport") {
        if (lang === "formel") {
          if (regex1.test(fulltext) === false) {
            setGeneratedTitle(fulltext);
          }
          const sections = [...fulltext.matchAll(regex3)];
          setGeneratedSections(sections);
          setLength(sections.length);
          setFinalText(fulltext);
        } else {
          if (fulltext.match(titleRegex) && fulltext.match(titleRegex)[0]) {
            setGeneratedTitle(fulltext.match(titleRegex)[0]);
          }
          const sections = [...fulltext.matchAll(regex3)];
          setGeneratedSections(sections);
          setLength(sections.length);
          setFinalText(fulltext);
        }
      }
    }

    const onParse = (event) => {
      {/* Parsing the Answer */}
      if (event.type === "event") {
        const data = event.data;
        try {
          let text = JSON.parse(data).text ?? "";
          setGeneratedDoc((prev) => {
            const fulltext = prev + text;
            regexSelector(fulltext);
            return fulltext;
          });
        } catch (e) {
          console.error(e);
          setGenerationError(true);
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
    if (!generationError) {
      scrollToDoc();
      setLoading(false);
      setDoneGeneration(true);
    } else if (generationError || finalText === "") {
      setGenerationError(true);
    }
  };

  return (
    <div className="w-full flex flex-col gap-20 text-white">
      <h2>{generateDoc}</h2>
      <div className={`flex-col items-center justify-center gap-10 ${modifyingStep ? "hidden" : "flex"}`}>
        {/* Generation Form */}
        <motion.div
            className="flex items-center gap-4 w-full text-center"
          >
          <h2 className={`${styles.heroSubText} font-bold mx-auto mb-10`}>
            Sélectionner un type de document
          </h2>
        </motion.div>
        <div
          className="sm:hidden w-full"
        >
          <DropDownDoc className="sm:hidden" type={doc} setType={(newDoc) => setDoc(newDoc)} />
        </div>
        <div className="hidden sm:block w-full">
          <TabsDocument type={doc} setType={(newDoc) => setDoc(newDoc)}/>
        </div>
        <motion.div
          className={`w-full md:w-1/2 flex justify-between ${
            doc === "Lettre" || doc === "Lettre de motivation" ? "" : "hidden"
          }`}
        >
          <h2 className={`${styles.sectionSubText} font-bold w-5/12`}>
            Expéditeur
          </h2>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Lettre de motivation" ? "hidden" : ""
            } font-bold w-5/12`}
          >
            Destinataire
          </h2>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Lettre" ? "hidden" : ""
            } font-bold w-5/12`}
          >
            Entreprise
          </h2>
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 flex justify-between ${
            doc === "Lettre" || doc === "Lettre de motivation" ? "" : "hidden"
          }`}
        >
          <textarea
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
            rows={2}
            className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
            placeholder="Votre nom"
          />
          <textarea
            value={doc === "Lettre" ? dest : company}
            onChange={
              doc === "Lettre"
                ? (e) => setDest(e.target.value)
                : (e) => setCompany(e.target.value)
            }
            rows={2}
            className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
            placeholder={`${
              doc === "Lettre" ? "Mike Tyson" : "Café Élementaire"
            }`}
          />
        </motion.div>
        <motion.div
          className={`flex items-center gap-4 w-full md:w-1/2 pt-10`}
        >
          <Image src={Cercle1} width={50} height={50} alt="step 2" className={`${
              doc === "Lettre" || doc === "Rapport" || doc ==="Fiche de révision" ? "block" : "hidden"
          }`}/>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Lettre" || doc === "Rapport" ? "lg:block" : "lg:hidden"
            } hidden font-bold`}
          >
            Sélectionner un language
          </h2>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Lettre" || doc === "Rapport" ? "lg:hidden" : "hidden"
            } font-bold`}
          >
            Language
          </h2>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Lettre de motivation" ? "" : "hidden"
            } font-bold`}
          >
            Job visé
          </h2>
          <h2
            className={`${styles.sectionSubText} ${
              doc === "Fiche de révision" ? "" : "hidden"
            } font-bold`}
          >
            Matière
          </h2>
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 ${
            doc === "Lettre" || doc === "Rapport" ? "" : "hidden"
          } pb-10`}
        >
          <RadioGroupLangType lang={lang} setLang={(newLang) => setLang(newLang)} />
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 ${
            doc === "Lettre de motivation" || doc === "Fiche de révision"
              ? ""
              : "hidden"
          }`}
        >
          <textarea
            value={job}
            onChange={(e) => setJob(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Lettre de motivation" ? "" : "hidden"
            }`}
            placeholder="Serveur"
          />
          <textarea
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Fiche de révision" ? "" : "hidden"
            }`}
            placeholder="Marketing digital"
          />
        </motion.div>
        <motion.div
          className={`flex items-center gap-4 w-full md:w-1/2 ${
            doc === "Exercice" ? "" : "hidden"
          }`}
        >
          <Image src={Cercle1} width={50} height={50} alt="step 2" />
          <h2 className={`${styles.sectionSubText} font-bold hidden lg:block`}>
            Sélectionner un type d'écriture
          </h2>
          <h2 className={`${styles.sectionSubText} font-bold lg:hidden`}>
            Type d'écriture
          </h2>
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 ${
            doc === "Exercice" ? "" : "hidden"
          }`}
        >
          <RadioGroupPersoType perso={persoType} setPerso={(newType) => setPersoType(newType)} />
        </motion.div>
        <motion.div
          className="flex items-center gap-4 w-full md:w-1/2 mt-10"
        >
          <Image src={Cercle2} width={50} height={50} alt="step 3" />
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Rapport" || doc === "Lettre" ? "" : "hidden"
            }`}
          >
            Décrivez le(s) sujet(s)
          </h2>
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Exercice" ? "" : "hidden"
            }`}
          >
            Nom de la matière
          </h2>
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Lettre de motivation" ? "" : "hidden"
            }`}
          >
            Compétences
          </h2>
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Fiche de révision" ? "" : "hidden"
            }`}
          >
            Chapitre(s)
          </h2>
        </motion.div>
        <motion.div          
          className="w-full md:w-1/2 mb-10"
          ref={modalIntroRef}
        >
          <textarea
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            rows={4}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc === "Rapport" || doc === "Lettre" ? "" : "hidden"
            }`}
            placeholder="Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique."
          />
          <textarea
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Exercice" ? "" : "hidden"
            }`}
            placeholder="Financial Reporting"
          />
          <textarea
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Fiche de révision" ? "" : "hidden"
            }`}
            placeholder="SEO et SEA"
          />
          <textarea
            value={competences}
            onChange={(e) => setCompetences(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Lettre de motivation" ? "" : "hidden"
            }`}
            placeholder="Bilingue anglais, dynamique, bonne mémoire"
          />
        </motion.div>
        <motion.div
          className={`flex items-center gap-4 w-full md:w-1/2 ${
            doc === "Lettre de motivation" || doc === "Exercice" ? "" : "hidden"
          }`}
        >
          <Image src={Cercle3} width={50} height={50} alt="step 3" />
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Exercice" ? "" : "hidden"
            }`}
          >
            Domaine de la matière
          </h2>
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Lettre de motivation" ? "" : "hidden"
            }`}
          >
            Expériences
          </h2>
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 ${
            doc === "Lettre de motivation" || doc === "Exercice" ? "" : "hidden"
          }`}
        >
          <textarea
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Exercice" ? "" : "hidden"
            }`}
            placeholder="Capital immatériel du groupe Kering"
          />
          <textarea
            value={experiences}
            onChange={(e) => setExperiences(e.target.value)}
            rows={4}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Lettre de motivation" ? "" : "hidden"
            }`}
            placeholder="barman pendant 1 mois aux fontaines (le mois dernier) et serveur au Ritz l'été 2022"
          />
        </motion.div>
        <motion.div
          className={`flex items-center gap-4 w-full md:w-1/2 ${
            doc === "Exercice" ? "" : "hidden"
          } mt-10`}
        >
          <Image src={Cercle4} width={50} height={50} alt="step 3" />
          <h2
            className={`${styles.sectionSubText} font-bold ${
              doc === "Exercice" ? "" : "hidden"
            }`}
          >
            Consignes et Questions
          </h2>
        </motion.div>
        <motion.div          
          className={`w-full md:w-1/2 ${
            doc === "Exercice" ? "" : "hidden"
          }`}
        >
          <textarea
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            rows={4}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
              doc == "Exercice" ? "" : "hidden"
            }`}
            placeholder="5.1 Qu'est-ce qui est le plus frappant lorsque l'on regarde les actifs de KERING ?
            5.2 Quelle est la valeur présentée par KERING pour son portefeuille de marques ? Cette valeur vous semble-t-elle réaliste ?
            5.3 Quels sont les autres actifs incorporels ?
            5.4 Comment les marques sont-elles comptabilisées ?
            5.5 Comment les autres actifs incorporels sont-ils comptabilisés ?
            5.6 Est-ce que le groupe KERING a une politique de recherche et développement ?"
          />
        </motion.div>
        <div className="w-full md:w-1/2 flex justify-between align-center">
          {!loading && (
            <button
              className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} ${modifyingStep ? "cta6 w-2/3" : "cta2 w-full"} flex`}
              onClick={(e) => generateDoc(e)}
            >
              {`Générer`}
              <PencilSquareIcon className={`ms-3 lg:ms-5 ${modifyingStep ? "cta6-icon" : "cta2-icon"}`} src={feather}></PencilSquareIcon>
            </button>
          )}
          {loading && (
            <button
              disabled
              className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} cta2 ${modifyingStep ? "w-2/3" : "w-full"} disabled cursor-wait`}
            >
              <Loader />
            </button>
          )}
          {modifyingStep && (
            <button
              className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} w-[80px] h-[80px] bg-tertiary rounded-md hover:bg-white transition-colors hover:text-tertiary active:bg-white active:text-tertiary shadow-button lg:w-[100px] lg:h-[100px]`}
              onClick={() => goToModifying()}
            >
              <ArrowRightCircleIcon className="h-[35px] w-[35px] lg:w-[50px] lg:h-[50px] mx-auto" />
            </button>
          )}
        </div>
      </div>
      {/* Step 2 : Modifying Text */}
      <div className={`w-full ${modifyingStep ? "" : "hidden"}`} ref={docRef}>
          <h2
            className={`${styles.heroSubText} font-bold mx-auto text-center mt-5 mb-14`}
          >
            Modifier votre {doc} 
          </h2>
        <EditTextAreaReport title={generatedTitle} setTitle={(newDoc) => setGeneratedTitle(newDoc)} setSections={(newDoc) => setGeneratedSections(newDoc)} sections={generatedSections}/>
        <div className="flex mt-20 justify-between align-center w-full md:w-1/2 mx-auto">
          <button
            className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} w-[80px] h-[80px] bg-tertiary rounded-md hover:bg-white transition-colors hover:text-tertiary active:bg-white active:text-tertiary lg:w-[100px] lg:h-[100px]`}
            onClick={() => backToGeneration()}
          >
            <ArrowLeftCircleIcon className="h-[35px] w-[35px] mx-auto lg:w-[50px] lg:h-[50px]" />
          </button>
          <button className={`cta6 ${ loading ||  saved ? "hidden" : "flex"} w-2/3 lg:h-[100px] mx-10`} onClick={saveDocument}>
            <p className={`${styles.sectionSubText} lg:${styles.heroSubTextLight}`}>Enregistrer</p>
            <ArrowDownTrayIcon className="cta6-icon ms-3"/>
          </button>
          {loading && (
            <button
              disabled
              className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} cta6 w-2/3 mx-10 disabled cursor-wait`}
            >
              <Loader />
            </button>
          )}
          <Link href="/mypdf" legacyBehavior className={`w-full flex justify-end ${saved ? "" : "hidden"}`}>
            <a target="_blank" className={`cta6 flex w-2/3 ${saved ? "" : "hidden"}`}>
              <p className={`${styles.sectionSubText}`}>Voir le PDF</p>
              <DocumentIcon className="ms-3 cta6-icon h-[35px] w-[35px] "/>
            </a>
          </Link>
        </div> 
      </div>
      <div className="h-full">
        <div className=" h-full mx-auto">
          <div className="w-full bg-transparent relative">
          </div>
            <RenderReport
              generatedTitle={generatedTitle}
              generatedSections={generatedSections}
              length={length}
            />
        </div>
      </div>
      {/* Modal Intro */}
      <ModalIntro isOpen={modalIntroVisible} closeModal={closeModalIntro}/>
      {/* Modal Saved */}
      <ModalSaved isOpen={isOpen} closeModal={closeModal} generatedTitle={generatedTitle} doc={doc} />
      {/* Loader */}
      <div
        className={`${styles.paddingX} m-0 fixed bottom-0 right-0 left-0 ${
          loading ? "" : "hidden"
        }`}
      >
        <PenLoader />
      </div>
      <div className={`${styles.paddingX} w-full md:w-1/2 mx-auto fixed bottom-10 right-0 left-0 z-50 ${generationError ? "" : "hidden"}`}>
        {/* Alert for Generation Problem */}
        <Alert status='error' variant='solid' flexDirection='row'
          alignItems='center'
          justifyContent='center' className="rounded-md">
          <AlertIcon />
          Badaboum. Petit bug, c'est en développement les gars...
          <CloseButton onClick={() => setGenerationError(false)}/>
        </Alert>
      </div>
    </div>
  );
};

export default SectionWrapper(Generator, "#id");
