import "../styles.scss";

const ClearButton = (props) => {
  return (
    <input
      type="button"
      id="clear-btn"
      value={props.value}
      onClick={props.handleClear}
    />
  );
};

export default ClearButton;
