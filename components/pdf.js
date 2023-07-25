import Image from 'next/image';
import reactStringReplace from 'react-string-replace';
import { Document } from "@react-pdf/renderer";
let replacedLogo

const regexTitle = /^\d+\.\s(.+)/;

const PdfReport = ({generatedTitle, generatedSections, length}) => {
  return (
    <div className='w-full'>
      <div className='a4-container align-center flex gap-x-4' id="page1">
        <div className='a4'>
          <h2 className='font-bold text-center'>{generatedTitle}</h2>
          <div className='py-3'>
            {generatedSections.slice(0, 5).map((section, index) => (
              <div key={index} className='py-4'>
                <div className='report-title flex items-center py-3'>
                  {
                    replacedLogo = reactStringReplace(section[1], /\b\d+\./g, (match, i) => (
                      <Image key={`number ${index + 1}`} src={`/img/icon${index + 1}black.svg`} width={30} height={30}/>
                    ))
                  }

                  <h3 className="px-2" >
                    {
                      section[1].match(regexTitle) ? section[1].match(regexTitle)[1] : null
                    }
                  </h3>
                </div>
                <p>{section[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`a4-container ${length > 5 ? "" : "hidden"} align-center flex`} id="page2">
        <div className='a4'>
          <h2 className='font-bold text-center'>{}</h2>
          <div className='py-3'>
          {generatedSections.slice(5, length).map((section, index) => (
            <div key={index} className='py-4'>
              <div className='report-title flex items-center py-3'>
                {
                  replacedLogo = reactStringReplace(section[1], /\b\d+\./g, (match, i) => (
                  <Image key={`number ${index + 6}`} src={`/img/icon${index + 6}black.svg`} width={30} height={30} />
                  ))
                }

                <h3 className="px-2" >
                  {
                    section[1].match(regexTitle) ? section[1].match(regexTitle)[1] : null
                  }
                </h3>
              </div>
              <p>{section[2]}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Document>
        
      </Document>
    </div>
  )
};

export default PdfReport;
