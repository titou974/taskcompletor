import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageTitleReport = ({generatedTitle, generatedSections}) => {
  return (
    <div className="a4-container-example align-center flex gap-x-4 mb-2" id="page1">
      <div className="a4-example py-[20px] xs:py-[40px] sm:py-[35px] md:py-[40px] lg:py-[50px] xl:py-[75px] px-5 xs:px-[30px] sm:px-10 lg:px-16">
        <h2 className="font-bold text-center pb-3">{generatedTitle}</h2>
        <div className={`sm:hidden`}>
          {generatedSections.slice(0, 2).map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-1 xs:py-4">
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
        <div className={`py-3 hidden sm:block md:hidden`}>
          {generatedSections.slice(0, 3).map((section, index) => (
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
        <div className={` hidden md:block lg:hidden`}>
          {generatedSections.slice(0, 3).map((section, index) => (
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
          {generatedSections.slice(0, 3).map((section, index) => (
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
        <div className={`py-3 hidden xl:block`}>
          {generatedSections.slice(0, 3).map((section, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center py-5">
                {
                  (replacedLogo = reactStringReplace(
                    section[1],
                    /\b\d+\./g,
                    (match, i) => (
                      <img
                        key={`number ${index + 1}`}
                        src={`/img/icon${index + 1}black.svg`}
                        width={35}
                        height={35}
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

export default PageTitleReport;
