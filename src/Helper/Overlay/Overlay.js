import './Overlay.css';
import Model from "./Model/Model";
import ChatTab from "../../Pages/Chat/ChatTab/ChatTab";
import {Icon} from "@iconify/react";
const Overlay = () => {
    return (
        <div className={'overlay-page'}>
            <div className={'overlay-container'}/>
            <Model/>
            <Icon className={'close-btn'} icon="iconamoon:close-bold" color={'var(--white)'} fontSize={'3rem'} />
        </div>
    );
};

export default Overlay;