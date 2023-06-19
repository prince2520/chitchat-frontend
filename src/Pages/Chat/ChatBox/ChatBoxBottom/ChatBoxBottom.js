import './ChatBoxBottom.css';
import {Icon} from "@iconify/react";
import {useContext, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {categoryState} from "../../../../common";
import {sendGroupMessage} from "../../../../socket";
import {ChatActions} from "../../../../store/chat";
import {sendGroupMessageHandler} from "../../../../api";
import AuthContext from "../../../../Context/auth";

const ChatBoxBottom = () => {
    const inputRef = useRef(null);

    const chat = useSelector(state => state.chat);
    const user = useSelector(state => state.user);

    const authCtx = useContext(AuthContext);

    const dispatch = useDispatch();

    const sendMessage = (event) => {
        event.preventDefault();
        let message = inputRef.current.value;

        if (chat.type === categoryState[0]) {
            sendGroupMessageHandler(authCtx.token, message, chat.name, user.username)
                .then(res=>{
                    console.log('result', res.result._id);
                    sendGroupMessage(
                        res.result._id,
                        chat._id,
                        message,
                        user.username,
                        user.profileImageUrl);
                })
                .catch(err=>console.log(err));

            dispatch(ChatActions.saveChatMessage({
                username: user.username,
                message: message,
                profileImageUrl: user.profileImageUrl
            }));
        }
        // else {
        //
        //     sendPrivateMessage(user.username, chat.name, message, user.profileImageUrl);
        //     sendPrivateMessageHandler(authCtx.token, user.username, chat.name, message)
        //         .then(res=>console.log(res))
        //         .catch(err => console.log(err))
        //
        //     dispatch(ChatActions.saveChatMessage({
        //         username: user.username,
        //         message: message,
        //         profileImageUrl: user.profileImageUrl
        //     }));
        // }
        inputRef.current.value = '';
    };


    return (
        <form onSubmit={(event) => sendMessage(event)}
              className='chat-box-bottom border'>
            <input ref={inputRef} type="text" placeholder={'Type Something ...'}/>
            <div className='icon-container'>
                <Icon icon="uil:smile" style={{color: 'var(--white)', fontSize: '2rem'}}/>
                <button>
                    <Icon
                        icon="mingcute:send-line" style={{color: 'var(--white)', fontSize: '2rem'}}/>
                </button>
            </div>
        </form>
    );
};

export default ChatBoxBottom;