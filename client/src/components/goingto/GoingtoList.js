import GoingtoItem from "./GoingtoItem";
import classes from "./GoingtoList.module.css";

function GoingtoList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.events.map((event) => (
          <GoingtoItem
            key={event.id}
            id={event.id}
            name={event.name}
            image={event.image}
            date={event.date_planned.substring(0, 10)}
            description={event.description}
          />
        ))}
      </ul>
    </div>
  );
}
export default GoingtoList;
