import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;
import style from '../../../../css/ReportExample.module.css'

const PageReportPhone = ({generatedSections, indexSection}) => {
  return (
    <div className={`${style.a4ContainerExample} align-center flex gap-x-4 mb-2" id="basic-page`}>
      <div className={`${style.a4Example} py-[20px] xs:py-[40px] px-5 xs:px-[34px]`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2 xs:py-">
              <div className="flex items-center py-1 xs:py-4">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + indexSection}`}
                        src={`/img/icon${index + indexSection}black.svg`}
                        width={20}
                        height={20}
                        className="max-w-[20px]"
                      />
                    ),
                  ))
                }

                <h3 className="px-2">
                  {section[1].match(regexTitle)
                    ? section[1].match(regexTitle)[1]
                    : null}
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}

      </div>
    </div>
  )
}

export default PageReportPhone;
