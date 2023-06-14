import './ChatBoxMiddle.css';
import Message from "./Message/Message";

const ChatBoxMiddle = () => {
    return(
        <div className='chat-box-middle border'>
            <Message myMsg={false} message={"Hello"}/>
        </div>
    );
};

export default ChatBoxMiddle;