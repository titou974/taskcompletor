import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageTitleReportGenerated = ({generatedTitle, generatedSections, color}) => {
  return (
    <div className="a4-container align-center flex gap-x-4 mb-2">
      <div className={`a4 text-[${color}] py-[40px] md:py-[25px] lg:py-[30px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10 xl:px-12`}>
        <h2 className={`text-center pb-2`}>{generatedTitle}</h2>
        <div className={`py-3 hidden sm:block md:hidden`}>
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
            <div key={index} className="py-2">
              <div className="flex items-center py-2 font-bold">
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
              <div className="flex items-center py-2">
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
              <div className="flex items-center py-2">
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

export default PageTitleReportGenerated;
