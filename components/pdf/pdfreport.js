import reactStringReplace from "react-string-replace";
let replacedLogo;

const regexTitle = /^\d+\.\s(.+)/;

const RenderReport = ({ generatedTitle, generatedSections, length }) => {
  return (
    <div className="w-full mx-auto">
      <div className="a4-container align-center flex gap-x-4 mb-2" id="page1">
        <div className="a4 py-[80px] px-5">
          <h2 className="font-bold text-center">{generatedTitle}</h2>
          <div className={`py-3 xs:hidden`}>
            {generatedSections.slice(0, 2).map((section, index) => (
              <div key={index} className="py-4">
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
        </div>
      </div>
      <div
        className={`a4-container ${
          length > 2 ? "xs:hidden" : "hidden"
        } align-center flex`}
        id="page2"
      >
        <div className="a4 px-5 py-10">
          <div className="py-3 xs:hidden">
            {generatedSections.slice(2, 4).map((section, index) => (
              <div key={index} className="py-3">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 3}`}
                          src={`/img/icon${index + 3}black.svg`}
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
      <div
        className={`a4-container ${
          length > 4 ? "xs:hidden" : "hidden"
        } align-center flex`}
        id="page2"
      >
        <div className="a4 px-5 py-10">
          <div className="py-3 xs:hidden">
            {generatedSections.slice(4, 6).map((section, index) => (
              <div key={index} className="py-3">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 5}`}
                          src={`/img/icon${index + 5}black.svg`}
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
      <div
        className={`a4-container ${
          length > 6 ? "xs:hidden" : "hidden"
        } align-center flex`}
        id="page2"
      >
        <div className="a4 px-5 py-10">
          <div className="py-3 xs:hidden">
            {generatedSections.slice(6, 8).map((section, index) => (
              <div key={index} className="py-3">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 7}`}
                          src={`/img/icon${index + 7}black.svg`}
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
    </div>
  );
};

export default RenderReport;
