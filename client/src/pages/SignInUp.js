import SignUp from "../components/registration/SignUp";
import SignIn from "../components/registration/SignIn";
import classes from "./SignInUp.module.css";
function SignInUpPage() {
  return (
    <div className={classes.container}>
      <SignIn />
      <SignUp />
    </div>
  );
}
export default SignInUpPage;
