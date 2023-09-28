"use client"

import { useState, useEffect } from 'react';
import style from "../../../css/EmailTemplate.module.css"


const MailTemplate = ({fullmail, name, language}) => {
    const [object, setObject] = useState('');
    const [mail, setMail] = useState('');
    const [mailParagraphes, setMailParagraphes] = useState([]);
    const [mailCopied, setMailCopied] = useState(false);
    const [objectCopied, setObjectCopied] = useState(false);

    const regexSelector = (fullmail) => {
        const regexObjectFrench = /^Objet\s*:\s*([\s\S]*?)$/gm;
        const regexObjectSpanish = /^Asunto\s*:\s*([\s\S]*?)$/gm;
        const regexObjectEnglish = /^Subject\s*:\s*([\s\S]*?)$/gm;

        const objectWithWordFrench = fullmail.match(regexObjectFrench);
        const objectWithWordSpanish = fullmail.match(regexObjectSpanish);
        const objectWithWordEnglish = fullmail.match(regexObjectEnglish);

        const regexObjectWithoutWordFrench = /Objet : (.+)/;
        const regexObject2WithoutWordFrench = /Objet: (.+)/;
        const regexObjectWithoutWordSpanish = /Asunto: (.+)/;
        const regexObject2WithoutWordSpanish = /Asunto : (.+)/;
        const regexObjectWithoutWordEnglish = /Subject: (.+)/;
        const regexObject2WithoutWordEnglish = /Subject : (.+)/;


        const regexParagraphsSplit = /\n+/;

        let object;
        let mail = "";

        if (language === "français" && objectWithWordFrench) {
          const matchWithoutWordFrench = objectWithWordFrench[0].match(regexObjectWithoutWordFrench)
          const match2WithoutWordFrench = objectWithWordFrench[0].match(regexObject2WithoutWordFrench)
          if (matchWithoutWordFrench) {
            object = matchWithoutWordFrench[1];
          } else if (match2WithoutWordFrench) {
            object = match2WithoutWordFrench[1];
          }
          mail = fullmail.replace(regexObjectFrench, '');
        } else if (language === "espagnol" && objectWithWordSpanish) {
          const matchWithoutWordSpanish = objectWithWordSpanish[0].match(regexObjectWithoutWordSpanish)
          const match2WithoutWordSpanish = objectWithWordSpanish[0].match(regexObject2WithoutWordSpanish)
          if (matchWithoutWordSpanish) {
            object = matchWithoutWordSpanish[1];
          } else if (match2WithoutWordSpanish) {
            object = match2WithoutWordSpanish[1];
          }
          mail = fullmail.replace(regexObjectSpanish, '');
        } else if (language === "anglais" && objectWithWordEnglish) {
          const matchWithoutWordEnglish = objectWithWordEnglish[0].match(regexObjectWithoutWordEnglish)
          const match2WithoutWordEnglish = objectWithWordEnglish[0].match(regexObject2WithoutWordEnglish)
          if (matchWithoutWordEnglish) {
            object = matchWithoutWordEnglish[1];
          } else if (match2WithoutWordEnglish) {
            object = match2WithoutWordEnglish[1];
          }
          mail = fullmail.replace(regexObjectEnglish, '');
        }

        const paragraphes = mail.split(regexParagraphsSplit);
        setObject(object);
        setMail(mail);
        setMailParagraphes(paragraphes);
    }

    useEffect(() => {
        regexSelector(fullmail)
    }, [fullmail])

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setMailCopied(true)
    }
    const copyObject = () => {
        navigator.clipboard.writeText(object);
        setObjectCopied(true)
    }

    return (
        <div className={`w-full bg-white text-black rounded-md  text-sm sm:text-base ${style.emailTemplateFont}`}>
            <div className="flex items-center h-full border-b border-slate-300 py-4 px-5 md:px-10">
                <p><span className="font-bold">De: </span><span>{name}</span></p>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center md:justify-between h-full border-b border-slate-300 py-4 px-5 md:px-10">
                <p><span className="font-bold">Objet: </span><span>{object}</span></p>
                <button className={`px-4 py-3 mb-5 md:mb-0 rounded-md ${objectCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors w-[180px]`} onClick={copyObject}>{objectCopied ? "Copié ✅" : "Copier l'Objet"}</button>
            </div>
            <div className="pt-6 pb-14 px-5 md:px-10">
                <div className="w-full flex md:justify-end items-center">
                    <button className={`px-4 py-3 rounded-md ${mailCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors w-[180px]`} onClick={copyMail}>{mailCopied ? "Copié ✅" : "Copier l'Email"}</button>
                </div>
                { mailParagraphes.map((paragraph, index) => (
                    <p key={`paragraph${index}`} className='my-5 md:my-10 leading-5 md:leading-10'>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default MailTemplate;
