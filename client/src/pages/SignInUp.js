import { useState, useEffect } from "react";

import SignUp from "../components/registration/SignUp";
import SignIn from "../components/registration/SignIn";
import classes from "./SignInUp.module.css";

function SignInUpPage(props) {
  return (
    <div className={classes.container}>
      <SignIn setUserId={props.setUserId} userId={props.userId} />
      <SignUp />
    </div>
  );
}
export default SignInUpPage;
