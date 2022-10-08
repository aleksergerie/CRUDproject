import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

import Backdrop from "../profile/Backdrop";

import classes from "./EventsItem.module.css";
import AddToGoingto from "./AddToGoingto";

function EventsItem(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const user_id = 1;
  const event_id = props.id;

  const handleAdd = (e) => {
    e.preventDefault();

    async function addData() {
      const response = await axios.get(
        `http://localhost:5000/api/get/users-events/${user_id}/${event_id}/`
      );

      if (response.data.length != 0) {
        toast.error("You are already going to this event");
      } else {
        axios.post(`http://localhost:5000/api/post/event`, {
          event_id,
          user_id,
        });
        toast.success("Event Added Successfully");
      }

      setShowModal(false);
    }
    addData();
  };

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>
        <img src={props.image}></img>
      </div>
      <div>
        <h3>{props.date}</h3>
      </div>
      <div>
        <h3>
          {props.house_number} {props.street}, {props.city}, {props.postal_code}{" "}
        </h3>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <button onClick={showModalHandler}>Confirm Presence</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <AddToGoingto onClose={closeModalHandler} onConfirm={handleAdd} />
      )}
    </li>
  );
}

export default EventsItem;
