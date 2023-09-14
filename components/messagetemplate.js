"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from 'react'

const MessageTemplate = ({messageText, dest}) => {
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
    })

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
        <div className="imessage-container w-full rounded-md">
            <div className='imessage-bar rounded-md'>
                <div className='imessage-contact'>
                    <p>{destInitial}</p>
                </div>
                <div className="imessage-name">
                    <p>{dest}</p>
                    <FontAwesomeIcon icon={faChevronRight} className="w-[8px] text-[#A8AEBC]"/>
                </div>
            </div>
            <div className='px-5 py-10 md:p-10'>
                <div className="imessage-bubble relative">
                    <button className={`absolute top-[-30px] right-0 bg-tertiary px-4 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-colors w-9/12 md:w-1/2`} onClick={copyMessage}>
                        {messageCopied ? "Copié ✅" : "Copier le Message"}
                    </button>
                {
                    paragraphes.map((paragraph, index) => (
                        <p className="my-5 imessage-text" key={`paragraph${index}`} >{paragraph}</p>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default MessageTemplate;
