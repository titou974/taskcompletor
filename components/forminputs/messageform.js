"use client"

import Cercle1 from "../../public/img/icon1white.svg";
import Cercle2 from "../../public/img/icon2white.svg";
import Cercle3 from "../../public/img/icon3white.svg";
import Cercle4 from "../../public/img/icon4white.svg";
import styles from "../style";
import Image from "next/image";
import RadioGroupLanguage from "../radiogrouplanguage";
import RadioGroupMailType from "../radiogroupmailtype";
import RadioGroupEmotion from "../radiogroupemotion";
import RadioGroupMessageLength from "../radiogroupmessagelength";
import IconNumber from "../iconnumber";
import {useEffect, useState} from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";




const MessageForm = ({myName, setMyName, dest, setDest, emotion, setEmotion, language, setLanguage, subject, setSubject, messageLength, setMessageLength}) => {
  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
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
              <motion.label variants={fadeIn("right", "spring", 0.5, 0.75)} className="input-classic">
                <input required type="text" onChange={(e) => setMyName(e.target.value)} className="input-classic w-5/12 rounded-md transition-all"/>
                <span className="placeholder-input-classic ">Votre nom</span>
              </motion.label>
              <motion.label variants={fadeIn("right", "spring", 0.75, 0.75)} className="input-classic">
                <input required type="text" onChange={(e) => setDest(e.target.value)} className="input-classic w-5/12 rounded-md transition-all"/>
                <span className="placeholder-input-classic">Destinataire</span>
              </motion.label>
            </div>
            <motion.div variants={textVariant(1)}  className={`flex items-center gap-4 w-full pt-5`}>
                <IconNumber number={1} color={emotion === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une émotion
                </h2>
            </motion.div>
            <motion.div variants={fadeIn("bottom", "spring", 1, 0.75)}>
              <RadioGroupEmotion emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} />
            </motion.div>
            <motion.div  variants={textVariant(1.25)} className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber number={2} color={language === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </motion.div>
            <motion.div variants={fadeIn("bottom", "spring", 1.25, 0.75)}>
              <RadioGroupLanguage language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} />
            </motion.div>
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows={4}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                placeholder="Arthur a pas très bien terminé la soirée hier soir, il avait un peu trop bu. Il est bien rentré"
              />
              <motion.div variants={fadeIn("right", "spring", 0.25, 0.75)} animate={textLengthAlert ? "show" : "hidden"} className={`${textLengthAlert ? "" : "hidden"} absolute px-4 py-2 mt-2 bg-orange-400 rounded-md w-full font-bold flex align-center justify-center`} >
                <span role="img" aria-label="rapport" className='pe-5'>📢</span><p>Détaillez votre sujet pour un résultat pertinent</p>
              </motion.div>
            </div>
        </div>
    )
}

export default MessageForm;
