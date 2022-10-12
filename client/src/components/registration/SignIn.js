import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import classes from "./SignIn.module.css";

const initializeState = {
  email: "",
  password: "",
};
function SignIn(props) {
  const [state, setState] = useState(initializeState);
  const { email, password } = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const loadData = async () => {
    const response = await axios
      .get(
        `http://localhost:5000/api/get/registration/${encodeURIComponent(
          email
        )}/${encodeURIComponent(password)}`
      )
      .catch((err) => toast.error(err.response.data));

    props.setUserId(response.data.id);
    toast.success("You Signed In Successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter a value into each field");
    } else {
      loadData();
    }

    setTimeout(() => navigate("/"), 500);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
export default SignIn;
