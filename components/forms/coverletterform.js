import styles from "../style";
import RadioGroupLanguage from "./inputs/radiogrouplanguage";
import IconNumber from "../iconnumber";
import { m } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import style from "../../css/InputName.module.css"

const CoverLetterForm = ({myName, setMyName, dest, setDest, language, setLanguage, job, setJob, competences, setCompetences, experiences, setExperiences}) => {
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
            <m.div variants={textVariant(1)} className={`flex items-center gap-4 w-full pt-20`}>
              <IconNumber color={language ? "green" : "white"} number={1} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </m.div>
            <m.div variants={fadeIn("top", "spring", 1, 0.75)}>
              <RadioGroupLanguage language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} />
            </m.div>
            <m.div variants={textVariant(1.25)}  className={`flex items-center gap-4 w-full pt-20`}>
                <IconNumber color={job ? "green" : "white"} number={2} />
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Job visé
                </h2>
            </m.div>
            <m.textarea
                    variants={fadeIn("top", "spring", 1.25, 0.75)}
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
