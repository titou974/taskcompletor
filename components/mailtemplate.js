"use client"

import { useState, useEffect } from 'react';


const MailTemplate = ({fullmail, name}) => {
    const [object, setObject] = useState('');
    const [mail, setMail] = useState('');
    const [mailParagraphes, setMailParagraphes] = useState([]);
    const [mailCopied, setMailCopied] = useState(false);
    const [objectCopied, setObjectCopied] = useState(false);

    const regexSelector = (fullmail) => {
        const regexObject = /^Objet\s*:\s*([\s\S]*?)$/gm
        const regexObjectWithoutWord = /Objet : (.+)/
        const regexParagraphsSplit = /\n+/;

        const objectWithWord = fullmail.match(regexObject);
        let object
        if (objectWithWord) {
            const matchWithoutWord = objectWithWord[0].match(regexObjectWithoutWord)
            if (matchWithoutWord) {
            object = matchWithoutWord[1];
            }
        }
        const mail = fullmail.replace(regexObject, '');
        const paragraphes = mail.split(regexParagraphsSplit);
        setObject(object);
        setMail(mail);
        setMailParagraphes(paragraphes);
    }

    useEffect(() => {
        regexSelector(fullmail)
    })

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setMailCopied(true)
    }
    const copyObject = () => {
        navigator.clipboard.writeText(object);
        setObjectCopied(true)
    }

    return (
        <div className="w-full bg-white text-black rounded-md  text-sm sm:text-base">
            <div className="flex items-center h-full border-b border-slate-300 py-4 px-5 md:px-10">
                <p><span className="font-bold">De: </span><span>{name}</span></p>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center md:justify-between h-full border-b border-slate-300 py-4 px-5 md:px-10">
                <p><span className="font-bold">Objet: </span><span>{object}</span></p>
                <button className={`px-4 py-3 mb-5 md:mb-0 rounded-md ${objectCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors`} onClick={copyObject}>{objectCopied ? "Copié ✅" : "Copier l'Objet"}</button>
            </div>
            <div className="pt-6 pb-14 px-5 md:px-10">
                <div className="w-full flex md:justify-end items-center">
                    <button className={`px-4 py-3 rounded-md ${mailCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors`} onClick={copyMail}>{mailCopied ? "Copié ✅" : "Copier l'Email"}</button>
                </div>
                { mailParagraphes.map((paragraph) => (
                    <p className='my-5 md:my-10 leading-10'>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default MailTemplate;