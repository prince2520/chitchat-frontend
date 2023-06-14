import './Message.css'
const Message = ({myMsg, message}) => {
    return (
        <div className={`message-container ${myMsg && 'my-message'}`}>
            <span>{message}</span>
        </div>
    );
};

export default Message;