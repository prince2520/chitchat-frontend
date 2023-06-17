import ImageContainer from "../../../../Helper/ImageContainer/ImageContainer";
import Button from "../../../../Helper/Button/Button";
import CustomInput from "../../../../Helper/CustomInput/CustomInput";
import {joinGroupHandler} from "../../../../api";
import {useContext} from "react";
import AuthContext from "../../../../Context/auth";
import {useSelector} from "react-redux";

const JoinGroup = () => {
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();

        let group_name = event.target[0].value;

        joinGroupHandler(authCtx?.token, group_name, authCtx?.userId)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }

    return (
        <form onSubmit={(event)=>submitHandler(event)} className='create-group-container'>
            <div className='heading'>
                Join a Group
            </div>
            <div className={'image-edit-container'}>
                <ImageContainer src={'https://i.imgur.com/W5U9qZB.png'}/>
            </div>
            <CustomInput label={'Name'} icon={'material-symbols:edit'}/>
            <div className='create-group-btn'>
                <Button title={'Join'}/>
            </div>
        </form>
    );
};
export default JoinGroup;