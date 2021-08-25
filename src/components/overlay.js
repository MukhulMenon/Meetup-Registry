function Overlay(props) {
  return (
    <div className="modal">
      <p> Are You Sure: </p>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClick}>
        Confirm
      </button>
    </div>
  );
}
export default Overlay;
