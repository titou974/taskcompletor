import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageReport = ({generatedSections, indexSection}) => {
  return (
    <div className="a4-container-example align-center flex gap-x-4 mb-2">
      <div className="a4-example py-[35px] md:py-[20px] lg:py-[50px] xl:py-[55px] sm:px-10 md:px-5 lg:px-10">
        <div className={`py-3 block md:hidden`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-2">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + indexSection}`}
                        src={`/img/icon${index + indexSection}black.svg`}
                        width={25}
                        height={25}
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
              <div className="flex items-center py-1">
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
            <div key={index} className="py-1">
              <div className="flex items-center py-3">
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
            <div key={index} className="py-2">
              <div className="flex items-center py-3">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + indexSection}`}
                        src={`/img/icon${index + indexSection}black.svg`}
                        width={30}
                        height={30}
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

export default PageReport;
