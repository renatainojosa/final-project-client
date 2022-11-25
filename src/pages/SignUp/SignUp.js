import "./SignUp.css";
import CardSignup from "../../components/CardSignup/CardSignup";
import imageProfile from '../../images/avatar-profile.png'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div>
        <h2>Who you are?</h2>
      </div>
        <div className="cards">
          <CardSignup type="I am a Person" route="/signup/user" image={imageProfile} />
          <CardSignup type="I am a ONG" route="/signup/ong" image={imageProfile} />
        </div>
      </div>
  );
};

export default SignUp;
