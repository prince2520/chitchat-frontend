import './GroupPrivateItem.css';
import ImageContainer from "../../../../../Helper/ImageContainer/ImageContainer";
const GroupPrivateItem = ({result}) => {
    return (
        <div className="group-private-item  border">
            <div className='group-private-item-left'>
                <ImageContainer src={result.groupImageUrl}/>
            </div>
            <div className='group-private-item-right'>
                <div className='group-name'>
                    {result.groupName}
                </div>
                <div className='group-created'>
                    Created At -  Aug, 2021
                </div>
            </div>
        </div>
    );
};

export default GroupPrivateItem;