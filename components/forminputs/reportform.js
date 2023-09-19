"use client"
import Image from "next/image";
import RadioGroupLangType from "../radiogrouplangtype";
import Cercle1 from "../../public/img/icon1white.svg";
import Cercle2 from "../../public/img/icon2white.svg";
import styles from "../style";
import IconNumber from "../iconnumber";
import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const ReportForm = ({lang, setLang, subject, setSubject}) => {

  const [colorIcon, setColorIcon] = useState('white');
  const [textLengthAlert, setTextLengthAlert] = useState(false);
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

    return (
        <div className="w-full md:w-1/2 mx-auto">
            <motion.div variants={textVariant(0.5)} className={`flex items-center gap-4 pt-10`}>
                <IconNumber number={1} color={lang === "" ? "white" : "green"} />
                <h2
                    className={`${styles.sectionSubText} lg:block hidden font-bold`}
                >
                    Sélectionner un language
                </h2>
                <h2
                    className={`${styles.sectionSubText} lg:hidden font-bold`}
                >
                    Language
                </h2>
            </motion.div>
            <RadioGroupLangType lang={lang} setLang={(newLang) => setLang(newLang)} />
            <motion.div variants={textVariant(0.75)} className={`flex items-center gap-4 pt-20`}>
            <IconNumber number={2} color={colorIcon}/>
                <h2
                    className={`${styles.sectionSubText} font-bold`}
                >
                    Décrivez le(s) sujet(s)
                </h2>
            </motion.div>
            <motion.div variants={fadeIn("right", "spring", 0.75, 0.75)} className="relative">
              <textarea
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      rows={4}
                      className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                      placeholder="Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique."
              />
              <div className={`${textLengthAlert ? "" : "hidden"} absolute px-4 py-2 mt-2 bg-orange-400 rounded-md w-full font-bold flex align-center justify-center`} >
                <span role="img" aria-label="rapport" className='pe-5'>📢</span><p>Détaillez votre sujet pour un résultat pertinent</p>
              </div>
            </motion.div>
        </div>
    )
}

export default ReportForm;
