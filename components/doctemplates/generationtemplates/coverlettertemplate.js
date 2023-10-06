import { m } from "framer-motion";
import { slideIn, fadeIn } from "../../../utils/motion";
import PageTitleReportPhoneGenerated from "../generationtemplates/reportpages/pagetitlereportphonegenerated";
import PageTitleReportGenerated from "../generationtemplates/reportpages/pagetitlereportgenerated";
import PageReportPhoneGenerated from "../generationtemplates/reportpages/pagereportphonegenerated";
import PageReportGenerated from "../generationtemplates/reportpages/pagereportgenerated";
import PageTitleReportGeneratedEdit from "./reportpages/pagetitlereportmodif";
import PageReportGeneratedEdit from "./reportpages/pagereportgeneratedmodif";
import { AnimatePresence } from "framer-motion";

const regexTitle = /^\d+\.\s(.+)/;

const CoverLetterTemplate = ({ generatedTitle, generatedSections, length, doneGeneration, setGeneratedTitle, setGeneratedSections }) => {

  const updateSectionContent = (index, index2, newContent) => {
    const updatedSections = [...generatedSections];
    updatedSections[index][index2] = newContent;
    setGeneratedSections(updatedSections);
  }

  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
          <div>
          {
            length >= 1 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageTitleReportPhoneGenerated generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} setGeneratedTitle={(newTitle) => setGeneratedTitle(newTitle)} updateSectionContent={updateSectionContent} id="page-1" color={'#046CF1'} doneGeneration={doneGeneration} />
              </m.div>
              )
            }
          </div>
          {
            length >= 3 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(2, 4)} indexSection={2} id="page-2" color={'#046CF1'} doneGeneration={doneGeneration} updateSectionContent={updateSectionContent}/>
              </m.div>
            )
          }
          <div>
          {
            length >= 5 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(4, 6)} indexSection={4} id="page-3" color={'#046CF1'} doneGeneration={doneGeneration} updateSectionContent={updateSectionContent}/>
              </m.div>
            )
          }
          {
            length >= 7 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(6, 8)} indexSection={6} id="page-3" color={'#046CF1'} doneGeneration={doneGeneration} updateSectionContent={updateSectionContent}/>
              </m.div>
            )
          }
          </div>
      </div>
      <div className="hidden sm:block">
        {
          length >= 1 && (
            <div>
              <AnimatePresence>
                {!doneGeneration && (
                  <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                    <PageTitleReportGenerated generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} color={'#046CF1'} id="page-1" />
                  </m.div>
                )}
                {doneGeneration && (
                  <m.div initial="hidden" variants={fadeIn("right", "spring", 1, 0.75)} animate={"show"} className="w-full">
                    <PageTitleReportGeneratedEdit generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} updateSectionContent={updateSectionContent} setGeneratedTitle={(newTitle) => setGeneratedTitle(newTitle)} color={'#046CF1'} id="page-1" />
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        }
        {
          length >= 4 && (
            <div>
              <AnimatePresence>
                {!doneGeneration && (
                  <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                    <PageReportGenerated generatedSections={generatedSections.slice(3, 6)} indexSection={4} color={'#046CF1'} id="page-2" />
                  </m.div>
                )}
                {doneGeneration && (
                  <m.div initial="hidden" variants={fadeIn("right", "spring", 1, 0.75)} animate={"show"}  className="w-full">
                    <PageReportGeneratedEdit generatedSections={generatedSections.slice(3, 6)} updateSectionContent={updateSectionContent} indexSection={3} color={'#046CF1'} id="page-2" />
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        }
        {
          length >= 7 && (
            <div>
              <AnimatePresence>
                {!doneGeneration && (
                  <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                    <PageReportGenerated generatedSections={generatedSections.slice(6, 9)} indexSection={7} color={'#046CF1'} id="page-2" />
                  </m.div>
                )}
                {doneGeneration && (
                  <m.div initial="hidden" variants={fadeIn("right", "spring", 1, 0.75)} animate={"show"}  className="w-full">
                    <PageReportGeneratedEdit generatedSections={generatedSections.slice(6, 9)} updateSectionContent={updateSectionContent} indexSection={6} color={'#046CF1'} id="page-2" />
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CoverLetterTemplate;
