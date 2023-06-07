import './Authentication.css';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

const Authentication = () => {
    return (
        <div className='authentication-page border box-shadow'>
            <SignUp/>
        </div>
    );
};

export default Authentication;