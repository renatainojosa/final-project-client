import { Link } from "react-router-dom";

const NavbarOng = () => {
  return (
    <>
      <li className="nav-item">
        <Link to="/my-profile-ong/my-pets" className="nav-link">
          My Pets
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/my-profile-ong/new-pet" className="nav-link">
          New Pet
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/my-profile-ong" className="nav-link">
          My Profile
        </Link>
      </li>
    </>
  );
};

export default NavbarOng;
