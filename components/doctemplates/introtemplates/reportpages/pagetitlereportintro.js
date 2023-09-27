import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;
import style from "../../../../css/ReportIntro.module.css";

const PageTitleReportIntro = ({generatedTitle, generatedSections}) => {
  return (
    <div className={`${style.a4ContainerIntro} align-center flex gap-x-4 mb-2`}>
      <div className={`${style.a4Intro} py-[20px] md:py-[15px] lg:py-[25px] xl:py-[25px] sm:px-10 md:px-5 lg:px-10`}>
        <h2 className="font-bold text-center pb-2">{generatedTitle}</h2>
        <div className={`py-3 hidden sm:block md:hidden`}>
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

export default PageTitleReportIntro;
