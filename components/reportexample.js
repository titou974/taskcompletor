"use client"
import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import PageTitleReport from "./pagetitlereport";
let replacedLogo;

const regexTitle = /^\d+\.\s(.+)/;

const ReportExample = ({ generatedTitle, generatedSections, length }) => {

  // const [sectionMustBeSplitted, setSectionMustBeSplitted] = useState("")
  // const [sectionIndexMustBeSplitted, setSectionIndexMustBeSplitted] = useState(0)
  // let matchingSections = []

  // useEffect(() => {
  //   {/* Select the first array to be splitted */}
  //   console.log(sectionIndexMustBeSplitted)
  //   if (matchingSections.length !== 0) {
  //     setSectionMustBeSplitted(matchingSections[0])
  //     setSectionIndexMustBeSplitted(matchingSections[1])
  //   }
  // },)


  // generatedSections.reduce((accumulator, instance, index) => {
  //   const instanceLength = instance[2].length;
  //   if (accumulator + instanceLength > 890) {
  //     matchingSections.push(instance[2])
  //     matchingSections.push(index)
  //   }
  //   return accumulator + instanceLength;
  // }, 0);

  

  return (
    <div className="w-full mx-auto">
      <PageTitleReport generatedTitle={generatedTitle} generatedSections={generatedSections} />
      {/* < 450 px format */}
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
          <div className="py-3">
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
        id="page3"
      >
        <div className="a4 px-5 py-8">
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
      {/* < 450 px format */}
      <div
        className={`a4-container-example ${
          length > 3 ? "hidden xs:flex sm:hidden" : "hidden"
        } align-center`}
        id="page2"
      >
        <div className="a4-example px-5 py-6">
          <div className="py-3">
            {generatedSections.slice(3, 6).map((section, index) => (
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
        className={`a4-container-example ${
          length > 6 ? "hidden xs:flex sm:hidden" : "hidden"
        } align-center`}
        id="page3"
      >
        <div className="a4-example px-5 py-6">
          <div className="py-3">
            {generatedSections.slice(6, 9).map((section, index) => (
              <div key={index} className="py-3">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 6}`}
                          src={`/img/icon${index + 6}black.svg`}
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
      {/* < 640 px format */}
      <div
        className={`a4-container-example ${
          length > 4 ? "hidden sm:flex md:hidden" : "hidden"
        } align-center`}
        id="page2"
      >
        <div className="a4-example px-10 py-10">
          <div className="py-3">
            {generatedSections.slice(4, 8).map((section, index) => (
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
      {/* < 768 px format */}
      <div
        className={`a4-container-example ${
          length > 4 ? "hidden md:flex lg:hidden" : "hidden"
        } align-center`}
        id="page2"
      >
        <div className="a4-example px-10 py-16">
          <div className="py-3">
            {generatedSections.slice(4, 8).map((section, index) => (
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
      {/* < 1024 px format */}
      <div
        className={`a4-container-example ${
          length > 4 ? "hidden lg:flex xl:hidden" : "hidden"
        } align-center`}
        id="page2"
      >
        <div className="a4-example px-20 py-[120px]">
          <div className="py-3">
            {generatedSections.slice(4, 8).map((section, index) => (
              <div key={index} className="py-10">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 5}`}
                          src={`/img/icon${index + 5}black.svg`}
                          width={50}
                          height={50}
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
      {/* < 1280 px format */}
      <div
        className={`a4-container-example ${
          length > 4 ? "hidden xl:flex" : "hidden"
        } align-center`}
        id="page2"
      >
        <div className="a4-example px-20 py-[120px]">
          <div className="py-3">
            {generatedSections.slice(4, 8).map((section, index) => (
              <div key={index} className="py-10">
                <div className="flex items-center py-3">
                  {
                    (replacedLogo = reactStringReplace(
                      section[1],
                      /\b\d+\./g,
                      (match, i) => (
                        <img
                          key={`number ${index + 5}`}
                          src={`/img/icon${index + 5}black.svg`}
                          width={50}
                          height={50}
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
      {/* Caroussel */}
      <div className="caroussel-container">
        <div className="pages-wrapper">
          <div className="pages">
            <div className="a4-container-example align-center flex gap-x-4 mb-2" id="page1">
              <div className="a4-example py-[20px] lg:py-[50px] xl:py-[75px] px-5 sm:px-10 lg:px-20">
                <h2 className="font-bold text-center pb-5">{generatedTitle}</h2>
                <div className={`sm:hidden`}>
                  {generatedSections.slice(0, 2).map((section, index) => (
                    <div key={index} className="py-2">
                      <div className="flex items-center py-1">
                        {
                          (replacedLogo = reactStringReplace(
                            section[1],
                            /\b\d+\./g,
                            (match, i) => (
                              <img
                                key={`number ${index + 1}`}
                                src={`/img/icon${index + 1}black.svg`}
                                width={15}
                                height={15}
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
                  {generatedSections.slice(0, 4).map((section, index) => (
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
                <div className={`py-3 hidden md:block lg:hidden`}>
                  {generatedSections.slice(0, 4).map((section, index) => (
                    <div key={index} className="py-5">
                      <div className="flex items-center py-5">
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
                <div className={`py-3 hidden lg:block xl:hidden`}>
                  {generatedSections.slice(0, 4).map((section, index) => (
                    <div key={index} className="py-10">
                      <div className="flex items-center py-5">
                        {
                          (replacedLogo = reactStringReplace(
                            section[1],
                            /\b\d+\./g,
                            (match, i) => (
                              <img
                                key={`number ${index + 1}`}
                                src={`/img/icon${index + 1}black.svg`}
                                width={50}
                                height={50}
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
                  {generatedSections.slice(0, 4).map((section, index) => (
                    <div key={index} className="py-10">
                      <div className="flex items-center py-5">
                        {
                          (replacedLogo = reactStringReplace(
                            section[1],
                            /\b\d+\./g,
                            (match, i) => (
                              <img
                                key={`number ${index + 1}`}
                                src={`/img/icon${index + 1}black.svg`}
                                width={50}
                                height={50}
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
              {/* < 450 px format */}
            <div
              className={`a4-container-example ${
                length > 2 ? "xs:hidden" : "hidden"
              } align-center flex`}
              id="page2"
            >
              <div className="a4-example px-5 py-2">
                <div className="py-3 xs:hidden">
                  {generatedSections.slice(2, 4).map((section, index) => (
                    <div key={index} className="py-2">
                      <div className="flex items-center py-2">
                        {
                          (replacedLogo = reactStringReplace(
                            section[1],
                            /\b\d+\./g,
                            (match, i) => (
                              <img
                                key={`number ${index + 3}`}
                                src={`/img/icon${index + 3}black.svg`}
                                width={15}
                                height={15}
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
              className={`a4-container-example ${
                length > 4 ? "xs:hidden" : "hidden"
              } align-center flex`}
              id="page2"
            >
              <div className="a4-example px-5 py-2">
                <div className="py-3">
                  {generatedSections.slice(4, 6).map((section, index) => (
                    <div key={index} className="py-2">
                      <div className="flex items-center py-2">
                        {
                          (replacedLogo = reactStringReplace(
                            section[1],
                            /\b\d+\./g,
                            (match, i) => (
                              <img
                                key={`number ${index + 5}`}
                                src={`/img/icon${index + 5}black.svg`}
                                width={15}
                                height={15}
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
        id="page3"
      >
              <div className="a4 px-5 py-8">
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
        </div>
      </div>
    </div>
  );
};

export default ReportExample;
