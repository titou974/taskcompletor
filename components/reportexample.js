"use client"
import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import PageTitleReportPhone from "./pagetitlereportphone";
import PageTitleReport from "./pagetitlereport";
import PageReportPhone from "./pagereportphone";
import PageReport from "./pagereport";
let replacedLogo;

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
      <div className="caroussel-container">
        <div className="pages-wrapper">
          <div className="pages">
            <div className="w-full hidden sm:block">
            {
                length >= 1 && (
                  <PageTitleReport generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 3)} />
                )
              }
              {
                length >= 4 && (
                  <PageReport generatedSections={generatedSections.slice(3, 6)} indexSection={4} />
                )
              }
              {
                length >= 7 && (
                  <PageReport generatedSections={generatedSections.slice(6, 9)} indexSection={7} />
                )
              }
            </div>
            <div className="w-full sm:hidden">
            {
                length >= 1 && (
                  <PageTitleReportPhone generatedTitle={generatedTitle} generatedSections={generatedSections.slice(0, 2)} />
                )
              }
              {
                length >= 3 && (
                  <PageReportPhone generatedSections={generatedSections.slice(2, 4)} indexSection={3} />
                )
              }
              {
                length >= 5 && (
                  <PageReportPhone generatedSections={generatedSections.slice(4, 6)} indexSection={5} />
                )
              }
              {
                length >= 7 && (
                  <PageReportPhone generatedSections={generatedSections.slice(6, 8)} indexSection={7} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportExample;
