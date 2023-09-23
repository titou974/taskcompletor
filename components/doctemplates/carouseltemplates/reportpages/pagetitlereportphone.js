import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageTitleReportPhone = ({generatedTitle, generatedSections}) => {
  return (
    <div className="a4-container-example align-center flex gap-x-4 mb-2" id="page1">
      <div className="a4-example py-[20px] xs:py-[40px] px-5 xs:px-[34px]">
        <h2 className="font-bold text-center pb-2 xs:pb-4">{generatedTitle}</h2>
          {generatedSections.map((section, index) => (
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

export default PageTitleReportPhone;
