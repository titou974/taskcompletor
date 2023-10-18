import { m } from "framer-motion";
import { slideIn, fadeIn } from "../../../utils/motion";
import PageTitleReportPhoneGenerated from "../generationtemplates/reportpages/pagetitlereportphonegenerated";
import PageTitleReportGenerated from "../generationtemplates/reportpages/pagetitlereportgenerated";
import PageReportPhoneGenerated from "../generationtemplates/reportpages/pagereportphonegenerated";
import PageReportGenerated from "../generationtemplates/reportpages/pagereportgenerated";
import PageTitleReportGeneratedEdit from "./reportpages/pagetitlereportmodif";
import PageReportGeneratedEdit from "./reportpages/pagereportgeneratedmodif";
import { AnimatePresence } from "framer-motion";
import style from "../../../css/LetterGenerated.module.css";
import { useState, useEffect } from "react";



const regexTitle = /^\d+\.\s(.+)/;

const CoverLetterDetails = ({ generatedDetails, generatedLetterObject, generatedLetter, setGeneratedDetails, setGeneratedLetterObject, setGeneratedLetter }) => {

  // const [fulltext, setFulltext] = useState(generatedSections.join("\n\n"))

  // useEffect(() => {
  //   setFulltext(generatedSections.join("\n\n"))
  // }, [generatedSections])

  // const updateParagraphs = () => {
  //   // Diviser le texte en paragraphes en utilisant deux sauts de ligne comme délimiteur
  //   const newParagraphs = fulltext.split('\n').map(line => line.trim()).filter(line => line);
  //   setGeneratedSections(newParagraphs);
  //   // Mettre à jour l'état initial ou effectuer d'autres actions avec les nouveaux paragraphes
  //   console.log(newParagraphs);
  // };

  // const handleParagraphsChange = (e) => {
  //   updateParagraphs();
  //   setFulltext(e.target.value);
  // }

  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
      </div>
      <div className="hidden sm:block">
        {true && (
          <div className={`${style.a4Container} align-center flex gap-x-4 mb-2`}>
            <div className={`${style.a4} py-[40px] md:py-[25px] lg:py-[30px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10 xl:px-12`}>
              <div className={`py-4 hidden sm:block md:py-0 lg:py-3 xl:py-4`}>
                <div className="py-2">
                  <p className="italic">{generatedDetails}</p>
                </div>
                <div className="py-2">
                  <p className="font-bold py-2">{generatedLetterObject}</p>
                </div>
                <div>
                  <p>{generatedLetter}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {false && (
          <div className={`${style.a4ContainerEdit} align-center flex gap-x-4 mb-2`}>
            <div className={`${style.a4Edit} py-[30px] md:py-[40px] lg:py-[60px] xl:pt-[60px] sm:px-5 md:px-15 lg:px-20 xl:px-[60px]`}>
              <h2 className={`text-center`}>
                <textarea className={`${style.titleTextArea} text-center`} value={generatedTitle} rows={1} onChange={(e) => setGeneratedTitle(e.target.value)} />
              </h2>
              <div className={`py-1 hidden sm:block md:hidden`}>
                <div className="pt-2">
                  <textarea value={fulltext} className={`${style.sectionTextArea}`} onChange={(e) => handleParagraphsChange(e)} rows={36}/>
                </div>
              </div>
              <div className={`hidden md:block lg:hidden`}>
                <div className="pt-8">
                  <textarea value={fulltext} className={`${style.sectionTextArea}`} onChange={(e) => handleParagraphsChange(e)} rows={36}/>
                </div>
              </div>
              <div className={`py-4 hidden lg:block xl:hidden`}>
                <div className="pt-2">
                  <textarea value={fulltext} className={`${style.sectionTextArea}`} onChange={(e) => handleParagraphsChange(e)} rows={33}/>
                </div>
              </div>
              <div className={`py-3 hidden xl:block`}>
                <div className="pt-2">
                  <textarea value={fulltext} className={`${style.sectionTextArea}`} onChange={(e) => handleParagraphsChange(e)} rows={33}/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetterDetails;
