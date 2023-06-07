import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import Button from "../../../../Helper/Button/Button";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";

const JoinGroup = () => {
    return (
        <div className='create-group-container'>
            <div className='heading'>
                Join a Group
            </div>
            <div className={'image-edit-container'}>
                <ImageContainer src={'https://i.imgur.com/W5U9qZB.png'}/>
            </div>
            <CustomInput label={'Name'} icon={'material-symbols:edit'}/>
            <div className='create-group-btn'>
                <Button title={'Create'}/>
            </div>
        </div>
    );
};
export default JoinGroup;