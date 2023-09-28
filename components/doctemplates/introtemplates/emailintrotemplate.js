"use client"

import { useState, useEffect } from 'react';
import style from "../../../css/EmailTemplate.module.css"


const MailTemplateIntro = ({fullmail, name, language}) => {
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
        <div className={`w-full bg-white text-black rounded-md  text-[8px] xs:text-[9px] md:text-[8px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px] ${style.emailTemplateFont}`}>
          <div className="flex items-center h-full border-b border-slate-300 py-2 px-5 md:px-10 lg:px-5">
              <p><span className="font-bold">De: </span><span>{name}</span></p>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center md:justify-between h-full border-b border-slate-300 py-2 px-5 md:px-10 lg:px-5">
              <p className='w-1/2 xl:w-8/12'><span className="font-bold">Objet: </span><span>{object}</span></p>
              <button className={`px-4 mb-2 md:mb-0 py-1 2xl:py-3 rounded-md ${objectCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors w-[180px] lg:w-[130px] 2xl:w-[160px]`} onClick={copyObject}>{objectCopied ? "Copié ✅" : "Copier l'Objet"}</button>
          </div>
          <div className="pt-2 pb-5 md:pb-3 px-5 md:px-10 lg:px-5">
              <div className="w-full flex md:justify-end items-center">
                  <button className={`px-4 py-1 2xl:py-3  rounded-md ${mailCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold transition-colors w-[180px] lg:w-[130px] 2xl:w-[160px]`} onClick={copyMail}>{mailCopied ? "Copié ✅" : "Copier l'Email"}</button>
              </div>
              { mailParagraphes.map((paragraph, index) => (
                  <p key={`paragraph${index}`} className='my-2 md:my-2 xl:my-3 2xl:my-5 leading-1 md:leading-3 xl:leading-4 2xl:leading-5'>{paragraph}</p>
              ))}
          </div>
        </div>
    )
}

export default MailTemplateIntro;
