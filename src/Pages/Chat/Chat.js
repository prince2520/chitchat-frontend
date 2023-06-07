import ChatTab from "./ChatTab/ChatTab";
import ChatBox from "./ChatBox/ChatBox";

import  './Chat.css';
import Overlay from "../../Helper/Overlay/Overlay";
const Chat = () => {
    return (
        <div className="chat-page box-shadow border">
            <Overlay/>
            <div className={'chat-tab-container'}>
                <ChatTab/>
            </div>
            <ChatBox/>
        </div>
    );
};
export default Chat;