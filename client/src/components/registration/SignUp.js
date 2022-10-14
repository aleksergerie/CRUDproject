import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import classes from "./SignUp.module.css";

const initializeState = {
    first_name: "",
    last_name: "",
    email: "",
    birthdate: "",
    password: "",
};

function SignUp() {
    const [state, setState] = useState(initializeState);
    const { first_name, last_name, email, birthdate, password } = state;
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!first_name || !last_name || !email || !birthdate || !password) {
            toast.error("Please enter a value into each field");
        } else {
            axios
                .post(`${process.env.REACT_APP_API_URL}/post`, {
                    first_name,
                    last_name,
                    email,
                    birthdate,
                    password,
                })
                .then(() => {
                    setState({
                        first_name: "",
                        last_name: "",
                        email: "",
                        birthdate: "",
                        password: "",
                    }).catch((err) => toast.error(err.response.data));
                });
            toast.success("You Registered Successfully");
        }

        setTimeout(() => navigate("/"), 500);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={first_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={last_name}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={birthdate}
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

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}
export default SignUp;
