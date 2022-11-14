import "./Navbar.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/ongs">ONGs</Link>
      </nav>
    </div>
  );
};

export default Navbar;
