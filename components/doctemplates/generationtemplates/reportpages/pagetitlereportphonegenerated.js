import style from "../../../../css/ReportGenerated.module.css"

const PageTitleReportPhoneGenerated = ({generatedTitle, generatedSections, setGeneratedTitle, updateSectionContent, doneGeneration}) => {
  return (
    <div className={`${doneGeneration ? style.a4ContainerEdit : style.a4Container} align-center flex gap-x-4 mb-2" id="page1`}>
      <div className={`${doneGeneration ? style.a4Edit : style.a4} py-[20px] xs:py-[25px] px-5 xs:px-[34px]`}>
        {doneGeneration ? (
          <textarea className={`${style.titleTextArea} text-center`} value={generatedTitle} rows={1} onChange={(e) => setGeneratedTitle(e.target.value)} />
        ) : (
          <h2 className={`text-center pb-5 xs:pb-6`}>{generatedTitle}</h2>
        )}
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center py-2 xs:py-3">
                {doneGeneration ? (
                  <textarea value={section[1]} className={`${style.subtitleTextArea}`} onChange={(e) => updateSectionContent(index, 1, e.target.value)} rows={1}/>
                ) : (
                  <h3 className={`font-bold`}>
                    {section[1]}
                  </h3>
                )}
              </div>
              {doneGeneration ? (
                <textarea value={section[2]} className={`${style.sectionTextArea}`} onChange={(e) => updateSectionContent(index, 2, e.target.value)} rows={6}/>
                ) : (
                <p>{section[2]}</p>
              )}
            </div>
          ))}

      </div>
    </div>
  )
}

export default PageTitleReportPhoneGenerated;
