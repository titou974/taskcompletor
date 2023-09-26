import PageTitleReportPhoneIntro from "./reportpages/pagetitlereportphoneintro";
import PageReportPhoneIntro from "./reportpages/pagereportphoneintro";
import PageReportIntro from "./reportpages/pagereportintro";
import PageTitleReportIntro from "./reportpages/pagetitlereportintro";



const ReportIntroTemplate = ({ generatedTitle, generatedSections, length }) => {


  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
          <div>
          {
            length >= 1 && (
              <PageTitleReportPhoneIntro generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} id="page-1" />
              )
            }
          </div>
      </div>
      <div className="hidden sm:block w-full mx-auto">
          <div>
            {
              length >= 1 && (
                <PageTitleReportIntro generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} id="page-1" />
              )
            }
          </div>
      </div>
    </div>
  );
};

export default ReportIntroTemplate;
