import PageTitleReportPhone from "./reportpages/pagetitlereportphone";
import PageTitleReport from "./reportpages/pagetitlereport";
import PageReportPhone from "./reportpages/pagereportphone";
import PageReport from "./reportpages/pagereport";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const regexTitle = /^\d+\.\s(.+)/;

const ReportExample = ({ generatedTitle, generatedSections, length }) => {


  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
        <Carousel infiniteLoop autoPlay interval={5000} showStatus={false} showThumbs={false}>
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
        </Carousel>
      </div>
      <div className="hidden sm:block">
        <Carousel infiniteLoop autoPlay interval={5000} showStatus={false} showThumbs={false} >
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
        </Carousel>
      </div>
    </div>
  );
};

export default ReportExample;
