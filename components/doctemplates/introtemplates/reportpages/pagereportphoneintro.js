import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;
import style from "../../../../css/ReportIntro.module.css";

const PageReportPhoneIntro = ({generatedSections, indexSection}) => {
  return (
    <div className={`${style.a4ContainerIntro} a4-container-intro align-center flex gap-x-4 mb-2`} id="basic-page">
      <div className={`${style.a4Intro} a4-intro py-[20px] xs:py-[15px] px-5 xs:px-[34px]`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-1 xs:py-4">
                <h3 className="font-bold">
                  {section[1]}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}

      </div>
    </div>
  )
}

export default PageReportPhoneIntro;
