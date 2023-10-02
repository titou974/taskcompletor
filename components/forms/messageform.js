"use client"

import styles from "../style";
import RadioGroupLanguage from "./inputs/radiogrouplanguage";
import RadioGroupEmotion from "./inputs/radiogroupemotion";
import RadioGroupMessageLength from "./inputs/radiogroupmessagelength";
import IconNumber from "../iconnumber";
import {useEffect, useState, useRef} from 'react'
import { m, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import style from "../../css/InputName.module.css"




const MessageForm = ({myName, setMyName, dest, setDest, emotion, setEmotion, language, setLanguage, subject, setSubject, messageLength, setMessageLength}) => {
  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedDest, setTypedDest] = useState("");
  const [typedSubject, setTypedSubject] = useState("");
  const [showTypedSubject, setShowTypedSubject] = useState(false);
  const subjectArea = useRef(null);
  const namePlaceholder = "Votre nom";
  const destPlaceholder = "Destinataire";
  const subjectPlaceholder = "Arthur a pas très bien terminé la soirée d'hier soir, il avait un peu trop bu."
  const delay = 80;
  const delaySubject = 50;
  const startDelaySubject = 1000;
  const startDelayName = 1000;
  const startDelayDest = 2000;

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
            <m.div variants={textVariant(1)}  className={`flex items-center gap-4 w-full pt-5`}>
                <IconNumber number={1} color={emotion === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une émotion
                </h2>
            </m.div>
            <m.div variants={fadeIn("bottom", "spring", 1, 0.75)}>
              <RadioGroupEmotion emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} />
            </m.div>
            <m.div  variants={textVariant(1.25)} className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber number={2} color={language === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </m.div>
            <m.div variants={fadeIn("bottom", "spring", 1.25, 0.75)}>
              <RadioGroupLanguage language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} docType="message" />
            </m.div>
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber number={3} color={messageLength === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir la taille
                </h2>
            </div>
            <RadioGroupMessageLength messageLength={messageLength} setMessageLength={(newLength) => setMessageLength(newLength)}/>
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber color={colorIcon} number={4} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Décrivez le(s) sujet(s)
                </h2>
            </div>
            <div className="relative">
              <textarea
                onChange={(e) => setSubject(e.target.value)}
                rows={4}
                className={`w-full bg-white placeholder-gray-500 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-900 caret-gray-700`}
                placeholder={typedSubject}
                ref={subjectArea}
              />
              <m.div variants={fadeIn("right", "spring", 0.25, 0.75)} animate={textLengthAlert ? "show" : "hidden"} className={`absolute px-4 py-2 mt-2 bg-orange-400 rounded-md w-full font-bold flex align-center justify-center`} >
                <span role="img" aria-label="rapport" className='pe-5'>📢</span><p>Détaillez votre sujet pour un résultat pertinent</p>
              </m.div>
            </div>
        </div>
    )
}

export default MessageForm;
