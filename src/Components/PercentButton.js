import "../styles.scss";

const PercentButton = (props) => {
  return (
    <input
      type="button"
      id="percent-btn"
      value={props.value}
      onClick={props.handlePercent}
    />
  );
};

export default PercentButton;
