import ChatBoxTop from "./ChatBoxTop/ChatBoxTop";
import ChatBoxBottom from "./ChatBoxBottom/ChatBoxBottom";

import './ChatBox.css';
import NoMessage from "./NoMessage/NoMessage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGroupMessage} from "../../../socket";
import {ChatActions} from "../../../store/chat";
import ChatBoxMiddle from "./ChatBoxMiddle/ChatBoxMiddle";

const ChatBox = () => {
    const chat = useSelector(state => state.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        getGroupMessage((err, {userName, message, groupId, profileImageUrl}) => {
            if(chat._id === groupId){
                dispatch(ChatActions.saveChatMessage({
                    username: userName,
                    message: message,
                    profileImageUrl: profileImageUrl
                }));
            }
        })
    }, []);

    return (
        <div className="chat-box">
            <ChatBoxTop/>
            {(chat.messages.length!==0) ? <ChatBoxMiddle/> : <NoMessage/> }
            <ChatBoxBottom/>
        </div>
    );
};
export default ChatBox;