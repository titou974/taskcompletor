import { useState } from 'react';


const MailTemplate = ({object, mail, name}) => {
    const [mailCopied, setMailCopied] = useState(false);
    const [objectCopied, setObjectCopied] = useState(false);
    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setMailCopied(true)
    }
    const copyObject = () => {
        navigator.clipboard.writeText(object);
        setObjectCopied(true)
    }
    return (
        <div className="w-full bg-white text-black rounded-md">
            <div className="flex items-center h-full border-b border-slate-300 py-4 px-10">
                <p><span className="font-bold">De: </span><span>{name}</span></p>
            </div>
            <div className="flex items-center justify-between h-full border-b border-slate-300 py-4 px-10">
                <p><span className="font-bold">Objet: </span><span>{object}</span></p>
                <button className={`px-4 py-3 rounded-md ${objectCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold mb-5 transition-colors`} onClick={copyObject}>{objectCopied ? "Copié ✅" : "Copier l'Objet"}</button>
            </div>
            <div className="pt-6 pb-14 px-10">
                <div className="w-full flex justify-end">
                    <button className={`px-4 py-3 rounded-md ${mailCopied ? "bg-tertiary text-white" : "bg-transparent hover:bg-tertiary text-tertiary hover:text-white"} border-2 border-tertiary font-bold mb-5 transition-colors`} onClick={copyMail}>{mailCopied ? "Copié ✅" : "Copier l'Email"}</button>
                </div>
                <p className="leading-10">{mail}</p>
            </div>
        </div>
    )
}

export default MailTemplate;