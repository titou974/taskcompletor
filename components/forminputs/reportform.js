import Image from "next/image";
import RadioGroupLangType from "../radiogrouplangtype";
import Cercle1 from "../../public/img/icon1white.svg";
import Cercle2 from "../../public/img/icon2white.svg";
import styles from "../style";

const ReportForm = ({lang, setLang, subject, setSubject}) => {
    return (
        <div className="w-full md:w-1/2 mx-auto">
            <div className={`flex items-center gap-4 pt-10`}>
                <Image src={Cercle1} width={50} height={50} alt="step 1" />
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
            </div>
            <RadioGroupLangType lang={lang} setLang={(newLang) => setLang(newLang)} />
            <div className={`flex items-center gap-4 pt-20`}>
                <Image src={Cercle2} width={50} height={50} alt="step 2" />

                <h2
                    className={`${styles.sectionSubText} font-bold`}
                >
                    Décrivez le(s) sujet(s)
                </h2>
            </div>
            <textarea
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    rows={4}
                    className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-10 px-4 py-2 text-gray-700 caret-gray-700`}
                    placeholder="Les espèces d’insectes qui vivent dans les tropiques, avec des précisions sur le moustique."
            />
        </div>
    )
}

export default ReportForm;