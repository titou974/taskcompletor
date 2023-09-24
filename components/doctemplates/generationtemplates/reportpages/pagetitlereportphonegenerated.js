const PageTitleReportPhoneGenerated = ({generatedTitle, generatedSections, color}) => {
  return (
    <div className="a4-container align-center flex gap-x-4 mb-2" id="page1">
      <div className="a4 py-[20px] xs:py-[25px] px-5 xs:px-[34px]">
        <h2 className={`text-center pb-5 xs:pb-6 text-[${color}]`}>{generatedTitle}</h2>
          {generatedSections.map((section, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center py-2 xs:py-3">
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

export default PageTitleReportPhoneGenerated;
