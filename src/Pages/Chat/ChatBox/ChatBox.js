import ChatBoxTop from "./ChatBoxTop/ChatBoxTop";
import ChatBoxBottom from "./ChatBoxBottom/ChatBoxBottom";

import './ChatBox.css';
import NoMessage from "./NoMessage/NoMessage";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {getGroupMessage, joinGroupHandler, leaveGroupHandler} from "../../../socket";
import {ChatActions} from "../../../store/chat";
import ChatBoxMiddle from "./ChatBoxMiddle/ChatBoxMiddle";
import AuthContext from "../../../Context/auth";
import {fetchGroupMessages} from "../../../api";
import {categoryState} from "../../../common";

const ChatBox = () => {
    const chat = useSelector(state => state.chat);
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);

    const saveMessage = (data) => {
        dispatch(ChatActions.saveChatMessage(data));
    }

    useEffect(() => {
        getGroupMessage((err, { messageId, groupId, message, userName, profileImageUrl}) => {
            console.log({ messageId, groupId, message,userName, profileImageUrl})
            if(chat._id === groupId){
                let data = {
                    messageId: messageId,
                    username: userName,
                    message: message,
                    profileImageUrl: profileImageUrl
                };
                saveMessage(data);
            }
        });
    });

    // useEffect(() => {
    //     getPrivateMessage((err,{userName, message, profileImageUrl}) => {
    //         if(chat.name === userName){
    //             let data = {
    //                 username: userName,
    //                 message: message,
    //                 profileImageUrl: profileImageUrl
    //             };
    //             saveMessage(data)
    //         }
    //     })
    // }, [])


    useEffect(()=>{
        if(chat.type === categoryState[0]){
            joinGroupHandler(chat._id);
            fetchGroupMessages(chat.name, authCtx?.token)
                .then((res)=>{
                    console.log(res.messages)
                    dispatch(ChatActions.saveFetchChatMessage(res.messages));
                })
                .catch(err=>console.log(err));

            return () => {
                console.log('leave', chat._id);
                leaveGroupHandler(chat._id)
            }
        }
    },[chat._id])

    return (
        <div className="chat-box">
            <ChatBoxTop/>
            {(chat.messages.length!==0) ? <ChatBoxMiddle/> : <NoMessage/> }
            <ChatBoxBottom/>
        </div>
    );
};
export default ChatBox;