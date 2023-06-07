import './ChatBoxBottom.css';
import {Icon} from "@iconify/react";
const ChatBoxBottom = () => {
    return(
        <div className='chat-box-bottom border'>
            <input type="text" placeholder={'Type Something ...'}/>
            <div className='icon-container'>
                <Icon icon="uil:smile" style={{color:'var(--white)', fontSize:'2rem'}} />
                <Icon icon="mingcute:send-line" style={{color:'var(--white)', fontSize:'2rem'}}/>
            </div>
        </div>
    );
};

export default ChatBoxBottom;