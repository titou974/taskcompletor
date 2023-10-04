"use client"

import RadioGroupLangType from "./inputs/radiogrouplangtype";
import styles from "../style";
import IconNumber from "../iconnumber";
import {useEffect, useState, useRef} from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const ReportForm = ({lang, setLang, subject, setSubject}) => {

  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
  const [typedSubject, setTypedSubject] = useState("");
  const [showTyped, setShowTyped] = useState(false);
  const subjectArea = useRef(null);
  const text = "La science durant la Grèce Antique";
  const delay = 30;
  const startDelay = 1500;

  const HandleColorChangeTextInput = () => {
    if (1 < subject.split(/\s+/).length && subject.split(/\s+/).length < 4) {
      setColorIcon('orange');
      setTextLengthAlert(true)
    } else if (subject.split(/\s+/).length > 3) {
      setColorIcon('green');
      setTextLengthAlert(false)
    } else {
      setColorIcon('white')
      setTextLengthAlert(false)
    }
  }

  useEffect(() => {
    HandleColorChangeTextInput();
  })

  useEffect(() => {
    if (!showTyped) return;
    let index = 0;
    let interval;

    const startTyping = () => {
        interval = setInterval(() => {
        if (index < text.length) {
          setTypedSubject((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    }

    const timeout = setTimeout(startTyping, startDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay, startDelay, showTyped]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowTyped(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(subjectArea.current);

    return () => {

      observer.disconnect();
    };
  }, []);

    return (
          <div className="w-full md:w-1/2 mx-auto">
            <m.div variants={textVariant(0.5)} className={`flex items-center gap-4 pt-10`}>
                <IconNumber number={1} color={lang === "" ? "white" : "green"} />
                <h2
                    className={`${styles.sectionSubText} lg:block hidden font-bold`}
                >
                    Type de Présentation
                </h2>
                <h2
                    className={`${styles.sectionSubText} lg:hidden font-bold`}
                >
                  Type de Présentation
                </h2>
            </m.div>
            <m.div variants={fadeIn("right", "spring", 0.75, 0.75)} >
              <RadioGroupLangType lang={lang} setLang={(newLang) => setLang(newLang)} />
            </m.div>
            <m.div variants={textVariant(0.5)} className={`flex items-center gap-4 pt-20`}>
            <IconNumber number={2} color={colorIcon}/>
                <h2
                    className={`${styles.sectionSubText} font-bold`}
                >
                    Décrivez le(s) sujet(s)
                </h2>
            </m.div>
            <div className="relative">
              <m.textarea
                      placeholder={typedSubject}
                      variants={fadeIn("right", "spring", 0.75, 0.75)}
                      onChange={(e) => setSubject(e.target.value)}
                      rows={4}
                      className={`w-full placeholder-gray-500 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-900 caret-gray-700`}
                      ref={subjectArea}
              />
              <AnimatePresence>
                <m.div initial="hidden" variants={fadeIn("right", "spring", 0.25, 0.75)} animate={textLengthAlert ? "show" : "hidden"} exit="hidden" className={`absolute px-4 py-2 mt-2 bg-orange-400 rounded-md w-full font-bold flex align-center justify-center`} >
                  <span role="img" aria-label="rapport" className='pe-5'>📢</span><p>Détaillez votre sujet pour un résultat pertinent</p>
                </m.div>
              </AnimatePresence>
            </div>
        </div>
    )
}

export default ReportForm;
