import classes from "./Filter.module.css";

function Filter(props) {
  return (
    <ul className={classes.list}>
      <li>
        <button onClick={props.onCity}>City</button>
      </li>
      <li>
        <button onClick={props.onDate}>Date</button>
      </li>
    </ul>
  );
}
export default Filter;
