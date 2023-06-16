import {useState} from "react";

import './ChangeCategory.css';

const state = ['Group', 'Private'];
const ChangeCategory = ({setPrivateChatSelected}) => {
    const [selectedChat, setSelectedChat] = useState(state[0]);

    return (
        <div className="change-category border">
            {state.map(name=>
                <span
                    onClick={()=> {
                        if(name===state[0]){
                            setSelectedChat(name);
                            setPrivateChatSelected(false)
                        } else {
                            setSelectedChat(name);
                            setPrivateChatSelected(true)
                        }
                    }}
                    className={`${selectedChat === name && 'selected'}`}>{name}</span>)}
        </div>
    );
};

export default  ChangeCategory;