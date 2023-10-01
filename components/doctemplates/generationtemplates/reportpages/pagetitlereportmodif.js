import style from "../../../../css/ReportGenerated.module.css"
import { useState } from "react";

const PageTitleReportGeneratedEdit = ({generatedTitle, generatedSections, color, setGeneratedTitle, updateSectionContent}) => {

  const [sectionTextModified, setSectionTextModified] = useState("")

  return (
    <div className={`${style.a4ContainerEdit} align-center flex gap-x-4 mb-2`}>
      <div className={`${style.a4Edit} py-[40px] md:py-[60px] lg:py-[70px] xl:py-[100px] sm:px-10 md:px-15 lg:px-20 xl:px-[110px]`}>
        <h2 className={`text-center`}>
          <textarea className={`${style.titleTextArea} text-center`} value={generatedTitle} rows={1} onChange={(e) => setGeneratedTitle(e.target.value)} />
        </h2>
        <div className={`py-1 hidden sm:block md:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="pb-4 pt-2">
              <div className="flex items-center py-2">
                <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index, 1, e.target.value)} rows={1}/>
              </div>
              <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index, 2, e.target.value)} rows={5}/>
            </div>
          ))}
        </div>
        <div className={`hidden md:block lg:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center py-3 font-bold">
                <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index, 1, e.target.value)} rows={1}/>
              </div>
              <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index, 2, e.target.value)} rows={5}/>
            </div>
          ))}
        </div>
        <div className={`py-4 hidden lg:block xl:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-5">
              <div className="flex items-center py-4">
                <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index, 1, e.target.value)} rows={1}/>
              </div>
                <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index, 2, e.target.value)} rows={5}/>
            </div>
          ))}
        </div>
        <div className={`py-3 hidden xl:block`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-8">
              <div className="flex items-center py-5">
                <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index, 1, e.target.value)} rows={1}/>
              </div>
              <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index, 2, e.target.value)} rows={5}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageTitleReportGeneratedEdit;
