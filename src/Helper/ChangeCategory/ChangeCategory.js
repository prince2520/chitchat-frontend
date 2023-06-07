import './ChangeCategory.css';
import {useState} from "react";

const state = ['Group', 'Private'];
const ChangeCategory = () => {
    const [selectedChat, setSelectedChat] = useState(state[0]);

    return (
        <div className="change-category border">
            {state.map(name=><span onClick={()=>setSelectedChat(name)} className={`${selectedChat === name && 'selected'}`}>{name}</span>)}
        </div>
    );
};

export default  ChangeCategory;