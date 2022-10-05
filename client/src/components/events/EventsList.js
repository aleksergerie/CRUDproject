import EventsItem from "./EventsItem";
import classes from "./EventsList.module.css";

function EventsList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.events.map((event) => (
          <EventsItem
            key={event.id}
            id={event.id}
            name={event.name}
            image={event.image}
            date={event.date_planned.substring(0, 10)}
            description={event.description}
            street={event.street}
            house_number={event.house_number}
            postal_code={event.postal_code}
            city={event.city_name}
          />
        ))}
      </ul>
    </div>
  );
}
export default EventsList;
