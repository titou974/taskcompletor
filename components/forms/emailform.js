import styles from "../style";
import RadioGroupLanguage from "./inputs/radiogrouplanguage";
import RadioGroupMailType from "./inputs/radiogroupmailtype";
import {useState, useEffect} from 'react';
import IconNumber from "../iconnumber";
import { m, AnimatePresence } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import style from "../../css/InputName.module.css"


const EmailForm = ({myName, setMyName, dest, setDest, mailType, setMailType, language, setLanguage, subject, setSubject}) => {
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
              <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={style.inputClassic}>
                <input required type="text" onChange={(e) => setMyName(e.target.value)} className={`${style.inputClassic} w-5/12 rounded-md transition-all`}/>
                <span className={style.placeholderInputClassic}>Votre nom</span>
              </m.label>
              <m.label variants={fadeIn("right", "spring", 0.75, 0.75)} className={style.inputClassic}>
                <input required type="text" onChange={(e) => setDest(e.target.value)} className={`${style.inputClassic} w-5/12 rounded-md transition-all`}/>
                <span className={style.placeholderInputClassic}>Destinataire</span>
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
            <m.div variants={fadeIn("top", "spring", 1, 0.75)}>
            <RadioGroupMailType mailType={mailType} setMailType={(newType) => setMailType(newType)} />
            </m.div>
            <m.div variants={textVariant(1.25)} className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber number={2} color={language === "" ? "white" : "green"} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </m.div>
            <m.div variants={fadeIn("top", "spring", 1.25, 0.75)} >
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
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      rows={4}
                      className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                      placeholder="Demande pour un semestre de césure afin de se consacrer à la programmation lors d'un stage de 4 mois."
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
