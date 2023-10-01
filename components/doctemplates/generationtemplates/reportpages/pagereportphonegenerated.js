import style from "../../../../css/ReportGenerated.module.css"

const PageReportPhoneGenerated = ({generatedSections, color, indexSection, updateSectionContent, doneGeneration}) => {
  return (
    <div className={`${doneGeneration ? style.a4ContainerEdit : style.a4Container} align-center flex gap-x-4 mb-2" id="basic-page"`}>
      <div className={`${doneGeneration ? style.a4Edit : style.a4} py-[30px] xs:py-[40px] px-5 xs:px-[34px]`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3 xs:py-6">
              <div className="flex items-center py-2 xs:py-4">
                {doneGeneration ? (
                  <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 1, e.target.value)} rows={1}/>
                ) : (
                  <h3 className={`font-bold`}>
                    {section[1]}
                  </h3>
                )}
              </div>
              {doneGeneration ? (
                <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index + indexSection, 2, e.target.value)} rows={6}/>
              ) : (
                <p>{section[2]}</p>
              )}
            </div>
          ))}

      </div>
    </div>
  )
}

export default PageReportPhoneGenerated;
