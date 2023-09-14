import DropDownDoc from "./dropdowndoc";
import TabsDocument from "./tabsdocument";
import TabsEmotion from "./tabsemotion";
import RadioGroupLangType from "./radiogrouplangtype";
import RadioGroupPersoType from "./radiogrouppersotype";
import styles from "./style";
import Image from "next/image";
import Cercle1 from "../public/img/icon1white.svg";
import Cercle2 from "../public/img/icon2white.svg";
import Cercle3 from "../public/img/icon3white.svg";
import Cercle4 from "../public/img/icon4white.svg";
import { motion } from "framer-motion";
import ReportForm from "./forminputs/reportform";
import EmailForm from "./forminputs/emailform";
import MessageForm from "./forminputs/messageform";
import CoverLetterForm from "./forminputs/coverletterform";

const FormGenerator = ({subject, setSubject, doc, setDoc, lang, setLang, dest, setDest, persoType, setPersoType, domain, setDomain, theme, setTheme, questions, setQuestions, job, setJob, competences, setCompetences, experiences, setExperiences, company, setCompany, myName, setMyName, emotion, setEmotion, language, setLanguage, mailType, setMailType, messageLength, setMessageLength}) => {
    return (
        <>
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
            <div className={`w-full ${doc === "Rapport" ? "" : "hidden"}`}>
                <ReportForm subject={subject} setSubject={(newSubject) => setSubject(newSubject)} lang={lang} setLang={(newLang) => setLang(newLang)}/>
            </div>
            <div className={`w-full ${doc === "Email" ? "" : "hidden"}`}>
                <EmailForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} mailType={mailType} setMailType={(newMailType) => setMailType(newMailType)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)} />
            </div>
            <div className={`w-full ${doc === 'Message' ? "" : "hidden"}`}>
                <MessageForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} messageLength={messageLength} setMessageLength={(newLength) => setMessageLength(newLength)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)}/>
            </div>
            <div className={`w-full ${doc === 'Lettre de motivation' ? "" : "hidden"}`}>
                <CoverLetterForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} job={job} setJob={(newJob) => setJob(newJob)} competences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={((newExperiences) => setExperiences(newExperiences))} />
            </div>
        </>
    )
}

export default FormGenerator;