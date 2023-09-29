import dynamic from "next/dynamic";
import MessageForm from "./forms/messageform";
import EmailForm from "./forms/emailform";
import CoverLetterForm from "./forms/coverletterform";
import TabsDocument from "./forms/tabsdocument";
import DropDownDoc from "./forms/dropdowndoc";
import ReportForm from "./forms/reportform";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../utils/motion";




const FormGenerator = ({subject, setSubject, doc, setDoc, lang, setLang, dest, setDest, job, setJob, competences, setCompetences, experiences, setExperiences, company, setCompany, myName, setMyName, emotion, setEmotion, language, setLanguage, mailType, setMailType, messageLength, setMessageLength}) => {
    return (
        <div className="w-full">
            <div
            className="sm:hidden w-full"
            >
              <DropDownDoc className="sm:hidden" type={doc} setType={(newDoc) => setDoc(newDoc)} />
            </div>
            <div  className="hidden sm:block w-full pb-10">
              <TabsDocument type={doc} setType={(newDoc) => setDoc(newDoc)}/>
            </div>
              { doc === "Rapport" && (
                <m.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn("right", "spring", 0.5, 0.75)} className={`w-full`}>
                  <ReportForm subject={subject} setSubject={(newSubject) => setSubject(newSubject)} lang={lang} setLang={(newLang) => setLang(newLang)}/>
                </m.div>
              )}
              { doc === "Email" && (
                <m.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn("right", "spring", 0.5, 0.75)} className={`w-full`}>
                  <EmailForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} mailType={mailType} setMailType={(newMailType) => setMailType(newMailType)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)} />
                </m.div>
              )}
              { doc === "Message" && (
                <m.div className={`w-full`} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn("right", "spring", 0.5, 0.75)}>
                  <MessageForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} messageLength={messageLength} setMessageLength={(newLength) => setMessageLength(newLength)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)}/>
                </m.div>
              )}
              { doc === "Lettre de motivation" && (
                <m.div className={`w-full`} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn("right", "spring", 0.5, 0.75)}>
                  <CoverLetterForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} job={job} setJob={(newJob) => setJob(newJob)} competences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={((newExperiences) => setExperiences(newExperiences))} />
                </m.div>
              )}
        </div>
    )
}

export default FormGenerator;
