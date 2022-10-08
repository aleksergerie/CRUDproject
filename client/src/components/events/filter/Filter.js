import classes from "./Filter.module.css";

function Filter(props) {
  return (
    <div className={classes.container}>
      <h5>Order the events by</h5>
      <ul className={classes.list}>
        <li>
          <button onClick={props.onCity}>City</button>
        </li>
        <li>
          <button onClick={props.onDate}>Date</button>
        </li>
      </ul>
    </div>
  );
}
export default Filter;
