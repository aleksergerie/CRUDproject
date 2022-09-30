import { Link } from "react-router-dom";
import classes from "./NotSignedIn.module.css";

function NotSignedIn() {
  return (
    <div className={classes.container}>
      <h2>
        You are not signed in or registered yet. Please sign in or register to
        have access to your profile.
      </h2>
      <Link to="/signinup">
        <button>Go to registration page</button>
      </Link>
    </div>
  );
}
export default NotSignedIn;
