import { Link } from "react-router-dom";
import SignIn from "../components/signIn";
export default function Landing() {
  return (
    <div>
      <div>Welcome to EZ-Todo</div>
      <br></br>
      <SignIn />
      <br></br>
      <Link to="/signup">SignUp</Link>
    </div>
  );
}
