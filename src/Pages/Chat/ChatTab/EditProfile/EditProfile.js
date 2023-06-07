import './EditProfile.css';
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";
import Button from "../../../../Helper/Button/Button";
const EditProfile = () => {
    return (
        <div className='create-group-container'>
            <div className='heading'>
                My Profile
            </div>
            <div className={'image-edit-container'}>
                <ImageContainer src={'https://i.imgur.com/W5U9qZB.png'}/>
            </div>
            <CustomInput label={'Name'} icon={'material-symbols:edit'}/>
            <CustomInput label={'About Me'} icon={'material-symbols:edit'}/>
            <div className='create-group-btn'>
                <Button title={'Save'}/>
            </div>
        </div>
    );
};
export default EditProfile;