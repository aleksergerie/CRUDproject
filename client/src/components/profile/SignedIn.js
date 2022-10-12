import classes from "./SignedIn.module.css";

function SignedIn(props) {
  return (
    <div className={classes.container}>
      <li key={props.keySignedIn}>
        <div>
          <h2>First Name</h2>
          <h3>{props.first_name}</h3>
        </div>
        <div>
          <h2> Last Name</h2>
          <h3>{props.last_name}</h3>
        </div>
        <div>
          <h2> Email</h2>
          <h3>{props.email}</h3>
        </div>
        <div>
          <h2>Birthdate</h2>
          <h3>{props.birthdate}</h3>
        </div>
      </li>
    </div>
  );
}
export default SignedIn;
