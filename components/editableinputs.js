const EditTextAreaReport = ({title, setTitle, sections, setSections}) => {
    const handleInputChangeSub = (index, newSub) => {
        const updatedSections = [...sections];
        updatedSections[index][1] = newSub;
        setSections(updatedSections);
    };
    const handleInputChangeParagraph = (index, newParagraph) => {
        const updatedSections = [...sections];
        updatedSections[index][2] = newParagraph;
        setSections(updatedSections);
    };     
    return (
        <>
            <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={1}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700 text-center text-lg`}
            placeholder=""
            />
            <div>
            { sections.map((section, index) => (
                <div>
                <textarea
                value={section[1]}
                onChange={(e) => handleInputChangeSub(index, e.target.value)}
                rows={1}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700`}
                placeholder=""
                />
                <textarea
                value={section[2]}
                onChange={(e) => handleInputChangeParagraph(index, e.target.value)}
                rows={6}
                className={`text-sm w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700`}
                placeholder=""
                />
                </div>
            ))}
            </div>
        </>
    )
};

export default EditTextAreaReport