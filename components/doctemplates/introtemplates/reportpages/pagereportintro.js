import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;
import style from "../../../../css/ReportIntro.module.css";


const PageReportIntro = ({generatedSections, indexSection}) => {
  return (
    <div className={`${style.a4ContainerIntro} align-center flex gap-x-4 mb-2`}>
      <div className={`${style.a4Intro} md:py-[20px] lg:py-[20px] xl:py-[10px] sm:px-10 md:px-5 lg:px-10`}>
        <div className={`py-3 block md:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-2">
                <h3 className="font-bold">
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
              <div className="flex items-center py-1">
                <h3 className="font-bold">
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
        <div className={`py-4 hidden lg:block xl:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-1">
              <div className="flex items-center py-3">
                <h3 className="font-bold">
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
        </div>
        <div className={`py-3 hidden xl:block`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-3">
                <h3 className="font-bold">
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

export default PageReportIntro;
