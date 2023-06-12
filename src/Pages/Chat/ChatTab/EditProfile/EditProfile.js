import './EditProfile.css';
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";
import Button from "../../../../Helper/Button/Button";
import {Icon} from "@iconify/react";
import {useSelector} from "react-redux";
const EditProfile = () => {
    const authData = useSelector(state => state.user);
    console.log(authData)
    return (
        <div className='create-group-container'>
            <div className='heading'>
                My Profile
            </div>

            <div className={'image-edit-container'}>
                <ImageContainer src={authData?.profileImageUrl}/>
                <div className={'edit-btn box-shadow'}>
                    <Icon icon="material-symbols:edit" fontSize={'1.5rem'} color={`var(--primary)`}/>
                </div>
            </div>
            <CustomInput defaultValue={authData?.username} type={'text'} label={'Name'} icon={'material-symbols:edit'}/>
            <CustomInput defaultValue={authData?.status} type={'text'} label={'About Me'} icon={'material-symbols:edit'}/>
            <div className='create-group-btn'>
                <Button title={'Save'}/>
            </div>
        </div>
    );
};
export default EditProfile;