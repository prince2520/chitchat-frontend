import Button from "../../../Helper/Button/Button";
import CustomInput from "../../../Helper/CustomInput/CustomInput";

const Login = () => {
    return(
        <form className='login-form'>
            <span className='login-heading'>Welcome Back!</span>
            <p>Login to continue</p>
            <CustomInput label={'Email'} icon={'ic:baseline-email'}/>
            <CustomInput label={'Password'} icon={'material-symbols:lock'}/>
            <Button title={'Login'}/>
            <div className="link-container">
                <div>Don't have an account ?</div>
                <div className="link">Create an account.</div>
            </div>
        </form>
    )
};

export default Login;