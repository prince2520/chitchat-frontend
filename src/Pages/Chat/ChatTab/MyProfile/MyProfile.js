import './MyProfile.css';
import {Icon} from "@iconify/react";
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";

const MyProfile = () => {
    return (
        <div className={'my-profile-container border'}>
            <ImageContainer/>
            <Icon icon="gridicons:dropdown" style={{color:'var(--text)', fontSize:'3rem'}}/>
            <div className={'menu-container border box-shadow'}>
                <span>
                    Create a Group
                </span>
                <span>
                    Join a Group
                </span>
                <span>
                    Edit Profile
                </span>
                <span>
                    Logout
                </span>
            </div>
        </div>
    );
};
export default MyProfile;