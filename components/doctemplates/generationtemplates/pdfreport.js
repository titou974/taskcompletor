import reactStringReplace from "react-string-replace";
let replacedLogo;
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../../utils/motion";
import PageTitleReportPhone from "../carouseltemplates/reportpages/pagetitlereportphone";
import PageTitleReport from "../carouseltemplates/reportpages/pagetitlereport";
import PageReportPhone from "../carouseltemplates/reportpages/pagereportphone";
import PageReport from "../carouseltemplates/reportpages/pagereport";

const regexTitle = /^\d+\.\s(.+)/;

const ReportTemplate = ({ generatedTitle, generatedSections, length }) => {
  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
          <div>
          {
            length >= 1 && (
              <PageTitleReportPhone generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} id="page-1" />
              )
            }
          </div>
          {
            length >= 3 && (
              <PageReportPhone generatedSections={generatedSections.slice(2, 4)} indexSection={3} id="page-2"/>
            )
          }
          <div>
          {
            length >= 5 && (
              <PageReportPhone generatedSections={generatedSections.slice(4, 6)} indexSection={5} id="page-3"/>
            )
          }
          </div>
        <div className="pages-nav-phone absolute left-1/2">
        </div>
      </div>
      <div className="hidden sm:block">
          <div>
            {
              length >= 1 && (
                <PageTitleReport generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} id="page-1" />
              )
            }
          </div>
          <div>
            {
              length >= 4 && (
                <PageReport generatedSections={generatedSections.slice(3, 6)} indexSection={4} id="page-2" />
              )
            }
          </div>
      </div>
    </div>
  );
};

export default ReportTemplate;
