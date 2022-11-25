import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import logoImg from "../../images/pets2-removebg-preview.png";
import NavbarOng from "../NavbarOng/NavbarOng";
import NavbarUser from "../NavbarUser/NavbarUser";
import { firstLetter } from "../../utils/other.utils";

const Navbar = () => {
  const { isLoggedIn, logoutUser, userOrOng } = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logoImg}
            alt="Logo"
            width="50"
            height="44"
            className="d-inline-block align-text-top"
          />
          Adopt a Joseph
        </Link>
        <ul className="nav">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link"
                  aria-current="page"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/pets" className="nav-link">
                  Pets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ongs" className="nav-link">
                  ONGs
                </Link>
              </li>
              {userOrOng.type === "User" ? <NavbarUser name={firstLetter(userOrOng.name)}/> : <NavbarOng name={firstLetter(userOrOng.name)}/>}
              <button className="btn btn-new-pet" onClick={logoutUser}>
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className="nav">
//     <Link to="/">Home</Link>
//     {!isLoggedIn && (
//       <>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign up</Link>
//       </>
//     )}
//     {isLoggedIn && (
//       <>
//         <Link to="/pets">Pets</Link>
//         <Link to="/ongs">ONGs</Link>
//         <Link to="/my-profile">My Profile</Link>
//         <button onClick={logoutUser}>Logout</button>
//       </>
//     )}
// </nav>
