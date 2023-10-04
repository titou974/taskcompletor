import dynamic from "next/dynamic";
import MessageForm from "./forms/messageform";
import EmailForm from "./forms/emailform";
import CoverLetterForm from "./forms/coverletterform";
import TabsDocument from "./forms/tabsdocument";
import DropDownDoc from "./forms/dropdowndoc";
import ReportForm from "./forms/reportform";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../utils/motion";




const FormGenerator = ({schoolName, setSchoolName, isCompetenceGenerated, generateCompetences, subject, setSubject, doc, setDoc, lang, setLang, dest, setDest, job, setJob, competences, setCompetences, experiences, setExperiences, companyName, setCompanyName, myName, setMyName, emotion, setEmotion, language, setLanguage, mailType, setMailType, messageLength, setMessageLength, contractName, setContractName, graduate, setGraduate, graduation, setGraduation, levelOfStudy, setLevelOfStudy, domainOfStudy, setDomainOfStudy, hobbies, setHobbies, contactDetails, setContactDetails, mailAddress, setMailAddress, phoneNumber, setPhoneNumber}) => {
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
              { doc === "Présentation" && (
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
                  <CoverLetterForm schoolName={schoolName} setSchoolName={(e) => setSchoolName(e)} graduation={graduation} setGraduation={(e) => setGraduation(e)} isGenerate={isCompetenceGenerated} generateCompetences={(e) => generateCompetences(e)} myName={myName} setMyName={(newName) => setMyName(newName)} dest={dest} setDest={(newDest) => setDest(newDest)} language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} job={job} setJob={(newJob) => setJob(newJob)} competences={competences} setCompetences={(newCompetences) => setCompetences(newCompetences)} experiences={experiences} setExperiences={((newExperiences) => setExperiences(newExperiences))} contractName={contractName} setContractName={(newContractName) => setContractName(newContractName)} companyName={companyName} setCompanyName={(newCompanyName) => setCompanyName(newCompanyName)} graduate={graduate} setGraduate={(newStatus) => setGraduate(newStatus)} levelOfStudy={levelOfStudy} setLevelOfStudy={(newLevelOfStudy) => setLevelOfStudy(newLevelOfStudy)} domainOfStudy={domainOfStudy} setDomainOfStudy={(newDomainOfStudy) => setDomainOfStudy(newDomainOfStudy)} hobbies={hobbies} setHobbies={(newHobbies) => setHobbies(newHobbies)} contactDetails={contactDetails} setContactDetails={(newContactDetails) => setContactDetails(newContactDetails)} mailAddress={mailAddress} setMailAddress={(newMailAddress) =>  setMailAddress(newMailAddress)} phoneNumber={phoneNumber} setPhoneNumber={(newPhoneNumber) => setPhoneNumber(newPhoneNumber)} />
                </m.div>
              )}
        </div>
    )
}

export default FormGenerator;
