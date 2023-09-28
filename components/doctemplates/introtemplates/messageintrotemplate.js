"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from "../../../utils/motion";
import style from "../../../css/ImessageIntro.module.css"

const MessageTemplateIntro = ({messageText, dest}) => {
    const [paragraphes, setParagraphes] = useState([]);
    const [messageCopied, setMessageCopied] = useState(false);
    const [destInitial, setDestInitial] = useState('');

    const regexSelector = (messageText) => {
        const regexParagraphsSplit = /\n+/;
        setParagraphes(messageText.split(regexParagraphsSplit))
    }

    const copyMessage = () => {
        navigator.clipboard.writeText(messageText);
        setMessageCopied(true);
    }

    useEffect(() => {
        regexSelector(messageText);
        handleContactName();
    }, [messageText])

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
        <div className={`${style.imessageContainerIntro} w-full rounded-md text-[10px] 2xl:text-[15px] max-w-[521px] 2xl:max-w-1/2 mx-auto`}>
            <div className={`${style.imessageBarIntro} rounded-md`}>
                <div className={`${style.imessageContactIntro}`}>
                    <p>{destInitial}</p>
                </div>
                <div className={style.imessageNameIntro}>
                    <p className="pt-[2px]">{dest}</p>
                    <FontAwesomeIcon icon={faChevronRight} className="w-[5px] lg:w-[8px] text-[#A8AEBC]"/>
                </div>
            </div>
            <div className='px-5 py-5 md:p-3 2xl:py-10 '>
                <div className={`${style.imessageBubbleIntro} relative`}>
                    <button className={`absolute top-[-30px] right-0 bg-tertiary px-2 py-2 rounded-md font-bold hover:bg-white hover:text-black transition-colors w-9/12 md:w-1/2 text-[10px] 2xl:text-[15px] border-white border-2`} onClick={copyMessage}>
                        {messageCopied ? "Copié ✅" : "Copier le Message"}
                    </button>
                {
                    paragraphes.map((paragraph, index) => (
                        <p className={`${style.imessageTextIntro} my-2 2xl:my-5`} key={`paragraph${index}`} >{paragraph}</p>
                    ))
                }
                <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-13px] right-[-1px]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.0188 12.2934C20.2739 9.01283 22.9225 5.12408 25.4628 0.167536L19.6593 19.8361L19.6573 19.9007C19.5103 24.8087 19.863 28.2998 20.9007 31.2585C21.7433 33.6606 23.0274 35.6833 24.8109 37.812C19.7691 35.8577 16.0807 34.1019 12.9722 32.1196C9.49466 29.902 6.7243 27.3891 3.59219 23.9652L3.49827 23.8625L0.367964 22.9389C7.59849 19.7427 12.803 16.5424 17.0188 12.2934Z" fill="#046CF1"/>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default MessageTemplateIntro;
