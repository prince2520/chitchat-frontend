import './EditProfile.css';
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";
import Button from "../../../../Helper/Button/Button";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import Resizer from "react-image-file-resizer";
import {useContext, useEffect, useRef, useState} from "react";
import AuthContext from "../../../../Context/auth";
import {storage} from "../../../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {AuthActions} from "../../../../store/user";
import {saveProfile} from "../../../../api";


const EditProfile = () => {
    const authData = useSelector(state => state.user);
    const authCtx = useContext(AuthContext)
    const dispatch = useDispatch();

    const [profileImage, setProfileImage] = useState(null)
    const [preview, setPreview] = useState(null);
    const imageRef = useRef();

    useEffect(() => {
        if (profileImage) {
            const readImg = new FileReader();
            readImg.onloadend = () => {
                setPreview(readImg.result);
            }
            readImg.readAsDataURL(profileImage)
        } else {
            setPreview(null)
        }
    }, [profileImage]);

    const saveProfileBackend = async (username, status, profileImageUrl = null) => {
        let data = {
            userId: authCtx.userId,
            username: username,
            status: status,
        };

        if (profileImageUrl) {
            data.profileImageUrl = profileImageUrl;
        }

        return saveProfile(authCtx.token, data);
    };

    const saveProfileDetail = async (username, status) => {
        if (profileImage) {
            let groupImageWithDate = new Date() + '-' + profileImage.name || null;

            let imageRef = ref(storage, `images/${groupImageWithDate}`);
            const uploadTask = uploadBytesResumable(imageRef, profileImage);

            await uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default :
                            console.log('Error')
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((profileImageUrl) => {
                        saveProfileBackend(username, status, profileImageUrl)
                            .then(res => {
                                dispatch(AuthActions.saveUserData({
                                    username: username,
                                    status: status,
                                    profileImageUrl: profileImageUrl
                                }));
                            })
                            .catch(err => console.log(err));
                    });
                }
            );
        } else {
            saveProfileBackend(username, status)
                .then(res => {
                    dispatch(AuthActions.saveUserData({
                        username: username,
                        status: status
                    }));
                })
                .catch(err => console.log(err));
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        let username, status;

        username = event.target[1].value;
        status = event.target[2].value;

        await saveProfileDetail(username, status)
    }


    const compressImageHandler = (event) => {
        const file = event.target.files[0]
        if (file && file.type.substr(0, 5) === "image") {
            try {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    300,
                    300,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        setProfileImage(uri)
                    },
                    "blob",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        } else {
            setProfileImage(null)
        }
    };

    return (
        <form className='create-group-container' onSubmit={(event) => submitHandler(event)}>
            <div className='heading'>
                My Profile
            </div>
            <div className={'image-edit-container'}>
                <ImageContainer src={preview ? preview : authData?.profileImageUrl}/>
                <input accept='image/*'
                       ref={imageRef} type="file"
                       style={{display: "none"}}
                       onChange={(event) => compressImageHandler(event)}/>
                <div className={'edit-btn box-shadow'} onClick={() => {
                    imageRef.current.click()
                }}>
                    <Icon icon="material-symbols:edit" fontSize={'1.5rem'} color={`var(--primary)`}/>
                </div>
            </div>
            <CustomInput defaultValue={authData?.username} type={'text'} label={'Name'} icon={'material-symbols:edit'}/>
            <CustomInput defaultValue={authData?.status} type={'text'} label={'About Me'}
                         icon={'material-symbols:edit'}/>
            <div className='create-group-btn'>
                <Button title={'Save'}/>
            </div>
        </form>
    );
};
export default EditProfile;