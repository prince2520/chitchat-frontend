import './ChatBoxTop.css';
import Category from "../../../../Helper/Category/Category";
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../../../store/overlay";

const ChatBoxTop = () => {
    const dispatch = useDispatch();

    return(
        <div className='chat-box-top border'>
            <div>
                <Icon onClick={()=>dispatch(OverlayActions.openOverlayHandler())} icon="ic:round-menu"  color={'var(--text)'} fontSize={'2rem'}/>
            </div>
            <ImageContainer  src='https://i.imgur.com/SNl3ZA8.jpg'/>
            <div className='chat-description'>
                <span className='chat-name'>ESPORTS GAMING COMMUNITY</span>
                <span className='chat-created'>Created by Luffy</span>
                <Category title={'Group'}/>
            </div>
        </div>
    );
};

export default ChatBoxTop;