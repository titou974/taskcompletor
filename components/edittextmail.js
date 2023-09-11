
const EditTextMail = ({mail, setMail}) => {
    return (
        <div>
            <textarea
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            rows={10}
            className={`text-sm w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700`}
            placeholder=""
            />
        </div>
    )
}

export default EditTextMail;