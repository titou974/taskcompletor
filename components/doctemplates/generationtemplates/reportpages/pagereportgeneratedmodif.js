import style from "../../../../css/ReportGenerated.module.css"

const PageReportGeneratedEdit = ({generatedSections, color}) => {
  return (
    <div className={`${style.a4ContainerEdit} align-center flex gap-x-4 mb-2`}>
      <div className={`${style.a4Edit} py-[40px] md:py-[60px] lg:py-[70px] xl:py-[100px] sm:px-10 md:px-8 lg:px-20 xl:px-[110px]`}>
        <div className={`py-3 block md:hidden`}>
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
        <div className={`hidden md:block lg:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-6">
              <div className="flex items-center py-3">
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
            <div key={index} className="py-5">
              <div className="flex items-center py-4">
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
            <div key={index} className="py-8">
              <div className="flex items-center py-5">
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

export default PageReportGeneratedEdit;
