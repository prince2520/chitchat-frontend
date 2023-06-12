import Button from "../../../Helper/Button/Button";
import CustomInput from "../../../Helper/CustomInput/CustomInput";
import {Link} from "react-router-dom";


const SignUp = () => {

    return(
        <form className='login-form'>
            <span className='login-heading'>Create an account</span>
            <p>Sign Up to continue</p>
            <CustomInput type={'username'} label={'Username'} icon={'mingcute:user-4-line'}/>
            <CustomInput type={'email'} label={'Email'} icon={'ic:baseline-email'}/>
            <CustomInput type={'password'} label={'Password'} icon={'material-symbols:lock'}/>
            <CustomInput type={'password'} label={'Confirm Password'} icon={'material-symbols:lock'}/>
            <Button title={'Sign up'}/>
            <div className="link-container">
                <div>Already have an account ?</div>
                <Link to={'/login'} className="link">Login with an account</Link>
            </div>
        </form>
    );
};

export default SignUp;