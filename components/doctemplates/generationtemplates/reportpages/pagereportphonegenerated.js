import reactStringReplace from "react-string-replace";
let replacedLogo;
const regexTitle = /^\d+\.\s(.+)/;

const PageReportPhoneGenerated = ({generatedSections, color}) => {
  return (
    <div className="a4-container align-center flex gap-x-4 mb-2" id="basic-page">
      <div className="a4 py-[25px] xs:py-[40px] px-5 xs:px-[34px]">
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3 xs:py-2">
              <div className="flex items-center py-2 xs:py-4">
                <h3 className={`font-bold text-[${color}]`}>
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

export default PageReportPhoneGenerated;
