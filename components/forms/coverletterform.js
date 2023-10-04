import styles from "../style";
import IconNumber from "../iconnumber";
import { m } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import style from "../../css/InputName.module.css";
import { useEffect, useState, useRef } from "react";
import RadioGroupGraduateAnswers from "./inputs/radiogroupgraduate";
import RadioGroupContracts from "./inputs/radiogroupcontract";
import AutoSuggestionInput from "./inputs/autosuggestioninput";
import { domaines_etudes } from "../../utils/constants";


const CoverLetterForm = ({myName, setMyName, dest, setDest, language, setLanguage, job, setJob, competences, setCompetences, experiences, setExperiences, contractName, setContractName, graduate, setGraduate, levelOfStudy, setLevelOfStudy, domainOfStudy, setDomainOfStudy, hobbies, setHobbies, contactDetails, setContactDetails, mailAddress, setMailAddress, phoneNumber, setPhoneNumber, companyName, setCompanyName }) => {

  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedDest, setTypedDest] = useState("");
  const [typedDomainName, setTypedDomainName] = useState("");
  const [typedSchoolName, setTypedSchoolName] = useState("");
  const [showTypedSchoolName, setShowTypedSchoolName] = useState(false);
  const [showTypedDomainName, setShowTypedDomainName] = useState(false);
  const namePlaceholder = "Votre nom";
  const destPlaceholder = "Entreprise";
  const schoolNamePlaceholder = "Nom de votre école";
  const domainNamePlaceholder = "Domaine d'étude";
  const delay = 50;
  const startDelayName = 2000;
  const startDelayDest = 2500;
  const startDelayTextArea = 1000;


  const textAreaSchoolName = useRef(null);
  const textAreaDomainName = useRef(null);


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

  const useTypingEffect = (show, placeholder, setTyped, startDelay, delay) => {
    useEffect(() => {
      if (!show) return;
      let index = 0;
      const startTyping = () => {
        const interval = setInterval(() => {
          if (index < placeholder.length) {
            setTyped((prev) => prev + placeholder.charAt(index));
            index++;
          } else {
            clearInterval(interval);
          }
        }, delay);
        return () => clearInterval(interval);
      }
      const timeout = setTimeout(startTyping, startDelay);
      return () => clearTimeout(timeout);
    }, [show, placeholder, setTyped, startDelay, delay]);
  }

  const useIntersectionObserver = (ref, setShow, rootMargin = "0px") => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
    }, { rootMargin });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, setShow]);
}

  useTypingEffect(showTypedSchoolName, schoolNamePlaceholder, setTypedSchoolName, startDelayTextArea, delay);

  useTypingEffect(showTypedDomainName, domainNamePlaceholder, setTypedDomainName, startDelayTextArea, delay);

  useIntersectionObserver(textAreaSchoolName, setShowTypedSchoolName);

  useIntersectionObserver(textAreaDomainName, setShowTypedDomainName);



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
                <input required type="text" onChange={(e) => setDest(e.target.value)} className={`${style.inputClassic} w-5/12 rounded-md transition-all`}/>
                <span className={style.placeholderInputClassic}>{typedDest}</span>
              </m.label>
            </div>
            <m.div variants={textVariant(1)} className={`flex items-center gap-4 w-full pt-5`}>
              <IconNumber color={graduate !== null ? "green" : "white"} number={1} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Êtes-vous étudiant ?
                </h2>
            </m.div>
            <m.div variants={fadeIn("right", "spring", 1.25, 0.75)}>
              <RadioGroupGraduateAnswers graduate={graduate} setGraduate={setGraduate} />
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
                    className={`w-full`}
                    placeholder="M&A Analyst"
            >
              <RadioGroupContracts contractName={contractName} setContractName={(newName) => setContractName(newName)}/>
            </m.div>
            <div className={`flex items-center w-full pt-20 gap-5`}>
                <div className="min-w-[40px]">
                  <IconNumber color={companyName !== "" ? "green" : "white"} number={3} className="min-w-[40px]" />
                </div>
                <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.inputClassic} w-full`} ref={textAreaSchoolName} >
                  <input required type="text" onChange={(e) => setCompanyName(e.target.value)} className={`${style.inputClassic} w-full rounded-md transition-all`}/>
                  <span className={`${style.placeholderInputClassic}`}>{typedSchoolName}</span>
                </m.label>
            </div>
              <div className={`flex items-center gap-5 w-full pt-20 pb-20`}>
                <div className="min-w-[40px]">
                  <IconNumber color={domainOfStudy !== "" ? "green" : "white"} number={4} />
                </div>
                <div ref={textAreaDomainName} className="w-full h-full">
                  <AutoSuggestionInput input={domainOfStudy} setInput={(newInput) => setDomainOfStudy(newInput)} dataset={domaines_etudes} typedPlaceholder={typedDomainName} />
                </div>
            </div>
        </div>
    )
}

export default CoverLetterForm;
