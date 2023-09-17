"use client"
import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import PageTitleReportPhone from "./pagetitlereportphone";
import PageTitleReport from "./pagetitlereport";
import PageReportPhone from "./pagereportphone";
import PageReport from "./pagereport";
let replacedLogo;
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const regexTitle = /^\d+\.\s(.+)/;

const ReportExample = ({ generatedTitle, generatedSections, length }) => {

  // const [sectionMustBeSplitted, setSectionMustBeSplitted] = useState("")
  // const [sectionIndexMustBeSplitted, setSectionIndexMustBeSplitted] = useState(0)
  // let matchingSections = []

  // useEffect(() => {
  //   {/* Select the first array to be splitted */}
  //   console.log(sectionIndexMustBeSplitted)
  //   if (matchingSections.length !== 0) {
  //     setSectionMustBeSplitted(matchingSections[0])
  //     setSectionIndexMustBeSplitted(matchingSections[1])
  //   }
  // },)


  // generatedSections.reduce((accumulator, instance, index) => {
  //   const instanceLength = instance[2].length;
  //   if (accumulator + instanceLength > 890) {
  //     matchingSections.push(instance[2])
  //     matchingSections.push(index)
  //   }
  //   return accumulator + instanceLength;
  // }, 0);



  return (
    <div className="w-full mx-auto">
      {/* Caroussel */}

      <div className="sm:hidden relative" >
        <Carousel infiniteLoop autoPlay interval={5000} showArrows={false} showStatus={false} showThumbs={false}>
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
        <div className="pages-nav-phone absolute left-1/2">
        </div>
      </div>
      <div className="hidden sm:block">
        <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
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
