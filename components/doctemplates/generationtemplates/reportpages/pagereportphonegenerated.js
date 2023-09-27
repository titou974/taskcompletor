import style from "../../../../css/ReportGenerated.module.css"

const PageReportPhoneGenerated = ({generatedSections, color}) => {
  return (
    <div className={`${style.a4Container} align-center flex gap-x-4 mb-2" id="basic-page"`}>
      <div className={`${style.a4} py-[30px] xs:py-[40px] px-5 xs:px-[34px]`}>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3 xs:py-6">
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
