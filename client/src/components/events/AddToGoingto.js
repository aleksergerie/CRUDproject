import classes from "./AddToGoingto.module.css";

function AddToGoingto(props) {
  return (
    <div className={classes.add}>
      <h2>Do you really want to confirm your presence to this event?</h2>
      <ul>
        <li>
          <button onClick={props.onConfirm}>Yes</button>
        </li>
        <li>
          <button onClick={props.onClose}>No</button>
        </li>
      </ul>
    </div>
  );
}
export default AddToGoingto;
