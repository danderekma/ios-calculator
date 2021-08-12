import '../styles.scss';

const SignButton = (props) => {
  return (
    <input type="button" id="sign-btn" value={props.value} onClick={props.handleSign}/>
  );
}

export default SignButton;