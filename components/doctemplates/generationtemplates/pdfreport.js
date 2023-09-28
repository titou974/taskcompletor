import { m } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import PageTitleReportPhoneGenerated from "../generationtemplates/reportpages/pagetitlereportphonegenerated";
import PageTitleReportGenerated from "../generationtemplates/reportpages/pagetitlereportgenerated";
import PageReportPhoneGenerated from "../generationtemplates/reportpages/pagereportphonegenerated";
import PageReportGenerated from "../generationtemplates/reportpages/pagereportgenerated";

const regexTitle = /^\d+\.\s(.+)/;

const ReportTemplate = ({ generatedTitle, generatedSections, length }) => {
  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
          <div>
          {
            length >= 1 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageTitleReportPhoneGenerated generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} id="page-1" color={'#046CF1'} />
              </m.div>
              )
            }
          </div>
          {
            length >= 3 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(2, 4)} indexSection={3} id="page-2" color={'#046CF1'}/>
              </m.div>
            )
          }
          <div>
          {
            length >= 5 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(4, 6)} indexSection={5} id="page-3" color={'#046CF1'}/>
              </m.div>
            )
          }
          {
            length >= 7 && (
              <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
                <PageReportPhoneGenerated generatedSections={generatedSections.slice(6, 8)} indexSection={5} id="page-3" color={'#046CF1'}/>
              </m.div>
            )
          }
          </div>
      </div>
      <div className="hidden sm:block">
        {
          length >= 1 && (
            <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
              <PageTitleReportGenerated generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} color={'#046CF1'} id="page-1" />
            </m.div>
          )
        }
        {
          length >= 4 && (
            <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
              <PageReportGenerated generatedSections={generatedSections.slice(3, 6)} indexSection={4} color={'#046CF1'} id="page-2" />
            </m.div>
          )
        }
        {
          length >= 7 && (
            <m.div variants={slideIn('left', 'tween', 0, 0.5)} animate="show" initial="hidden" className="w-full">
              <PageReportGenerated generatedSections={generatedSections.slice(6, 9)} indexSection={4} color={'#046CF1'} id="page-2" />
            </m.div>
          )
        }
      </div>
    </div>
  );
};

export default ReportTemplate;
