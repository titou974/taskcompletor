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


const regexTitle = /^\d+\.\s(.+)/;

const CoverLetterTemplate = ({ generatedTitle, generatedSections, length, doneGeneration, setGeneratedTitle, setGeneratedSections }) => {

  // const updateSectionContent = (index, index2, newContent) => {
  //   const updatedSections = [...generatedSections];
  //   updatedSections[index][index2] = newContent;
  //   setGeneratedSections(updatedSections);
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
              <h2 className={`text-center pb-3`}>{generatedTitle}</h2>
              <div className={`py-4 hidden sm:block md:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-2">
                    <p>{section}</p>
                  </div>
                ))}
              </div>
              <div className={`hidden md:block lg:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-2">
                    <p>{section}</p>
                  </div>
                ))}
              </div>
              <div className={`py-3 hidden lg:block xl:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-2">
                    <p>{section}</p>
                  </div>
                ))}
              </div>
              <div className={`py-4 hidden xl:block`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-1">
                    <p>{section}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* {doneGeneration && (
          <div className={`${style.a4ContainerEdit} align-center flex gap-x-4 mb-2`}>
            <div className={`${style.a4Edit} py-[40px] md:py-[60px] lg:py-[70px] xl:py-[100px] sm:px-10 md:px-8 lg:px-20 xl:px-[110px]`}>
              <div className={`py-3 block md:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="pb-4 pt-2">
                    <div className="flex items-center py-2">
                      <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 1, e.target.value)} rows={1}/>
                    </div>
                    <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 2, e.target.value)} rows={5}/>
                  </div>
                ))}
              </div>
              <div className={`hidden md:block lg:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-3">
                    <div className="flex items-center py-3">
                      <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 1, e.target.value)} rows={1}/>
                    </div>
                    <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 2, e.target.value)} rows={5}/>
                  </div>
                ))}
              </div>
              <div className={`py-4 hidden lg:block xl:hidden`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-5">
                    <div className="flex items-center py-4">
                      <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 1, e.target.value)} rows={1}/>
                    </div>
                    <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 2, e.target.value)} rows={5}/>
                  </div>
                ))}
              </div>
              <div className={`py-3 hidden xl:block`}>
                {generatedSections.map((section, index) => (
                  <div key={index} className="py-8">
                    <div className="flex items-center py-5">
                      <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 1, e.target.value)} rows={1}/>
                    </div>
                    <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 2, e.target.value)} rows={5}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default CoverLetterTemplate;
