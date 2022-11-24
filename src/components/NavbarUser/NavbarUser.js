import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarUser;