

const MessageTemplate = ({paragraphes}) => {
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