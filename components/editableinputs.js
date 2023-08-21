const EditTextAreaReport = ({title, setTitle, sections, setSections}) => {
    const handleInputChange = (index, newSection) => {
        const updatedSections = [...sections];
        updatedSections[index] = newSection;
        setSections(updatedSections);
    };    
    return (
        <>
            <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={2}
            className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700`}
            placeholder=""
            />
            { /* sections.map((section, index) => (
                <textarea
                value={section}
                onChange={(e) => handleInputChange(index, e.target.value)}
                rows={2}
                className={`w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2 text-gray-700 caret-gray-700`}
                placeholder=""
                />
            ))*/ }
        </>
    )
};

export default EditTextAreaReport