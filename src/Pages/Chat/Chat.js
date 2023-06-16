import ChatTab from "./ChatTab/ChatTab";
import ChatBox from "./ChatBox/ChatBox";

import  './Chat.css';
import Overlay from "../../Helper/Overlay/Overlay";
import {useSelector} from "react-redux";
import NotSelectedChat from "./NotSelectedChat/NotSelectedChat";
const Chat = () => {
    const showOverlay = useSelector(state => state.overlay?.showOverlay);
    const selectedChatBox = useSelector(state => state.chat.selected);

    return (
        <div className="chat-page box-shadow border">
            {showOverlay && <Overlay/>}
            <div className={'chat-tab-container'}>
                <ChatTab/>
            </div>
            {selectedChatBox ? <ChatBox/> : <NotSelectedChat/>}
        </div>
    );
};
export default Chat;