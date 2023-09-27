import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;
import style from "../../../../css/ReportIntro.module.css";

const PageTitleReportPhoneIntro = ({generatedTitle, generatedSections}) => {
  return (
    <div className={`${style.a4ContainerIntro} align-center flex gap-x-4 mb-2`} id="page1">
      <div className={`${style.a4Intro} py-[20px] xs:py-[30px] px-5 xs:px-[34px]`}>
        <h2 className="font-bold text-center pb-2 xs:pb-4">{generatedTitle}</h2>
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

export default PageTitleReportPhoneIntro;
