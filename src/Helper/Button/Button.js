import './Button.css';
const Button = (props) => {
    return(
        <div className="button-container">
            {props.title}
        </div>
    );
};

export default Button;