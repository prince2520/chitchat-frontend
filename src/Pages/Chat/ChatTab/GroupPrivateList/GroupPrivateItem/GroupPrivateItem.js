import './GroupPrivateItem.css';
import ImageContainer from "../../../../../Helper/ImageContainer/ImageContainer";
const GroupPrivateItem = () => {
    return (
        <div className="group-private-item border">
            <div className='group-private-item-left'>
                <ImageContainer/>
            </div>
            <div className='group-private-item-right'>
                <div className='group-name'>
                    ESPORTS GAMING COMMUNITY
                </div>
                <div className='group-created'>
                    Created At -  Aug, 2021
                </div>
            </div>
        </div>
    );
};

export default GroupPrivateItem;