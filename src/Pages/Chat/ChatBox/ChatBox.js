import ChatBoxTop from "./ChatBoxTop/ChatBoxTop";
import ChatBoxMiddle from "./ChatBoxMiddle/ChatBoxMiddle";
import ChatBoxBottom from "./ChatBoxBottom/ChatBoxBottom";

import './ChatBox.css';

const ChatBox = () => {
    return (
        <div className="chat-box">
            <ChatBoxTop/>
            <ChatBoxMiddle/>
            <ChatBoxBottom/>
        </div>
    );
};
export default ChatBox;