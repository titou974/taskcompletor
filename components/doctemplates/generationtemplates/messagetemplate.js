"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect, useRef} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn, slideIn } from "../../../utils/motion";
import style from "../../../css/ImessageGenerated.module.css"

const MessageTemplate = ({messageText, dest, setMessageText, doneGeneration}) => {
    const [paragraphes, setParagraphes] = useState([]);
    const [messageCopied, setMessageCopied] = useState(false);
    const [destInitial, setDestInitial] = useState('');
    const [showEditForm, setShowEditForm] = useState(false);

    const editTextArea = useRef(null);

    const regexSelector = (messageText) => {
        const regexParagraphsSplit = /\n+/;
        setParagraphes(messageText.split(regexParagraphsSplit))
    }

    useEffect(() => {
        regexSelector(messageText);
        handleContactName();
    }, [messageText])

    useEffect(() => {
      if (editTextArea && editTextArea.current && showEditForm) {
        editTextArea.current.focus();
      } else {
        setShowEditForm(false)
      }
    }, [showEditForm, editTextArea, editTextArea.current])


    const handleContactName = () => {
        const names = dest.split(' ');

        if (names.length === 1) {
            const firstInitial = names[0].charAt(0).toUpperCase();
            setDestInitial(firstInitial);
        } else {
            const firstInitial = names[0].charAt(0).toUpperCase();
            const lastInitial = names[1].charAt(0).toUpperCase();
            const fullNameInitials = firstInitial + lastInitial;
            setDestInitial(fullNameInitials)
        }
    }

    return (
        <div className={`${style.imessageContainer} w-full rounded-md`}>
            <div className={`${style.imessageBar} rounded-md`}>
                <div className={`${style.imessageContact}`}>
                    <p>{destInitial}</p>
                </div>
                <div className={style.imessageName}>
                    <p>{dest}</p>
                    <FontAwesomeIcon icon={faChevronRight} className="w-[8px] text-[#A8AEBC]"/>
                </div>
            </div>
            <div className='px-5 py-10 md:p-10'>
                <motion.div variants={fadeIn("right", "spring", 0.75, 1)} className={`${style.imessageBubble} relative`}>
                  <AnimatePresence>
                    {doneGeneration && (
                      <div>
                        {!showEditForm && (
                          <motion.button onClick={(e) => setShowEditForm(true)}  initial="hidden" animate="show" exit="hidden" variants={fadeIn("top", "spring", 0.3, 1)} className={`absolute top-[-30px] right-0 bg-tertiary px-4 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-colors w-10/12 md:w-8/12 border-white border-[3px]`}>
                              {"Modifier le Message"}
                          </motion.button>
                        )}
                        {showEditForm && (
                          <button onClick={(e) => setShowEditForm(false)} className={`absolute top-[-30px] right-0 bg-tertiary px-4 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-colors w-10/12 md:w-8/12 border-white border-[3px]`}>
                            {"Valider ✅"}
                          </button>
                        )}
                      </div>
                    )}
                  </AnimatePresence>
                    {showEditForm && (
                      <textarea ref={editTextArea} autoFocus={true} rows="10" value={messageText} onChange={(e) => setMessageText(e.target.value)}  onBlur={(e) => setShowEditForm(false)} className={`w-full ${style.imessageTextarea} outline-2 rounded-md flex`}/>
                    )}
                    <div className={`rounded-md ${showEditForm ? "hidden" : ""}`} >

                        {paragraphes.map((paragraph, index) => (
                            <p className={`my-5 ${style.imessageText}`} key={`paragraph${index}`} >{paragraph}</p>
                        ))}
                    </div>
                <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-13px] right-[-1px]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.0188 12.2934C20.2739 9.01283 22.9225 5.12408 25.4628 0.167536L19.6593 19.8361L19.6573 19.9007C19.5103 24.8087 19.863 28.2998 20.9007 31.2585C21.7433 33.6606 23.0274 35.6833 24.8109 37.812C19.7691 35.8577 16.0807 34.1019 12.9722 32.1196C9.49466 29.902 6.7243 27.3891 3.59219 23.9652L3.49827 23.8625L0.367964 22.9389C7.59849 19.7427 12.803 16.5424 17.0188 12.2934Z" fill="#046CF1"/>
                </svg>
                </motion.div>
            </div>
        </div>
    )
}

export default MessageTemplate;
