import "./Navbar.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import logoImg from "../../images/pets2-removebg-preview.png";

const Navbar = () => {
  const { isLoggedIn, logoutUser, userOrOng } = useContext(AuthContext);

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logoImg}
            alt="Logo"
            width="30"
            height="24"
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
                  className="nav-link active"
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
              <li className="nav-item">
                <Link to="/my-profile/my-pets" className="nav-link">
                  My Pets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-profile/new-pet" className="nav-link">
                  New Pet
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-profile" className="nav-link">
                  My Profile
                </Link>
              </li>
              <button className="btn btn-primary" onClick={logoutUser}>Logout</button>
              <li className="nav-item dropdown">
                <Link to='#'
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Hello, stranger!
                </Link>
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/my-profile'className="dropdown-item">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/my-profile/my-pets' className="dropdown-item">
                      My Pets
                    </Link>
                  </li>
                  <li>
                    <Link to='/my-profile/new-pet' className="dropdown-item">
                      Add a new pet
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={logoutUser} className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
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
