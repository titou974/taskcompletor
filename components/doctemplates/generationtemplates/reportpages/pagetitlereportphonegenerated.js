import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageTitleReportPhoneGenerated = ({generatedTitle, generatedSections}) => {
  return (
    <div className="a4-container align-center flex gap-x-4 mb-2" id="page1">
      <div className="a4 py-[20px] xs:py-[25px] px-5 xs:px-[34px]">
        <h2 className="font-bold text-center pb-5 xs:pb-6">{generatedTitle}</h2>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center py-2 xs:py-3">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + 1}`}
                        src={`/img/icon${index + 1}black.svg`}
                        width={20}
                        height={20}
                        className="max-w-[25px]"
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

export default PageTitleReportPhoneGenerated;
