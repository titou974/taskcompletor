"use client";
import dynamic from "next/dynamic";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useRef, useState, useEffect } from "react";
import styles from "../components/style";
import { PencilSquareIcon, DocumentIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import {
  createParser,
} from "eventsource-parser";
import axios from "axios";
import Link from 'next/link';
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { isMobile } from "react-device-detect";
import { staggerContainer } from "../utils/motion";
const ModalStepTwoPdf = dynamic(() => import("../components/modals/modalmodifiedpdf"));
const ModalStepTwo = dynamic(() => import("../components/modals/modalmodifiedstep"));
const EditTextMail = dynamic(() => import("../components/forms/edittextmail"));
const EditTextMessage = dynamic(() => import("../components/forms/edittextmessage"));
const EditTextAreaReport = dynamic(() => import("../components/forms/editableinputs"));
const ModalSaved = dynamic(() => import("../components/modals/modalsaved"));
const ModalIntro = dynamic(() => import("../components/modals/modalintro"));
const MailTemplate = dynamic(() => import("../components/doctemplates/generationtemplates/mailtemplate"));
const MessageTemplate = dynamic(() => import("../components/doctemplates/generationtemplates/messagetemplate"));
const Loader = dynamic(() => import("../components/loaders/loader"));
const PenLoader = dynamic(() => import("../components/loaders/penloader"));
const FormGenerator = dynamic(() => import("../components/formgenerator"));
const ReportTemplate = dynamic(() => import("../components/doctemplates/generationtemplates/pdfreport"));
const Navbar = dynamic(() => import("../components/navbar"));


const Generator = () => {
  const [loading, setLoading] = useState(false);
  {/* States for form */}
  const [subject, setSubject] = useState("");
  const [doc, setDoc] = useState("Rapport");
  const [lang, setLang] = useState("");
  const [dest, setDest] = useState("");
  const [persoType, setPersoType] = useState("élève");
  const [domain, setDomain] = useState("");
  const [theme, setTheme] = useState("");
  const [questions, setQuestions] = useState("");
  const [job, setJob] = useState("");
  const [competences, setCompetences] = useState("");
  const [experiences, setExperiences] = useState("");
  const [myName, setMyName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatedDoc, setGeneratedDoc] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [showGeneratedDoc, setShowGeneratedDoc] = useState(false);
  const [generatedSections, setGeneratedSections] = useState([]);
  const [generatedSectionsTexts,  setGeneratedSectionsTexts] = useState([]);
  const [generatedSectionsTitles, setGeneratedSectionsTitles]  = useState([]);
  const [length, setLength] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [saved, setSaved] = useState(false)
  const [generatorIntersection, setGeneratorIntersection] = useState(false);
  const [modalIntroVisible, setModalIntroVisible] = useState(false);
  const [modifyingStep, setModifyingStep] = useState(false);
  const [generationError, setGenerationError] = useState(false);
  const [doneGeneration, setDoneGeneration] = useState(false);
  const [navTwoStep, setNavTwoStep] = useState(false);
  const [emotion, setEmotion] = useState("");
  const [mailType, setMailType] = useState("");
  const [language, setLanguage] = useState("");
  const [messageLength, setMessageLength] = useState("");
  const [modalModifiedStepOpen, setModalModifiedStepOpen] = useState(false);
  const [modalModifiedPdfOpen, setModalModifiedPdfOpen] = useState(false);
  const [developSubject, setDevelopSubject] = useState(false);
  const [hoverNavbar, setHoverNavbar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  let [isOpen, setIsOpen] = useState(false);
  const docRef = useRef();
  const generateDocRef = useRef(null);

  const backToGeneration = () => {
    setNavTwoStep(false);
  }

  const goToModifying = () => {
    setNavTwoStep(true);
  }

  const closeModifiedIntro = () => {
    setModalModifiedStepOpen(false);
    scrollToDoc();
  }

  const closeModalModifiedPdf = () => {
    setModalModifiedPdfOpen(false);
    scrollToDoc();
  }

  {/* Modal open for more detailed on subject */}
  useEffect(() => {
    const words = subject.split(/\s+/)
    const wordsCount = words.length
    if (wordsCount < 4) {
      setDevelopSubject(true)
    } else {
      setDevelopSubject(false)
    }
  }, [subject])

  {/* Generation Bug Alert*/}





  {/* Scroll to Save Button after Generation*/}

  const scrollToDoc = () => {
    if (docRef.current !== null) {
      docRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.log("error scrolling after generation")
    }
  };

  const scrollToGenerate = () => {
    if (generateDocRef.current !== null) {
      generateDocRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

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
        type: doc,
        title: generatedTitle,
        subtitles: generatedSectionsTitles,
        sections: generatedSectionsTexts,
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
    } else if (doc === "Email") {
      setPrompt(`Peux-tu rédiger un courrier électronique qui commence par l'objet, suivi par le texte, et la signature (en mettant uniquement le nom de l'expéditeur), s'il te plaît ? (tu dois strictement suivre cette structure.) Tiens toi absolument à une limite de 150 mots. J'aimerais que tu inclues les informations suivantes :

      Nom de l'expéditeur (à mettre en signature du mail) : ${myName}
      Nom du destinataire : ${dest}
      Type de mail et sa forme (pour l'école, une entreprise, administratif ou personnel) :  ${mailType}
      Langue : ${language}
      Sujet du mail : ${subject}
      Merci beaucoup !`)
    } else if (doc === "Lettre de motivation") {
      setPrompt(
        `Cher ChatGPT, je suis à la recherche d'un emploi dans ${job}. Pouvez-vous m'aider à rédiger une lettre de motivation convaincante qui mettra en valeur mes compétences (compétences: ${competences}), mon expérience pertinente (mes expériences: ${experiences}) et ma motivation à travailler pour l'entreprise ${dest} ? Mon nom est ${myName}. J'aimerais que ma lettre soit en ${language}, claire, concise et engageante, et qu'elle capture l'attention du recruteur dès le début. Merci d'avance pour votre aide précieuse !`,
      );
    } else if (doc === "Message") {
      setPrompt(`Peux-tu créer un message en gardant uniquement le contenu, s'il te plaît ? Voici les détails :

      Expéditeur : ${myName}
      Destinataire : ${dest}
      Sujet : ${subject}
      Langue : ${language}
      Taille du message (court, moyen, long) : ${messageLength === "court" && ("respecte une limite de 50 mots")} ${messageLength === "moyen" && ("respecte une limite de 100 mots")} ${messageLength === "long" && ("respecte une limite de 180 mots")}
      Émotion : ${emotion}`)
    }
  }, [subject, lang, myName, dest, language, mailType, job, competences, experiences, messageLength, emotion]);

  {/* Separate Sectionstitles and Sections */}

  useEffect(() => {
    const extractedTitles = [];
    const extractedContent = [];

    generatedSections.forEach((section) => {
      if (section.length >= 2) {
        extractedTitles.push(section[1]); // Index 1 contains the title
      }
      if (section.length >= 3) {
        extractedContent.push(section[2]); // Index 2 contains the content
      }
    })
    setGeneratedSectionsTitles(extractedTitles);
    setGeneratedSectionsTexts(extractedContent);
  }, [generatedSections])

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({target, isIntersecting}) => {
        if (target === generateDocRef.current) {
          setShowDownload(isIntersecting)
        }
      });
    },
    )


    if (generateDocRef.current) {
      observer.observe(generateDocRef.current);
    }

    return () => {
      if (generateDocRef.current) {
        observer.disconnect();
      }
    };
  }, [loading]);


  const generateDoc = async (e) => {
    {/* Generate The Document*/}
    e.preventDefault();
    setModalIntroVisible(false)
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
    if (doc === "Rapport") {
      setShowGeneratedDoc(true)
      setShowMessage(false)
      setShowEmail(false)
    } else if (doc === "Message") {
      setShowMessage(true)
      setShowGeneratedDoc(false)
      setShowEmail(false)
    } else if (doc === "Email") {
      setShowEmail(true)
      setShowMessage(false)
      setShowGeneratedDoc(false)
    }
    scrollToGenerate();
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
      {/* Regex for Report */}
      const regex1 = /Rapport[^.]*\n/;
      const regex3 = /(\d+\.\s.+)\n(.+)/g;
      const titleRegex = /^([^\n]+)/;

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
      } else if (doc === "Email" || doc === "Message") {
        setFinalText(fulltext);
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
    if (!isMobile) {
      { doc === "Message" || doc === "Email" ? setModalModifiedStepOpen(true) : setModalModifiedPdfOpen(true)};
    }
    setLoading(false);
    setDoneGeneration(true);
    goToModifying();
    scrollToDoc();
    setGenerationError(false);
    // if (finalText !== "") {
    //   setLoading(false);
    //   setDoneGeneration(true);
    //   goToModifying();
    //   scrollToDoc();
    //   setGenerationError(false);
    // }
  };

  return (
      <div className="w-full">
        <Navbar />
        <div className={`${styles.paddingX} pt-40 max-w-7xl mx-auto relative w-full flex flex-col gap-20 text-white bg-primary`} ref={docRef}>
          <div className={`flex-col items-center justify-center gap-10 flex`}>
          {/* Generation Form */}
            <FormGenerator subject={subject} setSubject={(newSubject) => setSubject(newSubject)} doc={doc} setDoc={(newDoc) => setDoc(newDoc)} lang={lang} setLang={(newLang) => setLang(newLang)} dest={dest} setDest={(newDest) => setDest(newDest)} persoType={persoType} setPersoType={(newPersoType) => setPersoType(newPersoType)} domain={domain} setDomain={(newDomain) => setDomain(newDomain)} theme={theme} setTheme={(newTheme) => setTheme(newTheme)} questions={questions} setQuestions={(newQuestions) => setQuestions(newQuestions)} job={job} setJob={(newJob) => setJob(newJob)} competences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={(experiences) => setExperiences(experiences)} myName={myName} setMyName={(newName) => setMyName(newName)} emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} mailType={mailType} setMailType={(newMailType) => setMailType(newMailType)} messageLength={messageLength} setMessageLength={(newLength) => setMessageLength(newLength)}/>
            <div className="w-full md:w-1/2 flex justify-between align-center pt-16">
              {!loading && (
                <button
                  className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} cta1 w-full flex shadow-xl`}
                  onClick={(e) => developSubject && !isMobile ? setModalIntroVisible(true) : generateDoc(e)}
                  onMouseEnter={() => setHoverNavbar(true)}
                  onMouseLeave={() => setHoverNavbar(false)}
                >
                  {`Générer`}
                  <PencilSquareIcon className={`w-[40px] md:w-[50px]`}></PencilSquareIcon>
                </button>
              )}
              {loading && (
                <button
                  disabled
                  className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} cta1 ${modifyingStep ? "w-2/3" : "w-full"} disabled cursor-wait`}
                >
                  <Loader />
                </button>
              )}
            </div>
          </div>

          {/* Step 2 : Modifying Text */}
          <AnimatePresence>
            {
              navTwoStep && (
                <m.div
                  className={`w-full`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, duration: 2 }}
                  exit={{opacity: 0}} >
                  {
                    doc === "Rapport" && (
                      <m.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Rapport", amount: 0.25 }} className={`w-full hidden`}>
                        <EditTextAreaReport title={generatedTitle} setTitle={(newDoc) => setGeneratedTitle(newDoc)} setSections={(newDoc) => setGeneratedSections(newDoc)} sections={generatedSections}/>
                      </m.div>
                    )
                  }
                  {
                    doc === "Message" && (
                      <m.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Message", amount: 0.25 }} className={`w-full hidden`}>
                        <EditTextMessage message={finalText} setMessage={(newMessage) => setFinalText(newMessage)} />
                      </m.div>
                    )
                  }
                  {
                    doc === "Email" && (
                      <m.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Email", amount: 0.25 }} className={`w-full hidden`}>
                        <EditTextMail mail={finalText} setMail={(newMail) => setFinalText(newMail)} />
                      </m.div>
                    )
                  }
                  { (showDownload && doneGeneration) && (
                    <m.div initial="hidden" variants={fadeIn("right", "spring", 0.25, 0.75)} animate={"show"} exit="hidden" className={`flex justify-center align-center w-full mx-auto fixed bottom-8 left-0 right-0 z-30 ${styles.paddingX} max-w-7xl`}>
                      {
                        ((!loading && !saved) && (doc === "Rapport" || doc === "Lettre de motivation")) && (
                          <button className={`cta2 w-full mx-auto md:w-1/2`} onClick={saveDocument}>
                            <p className={`${styles.sectionSubText} lg:${styles.heroSubTextLight}`}>Enregistrer</p>
                            <ArrowDownTrayIcon className="w-[35px] md:ms-3"/>
                          </button>
                        )
                      }
                      {loading && (
                        <button
                          disabled
                          className={`${styles.sectionSubText} lg:${styles.heroSubTextLight} cta2 w-full mx-auto md:w-1/2 disabled cursor-wait`}
                        >
                          <Loader />
                        </button>
                      )}
                      {
                        (saved && (doc === "Rapport" || doc === "Lettre de motivation")) && (
                          <Link href="/mypdf" legacyBehavior className={`w-full flex justify-end`}>
                            <a target="_blank" className={`cta2 w-full mx-auto md:w-1/2 flex`}>
                              <p className={`${styles.sectionSubText}`}>Voir le PDF</p>
                              <DocumentIcon className="h-[25px] w-[25px]"/>
                            </a>
                          </Link>
                        )
                      }
                    </m.div>
                  )}
                </m.div>
              )
            }
          </AnimatePresence>

          <div className="h-full pb-40" ref={generateDocRef}>
            {
              (showGeneratedDoc && doc === "Rapport") && (
                <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`h-full mx-auto`}>
                  <ReportTemplate
                    generatedTitle={generatedTitle}
                    generatedSections={generatedSections}
                    length={length}
                  />
                </m.div>
              )
            }
            {
              (showEmail && doc === "Email") && (
                <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`h-full mx-auto`}>
                  <MailTemplate fullmail={finalText} name={myName} language={language} />
                </m.div>
              )
            }
            {
              (showMessage && (doc === "Message")) && (
                <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`h-full mx-auto`}>
                  <MessageTemplate messageText={finalText} dest={dest} />
                </m.div>
              )
            }
          </div>
          {/* Modal Intro */}
          <ModalIntro isOpen={modalIntroVisible} closeModal={() => setModalIntroVisible(false)} generateDoc={(e) => generateDoc(e)} />
          {/* Modal Saved */}
          <ModalSaved isOpen={isOpen} closeModal={closeModal} generatedTitle={generatedTitle} doc={doc} />
          {/* Modal Step Two */}
          <ModalStepTwo doc={doc} isOpen={modalModifiedStepOpen} closeModal={closeModifiedIntro} dest={dest} />
          <ModalStepTwoPdf doc={doc} isOpen={modalModifiedPdfOpen} closeModal={closeModalModifiedPdf} />
          {/* Loader */}
          {
            loading && (
              <div
              className={`${styles.paddingX} m-0 fixed bottom-0 right-0 left-0`}
              >
                <PenLoader />
              </div>
            )
          }
          {/* Alert Generation Error */}
          <AnimatePresence>
            {generationError && (
              <m.div variants={fadeIn("right", "spring", 0.25, 0.75)} animate={"show"} exit="hidden" className={`fixed  left-0 right-0 bottom-10 mx-auto w-10/12 md:w-1/2 2xl:w-1/3 z-50  px-4 py-4 mt-2 bg-orange-400 rounded-md font-bold flex align-center justify-center`} >
                <m.span role="img" aria-label="rapport" variants={fadeIn("right", "spring", 0.25, 0.75)} animate={"show"} exit="hidden" className={"pe-5"}>📢</m.span>
                <m.p variants={fadeIn("right", "spring", 0.25, 0.75)} animate={"show"} exit="hidden">Task Completor est en panne. Contact du créateur en cours...</m.p>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
  );
};

export default Generator;
