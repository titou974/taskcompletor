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

const CoverLetterDetails = ({ doneGeneration, generatedDetails, generatedLetterObject, generatedLetter, setGeneratedDetails, setGeneratedLetterObject, setGeneratedLetter }) => {

  const [detailsTextArea, setDetailsTextArea] = useState('');
  const [letterTextArea, setLetterTextArea] = useState('');


  const handleDetailsChange = (e) => {
    setDetailsTextArea(e.target.value);
  };

  const handleLetterChange = (e) => {
    setLetterTextArea(e.target.value);
  };

  useEffect(() => {
    if (doneGeneration) {
      const updatedDetailsString = generatedDetails?.map(section => section.join('\n')).join('\n\n');
      const updatedLetterString = generatedLetter.join('\n\n');

      setDetailsTextArea(updatedDetailsString);
      setLetterTextArea(updatedLetterString);
    }
  }, [doneGeneration]);

  useEffect(() => {
    if (doneGeneration) {
      setGeneratedDetails(detailsTextArea.split('\n\n').map(section => section.split('\n')));
      setGeneratedLetter(letterTextArea.split('\n'));
    }
  }, [detailsTextArea, letterTextArea, doneGeneration]);

  return (
    <div className="w-full mx-auto">
      <div className="sm:hidden relative" >
        {true && (
            <div className={`${style.a4Container} align-center flex gap-x-4 mb-2`}>
              <div className={`${style.a4} py-[20px] px-[20px]`}>
                <div className={``}>
                  <div className="pb-2">
                    {generatedDetails.length > 0 && typeof generatedDetails === "object" ? generatedDetails.map((section, index) => (
                      <div key={index} className="py-1">
                        {section.length > 0 && section.map((line, index) => (
                          <p className={style.letterDetails} key={index}>{line}</p>
                        ))}
                      </div>
                    )) : (
                      <p className={style.letterDetails}>{generatedDetails}</p>
                    )}
                  </div>
                  <div className="py-2">
                    <p className={style.letterObject}>{generatedLetterObject}</p>
                  </div>
                  <div>
                    {generatedLetter.length > 0 && generatedLetter.map((section, index) =>(
                      <div key={index} className="py-1">
                        <p className={style.letter}>{section}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      <div className="hidden sm:block">
        {!doneGeneration && (
          <div className={`${style.a4Container} align-center flex gap-x-4 mb-2`}>
            <div className={`${style.a4} py-[40px] md:py-[25px] lg:py-[30px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10 xl:px-12`}>
              <div className={`py-2 hidden sm:block md:py-0 lg:py-0 xl:py-4`}>
                <div className="pb-2">
                  {generatedDetails.length > 0 && typeof generatedDetails === "object" ? generatedDetails.map((section, index) => (
                    <div key={index} className="py-1">
                      {section.length > 0 && section.map((line, index) => (
                        <p className={style.letterDetails} key={index}>{line}</p>
                      ))}
                    </div>
                  )) : (
                    <p className={style.letterDetails}>{generatedDetails}</p>
                  )}
                </div>
                <div className="py-4">
                  <p className={style.letterObject}>{generatedLetterObject}</p>
                </div>
                <div>
                  {generatedLetter.length > 0 && generatedLetter.map((section, index) =>(
                    <div key={index} className="py-1">
                      <p className={style.letter}>{section}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {doneGeneration && (
          <div className={`${style.a4ContainerEdit} align-center flex gap-x-4 mb-2`}>
            <div className={`${style.a4Edit} py-[40px] md:py-[25px] lg:py-[30px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10 xl:px-12`}>
              <div className={`py-2 hidden sm:block md:py-0 lg:py-0 xl:py-4`}>
                <div className="pb-2">
                  <textarea
                    className={style.letterDetails}
                    value={detailsTextArea}
                    onChange={handleDetailsChange}
                    rows={9}
                  />
                </div>
                <div className="py-4">
                  <textarea
                    rows={1}
                    className={style.object}
                    value={generatedLetterObject}
                    onChange={e => setGeneratedLetterObject(e.target.value)}
                  />
                </div>
                <div className="lg:hidden">
                  <textarea
                    className={style.letter}
                    value={letterTextArea}
                    onChange={handleLetterChange}
                    rows={16}
                  />
                </div>
                <div className="hidden lg:block xl:hidden">
                  <textarea
                    className={style.letter}
                    value={letterTextArea}
                    onChange={handleLetterChange}
                    rows={28}
                  />
                </div>
                <div className="hidden xl:block">
                  <textarea
                    className={style.letter}
                    value={letterTextArea}
                    onChange={handleLetterChange}
                    rows={32}
                  />
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
