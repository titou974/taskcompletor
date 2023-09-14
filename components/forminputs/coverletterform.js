import Cercle1 from "../../public/img/icon1white.svg";
import Cercle2 from "../../public/img/icon2white.svg";
import Cercle3 from "../../public/img/icon3white.svg";
import Cercle4 from "../../public/img/icon4white.svg";
import styles from "../style";
import Image from "next/image";
import RadioGroupLanguage from "../radiogrouplanguage";


const CoverLetterForm = ({myName, setMyName, dest, setDest, language, setLanguage, job, setJob, competences, setCompetences, experiences, setExperiences}) => {
    return (
        <div className="w-full md:w-1/2 mx-auto">
            <div className={`w-full flex justify-between pt-10`}>
                <h2 className={`${styles.sectionSubText} font-bold w-5/12`}>
                    Expéditeur
                </h2>
                <h2
                    className={`${styles.sectionSubText} font-bold w-5/12`}
                >
                    Destinataire
                </h2>
            </div>
            <div className={`w-full flex justify-between pt-5`}>
                <textarea
                    value={myName}
                    onChange={(e) => setMyName(e.target.value)}
                    rows={2}
                    className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
                    placeholder="Votre nom"
                />
                <textarea
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    rows={2}
                    className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
                    placeholder={`Nom du destinataire`}
                />
            </div>
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <Image src={Cercle1} width={50} height={50} alt="step 1"/>
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Choisir une langue
                </h2>
            </div>
            <RadioGroupLanguage language={language} setLanguage={(newLanguage) => setLanguage(newLanguage)} />
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <Image src={Cercle2} width={50} height={50} alt="step 2"/>
                <h2
                className={`${styles.sectionSubText} font-bold`}
                >
                    Job visé 
                </h2>
            </div>
            <textarea
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    rows={1}
                    className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                    placeholder="M&A Analyst"
            />
            <div className={`flex items-center gap-4 w-full pt-20`}>
                <Image src={Cercle3} width={50} height={50} alt="step 3"/>
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
                <Image src={Cercle4} width={50} height={50} alt="step 4"/>
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