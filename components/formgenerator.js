import { m } from "framer-motion";
import { staggerContainer, fadeIn } from '../utils/motion';
import dynamic from "next/dynamic";
const DropDownDoc = dynamic(() => import("./forms/dropdowndoc"));
const TabsDocument = dynamic(() => import("./forms/tabsdocument"));
const ReportForm = dynamic(() => import("./forms/reportform"));
const EmailForm = dynamic(() => import("./forms/emailform"));
const MessageForm = dynamic(() => import("./forms/messageform"));
const CoverLetterForm = dynamic(() => import("./forms/coverletterform"));




const FormGenerator = ({subject, setSubject, doc, setDoc, lang, setLang, dest, setDest, persoType, setPersoType, domain, setDomain, theme, setTheme, questions, setQuestions, job, setJob, competences, setCompetences, experiences, setExperiences, company, setCompany, myName, setMyName, emotion, setEmotion, language, setLanguage, mailType, setMailType, messageLength, setMessageLength}) => {
    return (
        <div className="w-full">
            <div
            className="sm:hidden w-full"
            >
                <DropDownDoc className="sm:hidden" type={doc} setType={(newDoc) => setDoc(newDoc)} />
            </div>
            <m.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Rapport", amount: 0.25 }} className="hidden sm:block w-full pb-10">
                <TabsDocument type={doc} setType={(newDoc) => setDoc(newDoc)}/>
            </m.div>
            <section className={`w-full ${doc === "Rapport" ? "" : "hidden"}`}>
                <ReportForm subject={subject} setSubject={(newSubject) => setSubject(newSubject)} lang={lang} setLang={(newLang) => setLang(newLang)}/>
            </section>
            <m.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Email", amount: 0.25 }} className={`w-full ${doc === "Email" ? "" : "hidden"}`}>
                <EmailForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} mailType={mailType} setMailType={(newMailType) => setMailType(newMailType)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)} />
            </m.section>
            <m.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Message", amount: 0.25 }} className={`w-full ${doc === 'Message' ? "" : "hidden"}`}>
                <MessageForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} messageLength={messageLength} setMessageLength={(newLength) => setMessageLength(newLength)} subject={subject} setSubject={(newSubject) => setSubject(newSubject)}/>
            </m.section>
            <m.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true && doc === "Message", amount: 0.25 }} className={`w-full ${doc === 'Lettre de motivation' ? "" : "hidden"}`}>
                <CoverLetterForm myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} job={job} setJob={(newJob) => setJob(newJob)} competences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={((newExperiences) => setExperiences(newExperiences))} />
            </m.div>
        </div>
    )
}

export default FormGenerator;
