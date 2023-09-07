import DropDownDoc from "./dropdowndoc";
import TabsDocument from "./tabsdocument";
import TabsEmotion from "./tabsemotion";
import RadioGroupLangType from "./radiogrouplangtype";
import RadioGroupPersoType from "./radiogrouppersotype";
import styles from "./style";
import Image from "next/image";
import Cercle1 from "../public/img/icon1white.svg";
import Cercle2 from "../public/img/icon2white.svg";
import Cercle3 from "../public/img/icon3white.svg";
import Cercle4 from "../public/img/icon4white.svg";
import { motion } from "framer-motion";
import ReportForm from "./forminputs.js/reportform";

const FormGenerator = ({subject, setSubject, doc, setDoc, lang, setLang, dest, setDest, persoType, setPersoType, domain, setDomain, theme, setTheme, questions, setQuestions, job, setJob, competences, setCompetences, experiences, setExperiences, company, setCompany, myName, setMyName, emotion, setEmotion}) => {
    return (
        <>
            <motion.div
            className="flex items-center gap-4 w-full text-center"
            >
                <h2 className={`${styles.heroSubText} font-bold mx-auto mb-10`}>
                    Sélectionner un type de document
                </h2>
            </motion.div>
            <div
            className="sm:hidden w-full"
            >
                <DropDownDoc className="sm:hidden" type={doc} setType={(newDoc) => setDoc(newDoc)} />
            </div>
            <div className="hidden sm:block w-full">
                <TabsDocument type={doc} setType={(newDoc) => setDoc(newDoc)}/>
            </div>
            <div className={`w-full ${doc === "Rapport" ? "" : "hidden"}`}>
                <ReportForm subject={subject} setSubject={(newSubject) => setSubject(newSubject)} lang={lang} setLang={(newLang) => setLang(newLang)}/>
            </div>
            <motion.div
            className={`w-full md:w-1/2 flex justify-between ${
                doc === "Email" || doc === "Lettre de motivation" ? "" : "hidden"
            }`}
            >
            <h2 className={`${styles.sectionSubText} font-bold w-5/12`}>
                Expéditeur
            </h2>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Lettre de motivation" || "Email" ? "" : "hidden"
                } font-bold w-5/12`}
            >
                Destinataire
            </h2>
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 flex justify-between ${
                doc === "Email" || doc === "Lettre de motivation" ? "" : "hidden"
            }`}
            >
            <textarea
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
                rows={2}
                className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
                placeholder="Votre nom"
            />
            <textarea
                value={doc === "Lettre" ? dest : company}
                onChange={
                doc === "Lettre"
                    ? (e) => setDest(e.target.value)
                    : (e) => setCompany(e.target.value)
                }
                rows={2}
                className="w-5/12 bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-1 text-gray-700 caret-gray-700"
                placeholder={`${
                doc === "Lettre" ? "Mike Tyson" : "Café Élementaire"
                }`}
            />
            </motion.div>
            <motion.div
            className={`flex items-center gap-4 w-full md:w-1/2 pt-10`}
            >
            <Image src={Cercle1} width={50} height={50} alt="step 2" className={`${
                doc === "Email" || doc === "Rapport" || doc ==="Fiche de révision" ? "block" : "hidden"
            }`}/>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Lettre" || doc === "Rapport" ? "lg:block" : "lg:hidden"
                } hidden font-bold`}
            >
                Sélectionner un language
            </h2>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Lettre" || doc === "Rapport" ? "lg:hidden" : "hidden"
                } font-bold`}
            >
                Language
            </h2>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Lettre de motivation" ? "" : "hidden"
                } font-bold`}
            >
                Job visé
            </h2>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Fiche de révision" ? "" : "hidden"
                } font-bold`}
            >
                Matière
            </h2>
            <h2
                className={`${styles.sectionSubText} ${
                doc === "Email" ? "" : "hidden"
                } font-bold`}
            >
                Choisir une émotion
            </h2>
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Rapport" ? "" : "hidden"
            } pb-10`}
            >
            <RadioGroupLangType lang={lang} setLang={(newLang) => setLang(newLang)} />
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Email" ? "" : "hidden"
            } pb-10`}
            >
                <TabsEmotion emotion={emotion} setEmotion={(newEmotion) => setEmotion(newEmotion)} />
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Lettre de motivation" || doc === "Fiche de révision"
                ? ""
                : "hidden"
            }`}
            >
            <textarea
                value={job}
                onChange={(e) => setJob(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Lettre de motivation" ? "" : "hidden"
                }`}
                placeholder="Serveur"
            />
            <textarea
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Fiche de révision" ? "" : "hidden"
                }`}
                placeholder="Marketing digital"
            />
            </motion.div>
            <motion.div
            className={`flex items-center gap-4 w-full md:w-1/2 ${
                doc === "Exercice" ? "" : "hidden"
            }`}
            >
            <Image src={Cercle1} width={50} height={50} alt="step 2" />
            <h2 className={`${styles.sectionSubText} font-bold hidden lg:block`}>
                Sélectionner un type d'écriture
            </h2>
            <h2 className={`${styles.sectionSubText} font-bold lg:hidden`}>
                Type d'écriture
            </h2>
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Exercice" ? "" : "hidden"
            }`}
            >
            <RadioGroupPersoType perso={persoType} setPerso={(newType) => setPersoType(newType)} />
            </motion.div>
            <motion.div
            className="flex items-center gap-4 w-full md:w-1/2 mt-10"
            >
            <Image src={Cercle2} width={50} height={50} alt="step 3" />
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Rapport" || doc === "Email" ? "" : "hidden"
                }`}
            >
                Décrivez le(s) sujet(s)
            </h2>
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Exercice" ? "" : "hidden"
                }`}
            >
                Nom de la matière
            </h2>
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Lettre de motivation" ? "" : "hidden"
                }`}
            >
                Compétences
            </h2>
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Fiche de révision" ? "" : "hidden"
                }`}
            >
                Chapitre(s)
            </h2>
            </motion.div>
            <motion.div          
            className="w-full md:w-1/2 mb-10"
            >
            <textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows={4}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc === "Rapport" || doc === "Email" ? "" : "hidden"
                }`}
                placeholder="Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique."
            />
            <textarea
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Exercice" ? "" : "hidden"
                }`}
                placeholder="Financial Reporting"
            />
            <textarea
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Fiche de révision" ? "" : "hidden"
                }`}
                placeholder="SEO et SEA"
            />
            <textarea
                value={competences}
                onChange={(e) => setCompetences(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Lettre de motivation" ? "" : "hidden"
                }`}
                placeholder="Bilingue anglais, dynamique, bonne mémoire"
            />
            </motion.div>
            <motion.div
            className={`flex items-center gap-4 w-full md:w-1/2 ${
                doc === "Lettre de motivation" || doc === "Exercice" ? "" : "hidden"
            }`}
            >
            <Image src={Cercle3} width={50} height={50} alt="step 3" />
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Exercice" ? "" : "hidden"
                }`}
            >
                Domaine de la matière
            </h2>
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Lettre de motivation" ? "" : "hidden"
                }`}
            >
                Expériences
            </h2>
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Lettre de motivation" || doc === "Exercice" ? "" : "hidden"
            }`}
            >
            <textarea
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Exercice" ? "" : "hidden"
                }`}
                placeholder="Capital immatériel du groupe Kering"
            />
            <textarea
                value={experiences}
                onChange={(e) => setExperiences(e.target.value)}
                rows={4}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Lettre de motivation" ? "" : "hidden"
                }`}
                placeholder="barman pendant 1 mois aux fontaines (le mois dernier) et serveur au Ritz l'été 2022"
            />
            </motion.div>
            <motion.div
            className={`flex items-center gap-4 w-full md:w-1/2 ${
                doc === "Exercice" ? "" : "hidden"
            } mt-10`}
            >
            <Image src={Cercle4} width={50} height={50} alt="step 3" />
            <h2
                className={`${styles.sectionSubText} font-bold ${
                doc === "Exercice" ? "" : "hidden"
                }`}
            >
                Consignes et Questions
            </h2>
            </motion.div>
            <motion.div          
            className={`w-full md:w-1/2 ${
                doc === "Exercice" ? "" : "hidden"
            }`}
            >
            <textarea
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                rows={4}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 ${
                doc == "Exercice" ? "" : "hidden"
                }`}
                placeholder="5.1 Qu'est-ce qui est le plus frappant lorsque l'on regarde les actifs de KERING ?
                5.2 Quelle est la valeur présentée par KERING pour son portefeuille de marques ? Cette valeur vous semble-t-elle réaliste ?
                5.3 Quels sont les autres actifs incorporels ?
                5.4 Comment les marques sont-elles comptabilisées ?
                5.5 Comment les autres actifs incorporels sont-ils comptabilisés ?
                5.6 Est-ce que le groupe KERING a une politique de recherche et développement ?"
            />
            </motion.div>
        </>
    )
}

export default FormGenerator;