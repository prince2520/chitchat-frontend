import './ChatBoxTop.css';
import Category from "../../../../Helper/Category/Category";
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import {OverlayActions} from "../../../../store/overlay";

const ChatBoxTop = () => {

    const chat = useSelector(state => state.chat);

    return(
        <div className='chat-box-top border'>
            <ImageContainer  src={chat.photo}/>
            <div className='chat-description'>
                <span className='chat-name'>{chat.name}</span>
                <span className='chat-created'>Created by Luffy</span>
            </div>
            <Category title={'Group'}/>
        </div>
    );
};

export default ChatBoxTop;