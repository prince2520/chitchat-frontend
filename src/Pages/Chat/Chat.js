import ChatTab from "./ChatTab/ChatTab";
import ChatBox from "./ChatBox/ChatBox";

import  './Chat.css';
import Overlay from "../../Helper/Overlay/Overlay";
import {useSelector} from "react-redux";
const Chat = () => {

    const showOverlay = useSelector(state => state.overlay?.showOverlay)

    return (
        <div className="chat-page box-shadow border">
            {showOverlay && <Overlay/>}
            <div className={'chat-tab-container'}>
                <ChatTab/>
            </div>
            <ChatBox/>
        </div>
    );
};
export default Chat;