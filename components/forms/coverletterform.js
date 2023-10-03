import styles from "../style";
import RadioGroupLanguage from "./inputs/radiogrouplanguage";
import IconNumber from "../iconnumber";
import { m } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import style from "../../css/InputName.module.css";
import { useEffect, useState, useRef } from "react";
import RadioGroupGraduateAnswers from "./inputs/radiogroupgraduate";

const CoverLetterForm = ({myName, setMyName, dest, setDest, language, setLanguage, job, setJob, competences, setCompetences, experiences, setExperiences, contractName, setContractName, graduate, setGraduate, levelOfStudy, setLevelOfStudy, domainOfStudy, setDomainOfStudy, hobbies, setHobbies, contactDetails, setContactDetails, mailAddress, setMailAddress, phoneNumber, setPhoneNumber }) => {

  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedDest, setTypedDest] = useState("");
  const [typedSubject, setTypedSubject] = useState("");
  const [showTypedSubject, setShowTypedSubject] = useState(false);
  const namePlaceholder = "Votre nom";
  const destPlaceholder = "Entreprise";
  const subjectPlaceholder = "Arthur a pas très bien terminé la soirée d'hier soir, il avait un peu trop bu.";
  const delay = 80;
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setShowTypedSubject(true);
  //         observer.disconnect();
  //       }
  //     });
  //   });

  //   observer.observe(subjectArea.current);

  //   return () => {

  //     observer.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!showTypedSubject) return;
  //   let index = 0;
  //   let interval;

  //   const startTyping = () => {
  //       interval = setInterval(() => {
  //       if (index < subjectPlaceholder.length) {
  //         setTypedSubject((prev) => prev + subjectPlaceholder.charAt(index));
  //         index++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, delaySubject);
  //   }

  //   const timeout = setTimeout(startTyping, startDelaySubject);

  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timeout);
  //   };
  // }, [subjectPlaceholder, showTypedSubject]);


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
            <m.div variants={textVariant(1.25)}  className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber color={job ? "green" : "white"} number={2} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Êtes-
                </h2>
            </m.div>
            <m.textarea
                    variants={fadeIn("right", "spring", 1.25, 0.75)}
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    rows={1}
                    className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                    placeholder="M&A Analyst"
            />
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber color={competences ? "green" : "white"} number={3} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Mes Compétences
                </h2>
            </div>
            <textarea
                    value={competences}
                    onChange={(e) => setCompetences(e.target.value)}
                    rows={4}
                    className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                    placeholder="Analyse financière, Évaluation d'entreprise, Négociation, Connaissances en finance d'entreprise"
            />
            <div className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber color={experiences ? "green" : "white"} number={4} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Expériences
                </h2>
            </div>
            <textarea
                    value={experiences}
                    onChange={(e) => setExperiences(e.target.value)}
                    rows={4}
                    className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                    placeholder="Stage de 4 mois chez Bank of America, une trentaine d'opérations fusion-acquisitions traitées"
            />
        </div>
    )
}

export default CoverLetterForm;
