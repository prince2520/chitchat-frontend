import Button from "../../../Helper/Button/Button";
import CustomInput from "../../../Helper/CustomInput/CustomInput";

const SignUp = () => {
    return(
        <form className='login-form'>
            <span className='login-heading'>Sign Up to continue!</span>
            <p>Login to continue</p>
            <CustomInput label={'Username'} icon={'mingcute:user-4-line'}/>
            <CustomInput label={'Email'} icon={'ic:baseline-email'}/>
            <CustomInput label={'Password'} icon={'material-symbols:lock'}/>
            <CustomInput label={'Confirm Password'} icon={'material-symbols:lock'}/>
            <Button title={'Login'}/>
            <div className="link-container">
                <div>Already have an account ?</div>
                <div className="link">Login with an account</div>
            </div>
        </form>
    );
};

export default SignUp;