import style from "../../../../css/ReportGenerated.module.css"

const PageReportGenerated = ({generatedSections, color}) => {
  return (
    <div className={`${style.a4Container} align-center flex gap-x-4 mb-2`}>
      <div className={`${style.a4} a4 py-[40px] md:py-[25px] lg:py-[50px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10`}>
        <div className={`py-3 block md:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-4">
              <div className="flex items-center py-2">
                <h3 className={`font-bold text-[${color}]`}>
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
        <div className={`hidden md:block lg:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-2">
                <h3 className={`font-bold text-[${color}]`}>
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
        <div className={`py-4 hidden lg:block xl:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center py-3">
                <h3 className={`font-bold text-[${color}]`}>
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
        <div className={`py-3 hidden xl:block`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-4">
              <div className="flex items-center py-3">
                <h3 className={`font-bold text-[${color}]`}>
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageReportGenerated;
