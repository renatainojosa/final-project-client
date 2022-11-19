import "./Navbar.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
      <nav className="nav">
          <Link to="/">Home</Link>
          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/pets">Pets</Link>
              <Link to="/ongs">ONGs</Link>
              <Link to="/my-profile">My Profile</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          )}
      </nav>
    
  );
};

export default Navbar;
