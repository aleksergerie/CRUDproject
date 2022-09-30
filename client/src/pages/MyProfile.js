import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import SignedIn from "../components/profile/SignedIn";
import Update from "../components/profile/Update";
import Backdrop from "../components/profile/Backdrop";
import NotSignedIn from "../components/profile/NotSignedIn";

import classes from "./MyProfile.module.css";

function MyProfilePage() {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get/1");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  if (data.length == 0) {
    return (
      <div>
        <NotSignedIn />
      </div>
    );
  } else {
    return (
      <div>
        <div className={classes.containerSignedIn}>
          {data.map((item, index) => {
            return (
              <SignedIn
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                birthdate={item.birthdate.substring(0, 10)}
              />
            );
          })}

          <button onClick={showModalHandler}>Update Profile</button>
        </div>

        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal &&
          data.map((item, index) => {
            return (
              <Update
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                birthdate={item.birthdate.substring(0, 10)}
                password={item.password}
                onClose={closeModalHandler}
              />
            );
          })}
      </div>
    );
  }
}
export default MyProfilePage;
