import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageTitleReportGenerated = ({generatedTitle, generatedSections}) => {
  return (
    <div className="a4-container align-center flex gap-x-4 mb-2">
      <div className="a4 py-[30px] md:py-[25px] lg:py-[30px] xl:py-[30px] sm:px-10 md:px-8 lg:px-10 xl:px-12">
        <h2 className="font-bold text-center pb-2">{generatedTitle}</h2>
        <div className={`py-3 hidden sm:block md:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-3">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + 1}`}
                        src={`/img/icon${index + 1}black.svg`}
                        width={25}
                        height={25}
                        className="max-w-[30px]"
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
        <div className={`hidden md:block lg:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-2">
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
        <div className={`py-4 hidden lg:block xl:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-2">
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
        <div className={`py-3 hidden xl:block`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-4">
              <div className="flex items-center py-2">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + 1}`}
                        src={`/img/icon${index + 1}black.svg`}
                        width={30}
                        height={30}
                        className="max-w-[30px]"
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
    </div>
  )
}

export default PageTitleReportGenerated;
