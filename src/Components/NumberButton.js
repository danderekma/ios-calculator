import '../styles.scss';

const NumberButton = (props) => {
  const handleClick = () => {
    props.handleNumInput(props.value);
  }
  
  return (
    <input type="button" id={props.num + "-btn"} value={props.value} onClick={handleClick}/>
  );
}

export default NumberButton;