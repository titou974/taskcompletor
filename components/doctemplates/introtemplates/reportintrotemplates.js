import PageTitleReportPhoneIntro from "./reportpages/pagetitlereportphoneintro";
import PageReportPhoneIntro from "./reportpages/pagereportphoneintro";
import PageReportIntro from "./reportpages/pagereportintro";
import PageTitleReportIntro from "./reportpages/pagetitlereportintro";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ReportIntroTemplate = ({ generatedTitle, generatedSections, length }) => {


  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
        <Carousel infiniteLoop autoPlay interval={5000} showStatus={false} showThumbs={false}>
          <div>
          {
            length >= 1 && (
              <PageTitleReportPhoneIntro generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} id="page-1" />
              )
            }
          </div>
          {
            length >= 3 && (
              <PageReportPhoneIntro generatedSections={generatedSections.slice(2, 4)} indexSection={3} id="page-2"/>
            )
          }
          <div>
          {
            length >= 5 && (
              <PageReportPhoneIntro generatedSections={generatedSections.slice(4, 6)} indexSection={5} id="page-3"/>
            )
          }
          </div>
        </Carousel>
      </div>
      <div className="hidden sm:block w-1/2 mx-auto">
        <Carousel infiniteLoop autoPlay interval={5000} showStatus={false} showThumbs={false} >
          <div>
            {
              length >= 1 && (
                <PageTitleReportIntro generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} id="page-1" />
              )
            }
          </div>
          <div>
            {
              length >= 4 && (
                <PageReportIntro generatedSections={generatedSections.slice(3, 6)} indexSection={4} id="page-2" />
              )
            }
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ReportIntroTemplate;
