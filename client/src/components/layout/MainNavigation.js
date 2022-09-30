import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        QuebecFestif
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/goingto">Going to</Link>
          </li>
          <li>
            <Link to="/myprofile">My profile</Link>
          </li>
          <li>
            <Link to="/signinup">Sign In/Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
