import '../styles.scss';

const EqualsButton = (props) => {
  return (
    <input type="button" id="equals-btn" value={props.value} onClick={props.handleEquals}/>
  );
}

export default EqualsButton;