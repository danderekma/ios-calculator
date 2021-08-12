import '../styles.scss';

const DecimalButton = (props) => {
  return (
    <input type="button" id="decimal-btn" value={props.value} onClick={props.handleDecimal}/>
  );
}

export default DecimalButton;