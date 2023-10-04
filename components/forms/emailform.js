import styles from "../style";
import RadioGroupLanguage from "./inputs/radiogrouplanguage";
import RadioGroupMailType from "./inputs/radiogroupmailtype";
import {useState, useEffect, useRef} from 'react';
import IconNumber from "../iconnumber";
import { m, AnimatePresence } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import style from "../../css/InputName.module.css"


const EmailForm = ({myName, setMyName, dest, setDest, mailType, setMailType, language, setLanguage, subject, setSubject}) => {
  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedDest, setTypedDest] = useState("");
  const [typedSubject, setTypedSubject] = useState("");
  const [showTypedSubject, setShowTypedSubject] = useState(false);
  const subjectArea = useRef(null);
  const namePlaceholder = "Votre nom";
  const destPlaceholder = "Destinataire";
  const subjectPlaceholder = "Demande pour une année de césure afin de se consacrer à la programmation."
  const delay = 50;
  const delaySubject = 30;
  const startDelaySubject = 1000;
  const startDelayName = 2000;
  const startDelayDest = 2500;

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowTypedSubject(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(subjectArea.current);

    return () => {

      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!showTypedSubject) return;
    let index = 0;
    let interval;

    const startTyping = () => {
        interval = setInterval(() => {
        if (index < subjectPlaceholder.length) {
          setTypedSubject((prev) => prev + subjectPlaceholder.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, delaySubject);
    }

    const timeout = setTimeout(startTyping, startDelaySubject);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [subjectPlaceholder, delaySubject, startDelaySubject, showTypedSubject]);

    const HandleColorChangeTextInput = () => {
      if (1 < subject.split(/\s+/).length && subject.split(/\s+/).length < 4) {
        setColorIcon('orange');
        setTextLengthAlert(true)
      } else if (subject.split(/\s+/).length > 3) {
        setColorIcon('green');
        setTextLengthAlert(false)
      } else if (subject === "")  {
        setColorIcon('white')
        setTextLengthAlert(false)
      }
    }

    useEffect(() => {
      HandleColorChangeTextInput();
    })

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
              <IconNumber number={1} color={mailType === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir un type d'email
                </h2>
            </m.div>
            <m.div variants={fadeIn("right", "spring", 1.25, 0.75)}>
            <RadioGroupMailType mailType={mailType} setMailType={(newType) => setMailType(newType)} />
            </m.div>
            <m.div variants={textVariant(1)} className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber number={2} color={language === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </m.div>
            <m.div variants={fadeIn("right", "spring", 1.25, 0.75)} >
              <RadioGroupLanguage language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} docType="email" />
            </m.div>
            <div className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber number={3} color={colorIcon} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Décrivez le(s) sujet(s)
                </h2>
            </div>
            <div className="relative">
              <m.textarea
                      onChange={(e) => setSubject(e.target.value)}
                      rows={4}
                      className={`w-full bg-white placeholder-gray-500 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-900 caret-gray-700`}
                      placeholder={typedSubject}
                      ref={subjectArea}
              />
              <AnimatePresence>
                <m.div variants={fadeIn("right", "spring", 0.25, 0.75)} animate={textLengthAlert ? "show" : "hidden"} exit="hidden" className={`absolute px-4 py-2 mt-2 bg-orange-400 rounded-md w-full font-bold flex align-center justify-center`} >
                    <span role="img" aria-label="rapport" className='pe-5'>📢</span><p>Détaillez votre sujet pour un résultat pertinent</p>
                </m.div>
              </AnimatePresence>
            </div>
        </div>
    )
}

export default EmailForm;
