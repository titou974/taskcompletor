"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, forwardRef } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../components/sectionwrapper";
import styles from "../components/style";
import PenLoader from "../components/penloader";
import { PencilSquareIcon, CheckCircleIcon, DocumentIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import feather from "../public/img/feather.png"
import Loader from "../components/loader";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import RenderReport from "../components/pdf/pdfreport";
import axios from "axios";
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import ModalIntro from "../components/modalintro";
import ModalSaved from "../components/modalsaved";
import { ShareIcon, BackspaceIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import EditTextAreaReport from "../components/editableinputs";
import {
  Alert,
  AlertIcon,
  CloseButton
} from '@chakra-ui/react';
import FormGenerator from "../components/formgenerator";
import Navbar from "../components/navbar";
import Generator from "../components/generator";


const Generate = ({onIntersection}) => {
  const [loading, setLoading] = useState(false);
  {/* States for form */}
  const [subject, setSubject] = useState("");
  const [doc, setDoc] = useState("Exercice");
  const [lang, setLang] = useState("formel");
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

  const [prompt, setPrompt] = useState("");

  const [generatedTitle, setGeneratedTitle] = useState("");
  const [generatedDoc, setGeneratedDoc] = useState("");
  const [generatedSections, setGeneratedSections] = useState([]);
  const [length, setLength] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [saved, setSaved] = useState(false)
  const [generatorIntersection, setGeneratorIntersection] = useState(false);
  const [modalIntroVisible, setModalIntroVisible] = useState(false);
  const [modalIntroDesactivate, setModalIntroDesactivate] = useState(false);
  const [modifyingStep, setModifyingStep] = useState(false);
  const [generationError, setGenerationError] = useState(false);
  const [doneGeneration, setDoneGeneration] = useState(false);
  const [navTwoStep, setNavTwoStep] = useState(false); 

  let [isOpen, setIsOpen] = useState(false);
  const docRef = useRef();
  const modalIntroRef = useRef();

  const closeModalIntro = () => {
    setModalIntroDesactivate(true);
  }
  
  const backToGeneration = () => {
    setNavTwoStep(false);
  }

  const goToModifying = () => {
    setNavTwoStep(true);
  }

  {/* Navbar Stepper Apparition on Intersection with Generator*/}


  {/* ClassList adding for navbar display*/}

  useEffect(() => {
    if (generatorIntersection) {
      document.documentElement.classList.add("stepper")
    } else {
      document.documentElement.classList.remove("stepper")
    }
    
  })

  {/* Generation Bug Alert  && nav between steps*/}

  useEffect(() => {
    if (finalText === "" && doneGeneration) {
      setGenerationError(true);
    } else if (finalText !== "" && doneGeneration && !generationError) {
      setModifyingStep(true);
    } else if (finalText === "" || !doneGeneration) {
      setModifyingStep(false);
  }
});

  {/* Scroll to Form */}


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
      goToModifying();
    } else if (generationError || finalText === "") {
      setGenerationError(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.paddingX} py-40`}>
        <div className="w-full flex flex-col gap-20 text-white bg-primary">
          <div className={`flex-col items-center justify-center gap-10 ${navTwoStep ? "hidden" : "flex"}`}>
            {/* Generation Form */}
            <FormGenerator subject={subject} setSubject={(newSubject) => setSubject(newSubject)} doc={doc} setDoc={(newDoc) => setDoc(newDoc)} lang={lang} setLang={(newLang) => setLang(newLang)} dest={dest} setDest={(newDest) => setDest(newDest)} persoType={persoType} setPersoType={(newPersoType) => setPersoType(newPersoType)} domain={domain} setDomain={(newDomain) => setDomain(newDomain)} theme={theme} setTheme={(newTheme) => setTheme(newTheme)} questions={questions} setQuestions={(newQuestions) => setQuestions(newQuestions)} job={job} setJob={(newJob) => setJob(newJob)} compentences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={(experiences) => setExperiences(experiences)} company={company} setCompany={(newCompany) => setCompany(newCompany)} myName={myName} setMyName={(newName) => setMyName(newName)} />
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
          <div className={`w-full ${navTwoStep ? "" : "hidden"}`} ref={docRef}>
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
              <button className={`cta6 ${ loading || saved ? "hidden" : "flex"} w-2/3 lg:h-[100px] mx-10`} onClick={saveDocument}>
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
      </div>
    </>
  );
};

export default Generate;
