import './ChatBoxBottom.css';
import {Icon} from "@iconify/react";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {categoryState} from "../../../../common";
import {sendGroupMessage} from "../../../../socket";
import {ChatActions} from "../../../../store/chat";

const ChatBoxBottom = () => {

    const inputRef = useRef(null);
    const chat = useSelector(state => state.chat);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const sendMessage = (event) => {
        event.preventDefault();
        let message = inputRef.current.value;

        if (chat.type === categoryState[0]) {
            sendGroupMessage(chat._id, message, user.username, user.profileImageUrl);

            dispatch(ChatActions.saveChatMessage({
                username: user.username,
                message: message,
                profileImageUrl: user.profileImageUrl
            }));
        }
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