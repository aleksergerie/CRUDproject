import classes from "./RemoveItemConfirmation.module.css";

function RemoveItemConfirmation(props) {
  return (
    <div className={classes.remove}>
      <h2>Do you really want to cancel your presence to this event?</h2>
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
export default RemoveItemConfirmation;
