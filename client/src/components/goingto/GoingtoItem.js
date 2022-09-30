import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

import Backdrop from "../profile/Backdrop";
import RemoveItemConfirmation from "./RemoveItemConfirmation";

import classes from "./GoingtoItem.module.css";

function GoingtoItem(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();

  const handleCancelling = (e) => {
    console.log(props.id);
    e.preventDefault();

    axios.delete(`http://localhost:5000/api/remove/1/${props.id}`, {});

    toast.success("Event Removed Successfully");

    setTimeout(() => navigate(0), 500);
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
        <p>{props.description}</p>
      </div>
      <div>
        <button onClick={showModalHandler}>Cancel Presence</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <RemoveItemConfirmation
          onClose={closeModalHandler}
          onConfirm={handleCancelling}
        />
      )}
    </li>
  );
}

export default GoingtoItem;
