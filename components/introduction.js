"use client"

import styles from "./style";
import { m, AnimatePresence } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import ReportIntroTemplate from "./doctemplates/introtemplates/reportintrotemplates";
import TypewriterComponent from "typewriter-effect";
import { docType } from "../utils/constants";
import MessageTemplateIntro from "./doctemplates/introtemplates/messageintrotemplate";
import MailTemplateIntro from "./doctemplates/introtemplates/emailintrotemplate";


const Introduction = () => {
  const [displayedText, setDisplayedText] = useState("");
  const introductionTexts = ["Générez en quelques secondes ", "des Rapports en PDF...", "des Messages...", "des Emails...", "des Lettres de Motivation..."];
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [showReportExample, setShowReportExample] = useState(false);
  const [showMessageExample, setShowMessageExample] = useState(false);
  const [showEmailExample, setShowEmailExample] = useState(false);
  const [showCoverLetterExample, setShowCoverLetterExample] = useState(false);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsBubbleVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(typewriterRef.current);

    return () => {

      observer.disconnect();
    };
  }, []);


  return (
    <div className={`${styles.padding} relative h-screen overflow-hidden flex flex-col gap-5`}>
      <m.div initial="hidden" variants={fadeIn("right", "spring", 0.25, 0.75)} whileInView="show" viewport={{once: true}} className="flex justify-center items-center bg-[#e1e5e6] w-full lg:w-1/2 h-[100px] md:min-h-[70px] md:h-[70px] lg:min-h-[100px] rounded-full mx-auto relative  shadow-xl mt-2 sm:my-0">
        <div className="break-words mx-auto w-10/12 text-center hide-br py-2 xl:text-lg" ref={typewriterRef}>
          {isBubbleVisible && (
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.changeDelay(50)
                  .changeDeleteSpeed(1)
                  .callFunction(() => {
                    setShowEmailExample(false);
                  })
                  .callFunction(() => {
                    setShowReportExample(true);
                  })
                  .typeString(`${introductionTexts[0]}<br>`)
                  .typeString(`<strong style="color: #046CF1">${introductionTexts[1]}</strong>`)
                  .pauseFor(1000)
                  .deleteChars(22)
                  .callFunction(() => {
                    setShowReportExample(false);
                  })
                  .callFunction(() => {
                    setShowMessageExample(true);
                  })
                  .typeString(`<strong style="color: #046CF1">${introductionTexts[2]}</strong>`)
                  .pauseFor(2000)
                  .deleteChars(15)
                  .callFunction(() => {
                    setShowMessageExample(false);
                  })
                  .callFunction(() => {
                    setShowEmailExample(true);
                  })
                  .typeString(`<strong style="color: #046CF1">${introductionTexts[3]}</strong>`)
                  .pauseFor(2000)
                  .deleteAll(1)
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
              options={{
                delay: 100,
                loop: true
              }}
            />
          )}
        </div>
        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-[-3px]">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.8343 12.2325C27.6179 9.57876 31.8984 7.62554 37.213 5.95954L16.8464 8.35511L16.7825 8.3461C11.9203 7.66142 8.53897 6.72376 5.79824 5.20085C3.5731 3.96441 1.79661 2.35685 -1.30763e-05 0.239299C1.07392 5.5388 2.18101 9.47094 3.60938 12.8698C5.20729 16.6721 7.21585 19.8273 10.061 23.4931L10.1464 23.603L10.5276 26.8444C14.9 20.2582 18.9339 15.6694 23.8343 12.2325Z" fill="#E1E5E6"/>
        </svg>
      </m.div>
      <div className="w-full">
        <AnimatePresence>
          { showReportExample && (
            <m.div initial="hidden" variants={fadeIn("right", "spring", 0.33, 0.75)} exit="hidden" whileInView="show" viewport={{once: true}}>
              <ReportIntroTemplate  generatedTitle={docType[0].example.title} generatedSections={docType[0].example.sections} length={6} />
            </m.div>
          )}
          { showMessageExample && (
            <m.div initial="hidden" variants={fadeIn("right", "spring", 0.33, 0.75)} exit="hidden" whileInView="show" viewport={{once: true}} className="text-white w-full lg:w-1/2 mx-auto">
              <MessageTemplateIntro messageText={docType[1].example.messageText} dest={docType[1].example.dest} />
            </m.div>
          )}
          { showEmailExample && (
            <m.div initial="hidden" variants={fadeIn("right", "spring", 0.33, 0.75)} exit="hidden" whileInView="show" viewport={{once: true}} className="text-white w-full lg:w-1/2 mx-auto">
              <MailTemplateIntro name={docType[2].example.name}  fullmail={docType[2].example.fullmail} language={docType[2].example.language} />
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <m.div initial="hidden" variants={fadeIn("right", "spring", 0.4, 0.75)} whileInView="show" viewport={{once: true}} className={`${styles.paddingX} w-full fixed bottom-8 left-1 right-1`}>
        <Link
          href="/generator" className={`font-bold my-8 z-10 rounded-md mx-auto`}
        >
            <m.button className="cta3 w-full md:w-1/2 mx-auto" whileInView="show" viewport={{once: true}}>
              <p className={`xl:text-[40px] md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px]`}>Créer</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="pt-[6px] w-[14px] sm:w-[17px]"
              />
            </m.button>
        </Link>
      </m.div>
    </div>
  )
};

export default Introduction;
