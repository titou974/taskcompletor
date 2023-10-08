import styles from "../style";
import IconNumber from "../iconnumber";
import { m } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import style from "../../css/InputName.module.css";
import { useEffect, useState } from "react";
import RadioGroupGraduateAnswers from "./inputs/radiogroupgraduate";
import RadioGroupContracts from "./inputs/radiogroupcontract";
import AutoSuggestionInput from "./inputs/autosuggestioninput";
import { domaines_etudes, abreviations_etudes, job_list, passions } from "../../utils/constants";
import AddCompetencesInput from "./inputs/addcompetences";
import AddInput from "./inputs/addinput";



const CoverLetterForm = ({isGenerate, generateCompetences, myName, setMyName, dest, setDest, language, setLanguage, job, setJob, competences, setCompetences, experiences, setExperiences, contractName, setContractName, graduate, setGraduate, graduation, setGraduation, levelOfStudy, setLevelOfStudy, domainOfStudy, setDomainOfStudy, hobbies, setHobbies, contactDetails, setContactDetails, mailAddress, setMailAddress, phoneNumber, setPhoneNumber, companyName, setCompanyName, schoolName, setSchoolName }) => {

  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedDest, setTypedDest] = useState("");
  const [typedJob, setTypedJob] = useState("");
  const namePlaceholder = "Prénom et nom";
  const destPlaceholder = "Entreprise";
  const jobPlaceholder = "Job visé";
  const schoolNamePlaceholder = "Nom de votre école";
  const domainNamePlaceholder = "Domaine d'études";
  const levelOfStudyPlaceholder = "Niveau d'études";
  const delay = 50;
  const startDelayName = 2000;
  const startDelayDest = 3000;


  // const HandleColorChangeTextInput = () => {
  //   if (1 < subject.split(/\s+/).length && subject.split(/\s+/).length < 4) {
  //     setColorIcon('orange');
  //     setTextLengthAlert(true)
  //   } else if (subject.split(/\s+/).length > 3) {
  //     setColorIcon('green');
  //     setTextLengthAlert(false)
  //   } else if (subject === "")  {
  //     setColorIcon('white')
  //     setTextLengthAlert(false)
  //   }
  // }

  // useEffect(() => {
  //   HandleColorChangeTextInput();
  // })

  useEffect(() => {
    let indexName = 0;
    let intervalName;
    let indexDest = 0;
    let intervalDest;

    const startTypingName = () => {
        intervalName = setInterval(() => {
        if (indexName < namePlaceholder.length) {
          setTypedName((prev) => prev + namePlaceholder.charAt(indexName));
          indexName++;
        } else {
          clearInterval(intervalName);
        }
      }, delay);
    }

    const startTypingDest = () => {
      intervalDest = setInterval(() => {
      if (indexDest < destPlaceholder.length) {
        setTypedDest((prev) => prev + destPlaceholder.charAt(indexDest));
        indexDest++;
      } else {
        clearInterval(intervalDest);
      }
    }, delay);
  }


    const timeoutName = setTimeout(startTypingName, startDelayName);
    const timeoutDest = setTimeout(startTypingDest, startDelayDest);

    return () => {
      clearInterval(intervalName);
      clearTimeout(timeoutName);
      clearInterval(intervalDest);
      clearTimeout(timeoutDest);
    };
  }, [delay, startDelayName, startDelayDest]);

  return (
        <div className="w-full md:w-1/2 mx-auto">
          <div className="w-full flex justify-between gap-5 my-10">
            <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={style.inputClassic}>
              <input required type="text" onChange={(e) => setMyName(e.target.value)} className={`${style.inputClassic} w-5/12 rounded-md transition-all`}/>
              <span className={style.placeholderInputClassic}>{typedName}</span>
            </m.label>
            <m.label variants={fadeIn("right", "spring", 0.75, 0.75)} className={style.inputClassic}>
              <input required type="text" onChange={(e) => setCompanyName(e.target.value)} className={`${style.inputClassic} w-5/12 rounded-md transition-all`}/>
              <span className={style.placeholderInputClassic}>{typedDest}</span>
            </m.label>
          </div>
          <m.div variants={textVariant(1)} className={`flex items-center gap-4 w-full pt-14`}>
            <IconNumber color={graduate !== null ? "green" : "white"} number={1} />
              <h2
              className={`${styles.sectionSubText} font-bold`}
              >
                  Êtes-vous étudiant ?
              </h2>
          </m.div>
          <m.div variants={fadeIn("right", "spring", 1.25, 0.75)}>
            <RadioGroupGraduateAnswers graduate={graduate} setGraduate={(e) => setGraduate(e)} />
          </m.div>
          <m.div variants={textVariant(1)}  className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber color={contractName !== "" ? "green" : "white"} number={2} />
              <h2
              className={`${styles.sectionSubText} font-bold`}
              >
                  Vous voulez faire :
              </h2>
          </m.div>
          <m.div
                  variants={fadeIn("right", "spring", 1.25, 0.75)}
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  rows={1}
                  className={`w-full pb-14`}
                  placeholder="M&A Analyst"
          >
            <RadioGroupContracts contractName={contractName} setContractName={(newName) => setContractName(newName)}/>
          </m.div>
          <AutoSuggestionInput input={job} setInput={(newInput) => setJob(newInput)} typedPlaceholder={jobPlaceholder} dataset={job_list}/>
          <div className={`flex items-center w-full pt-20 pb-14 gap-5`}>
            <IconNumber color={companyName !== "" ? "green" : "white"} number={3} className="min-w-[40px]" />
            <h2
            className={`${styles.sectionSubText} font-bold`}
            >
                Vos études :
            </h2>
          </div>
          <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.inputClassic} w-full py-5`} >
            <input required type="text" onChange={(e) => setSchoolName(e.target.value)} className={`${style.inputClassic} w-full rounded-md transition-all`}/>
            <span className={`${style.placeholderInputClassic}`}>{schoolNamePlaceholder}</span>
          </m.label>
          <div className="w-full py-14">
            <AutoSuggestionInput input={domainOfStudy} setInput={(newInput) => setDomainOfStudy(newInput)} dataset={domaines_etudes} typedPlaceholder={domainNamePlaceholder} />
          </div>
          <div className="w-full pb-14">
            <AutoSuggestionInput input={levelOfStudy} setInput={(newInput) => setLevelOfStudy(newInput)} dataset={abreviations_etudes} typedPlaceholder={levelOfStudyPlaceholder} />
          </div>
          <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.inputClassic} w-full py-5`} >
            <input required type="text" onChange={(e) => setGraduation(e.target.value)} className={`${style.inputClassic} w-full rounded-md transition-all`}/>
            <span className={`${style.placeholderInputClassic}`}>{`Diplôme ${graduate ? "obtenu" : "visé"}`}</span>
          </m.label>
          <div className={`flex items-center w-full pt-20 pb-14 gap-5`}>
            <div className="min-w-[45px]">
              <IconNumber color={competences.length > 0 ? "green" : "white"} number={4} className="min-w-[40px]" />
            </div>
            <h2
            className={`${styles.sectionSubText} font-bold`}
            >
                Ajoutez vos compétences :
            </h2>
          </div>
          <AddCompetencesInput input={competences} setInput={(newInput) => setCompetences(newInput)} job={job} generateCompetences={(e) => generateCompetences(e)} isGenerate={isGenerate} />
          <div className={`flex items-center w-full pt-20 pb-14 gap-5`}>
            <div className="min-w-[45px]">
              <IconNumber color={hobbies.length > 0 ? "green" : "white"} number={5} className="min-w-[40px]" />
            </div>
            <h2
            className={`${styles.sectionSubText} font-bold`}
            >
                Ajoutez vos passions :
            </h2>
          </div>
          <AddInput input={hobbies} setInput={(newInput) => setHobbies(newInput)} dataset={passions} placeholder={"Passions"} />
          <div className={`flex items-center w-full pt-20 pb-14 gap-5`}>
            <div className="min-w-[45px]">
              <IconNumber color={experiences.length > 0 ? "green" : "white"} number={6} className="min-w-[40px]" />
            </div>
            <h2
            className={`${styles.sectionSubText} font-bold`}
            >
                Ajoutez vos expériences :
            </h2>
          </div>
          <AddInput input={experiences} setInput={(newInput) => setExperiences(newInput)} placeholder={"Expériences"} />
      </div>
    )
}

export default CoverLetterForm;
