import './CreateGroup.css';
import Button from "../../../../Helper/Button/Button";
import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import {Icon} from "@iconify/react";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";

const CreateGroup = () => {
    return (
        <div className='create-group-container'>
            <div className='heading'>
                Create a Group
            </div>
            <div className={'image-edit-container'}>
                <ImageContainer/>
                <div className={'edit-btn box-shadow'}>
                    <Icon icon="material-symbols:edit" fontSize={'1.5rem'} color={`var(--primary)`}/>
                </div>
            </div>
            <CustomInput label={'Name'} icon={'material-symbols:edit'} />
            <div className='create-group-btn'>
                <Button title={'Create'}/>
            </div>
        </div>
    );
};

export default CreateGroup;