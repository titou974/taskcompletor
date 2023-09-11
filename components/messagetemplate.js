"use client"

import {useState, useEffect} from 'react'

const MessageTemplate = ({messageText}) => {
    const [paragraphes, setParagraphes] = useState([])
    const regexSelector = (messageText) => {
        const regexParagraphsSplit = /\n+/;
        setParagraphes(messageText.split(regexParagraphsSplit))
    }

    useEffect(() => {
        regexSelector(messageText);
    })

    return (
        <div className="imessage-container w-full p-10 rounded-md">
            <div className="imessage-bubble">
            {
                paragraphes.map((paragraph) => (
                    <p className="my-5 imessage-text">{paragraph}</p>
                ))
            }
            </div>
        </div>
    )
}

export default MessageTemplate;