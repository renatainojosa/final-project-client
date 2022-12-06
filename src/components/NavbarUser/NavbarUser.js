import "./NavbarUser.css";
import Nav from "react-bootstrap/Nav";

const NavbarUser = ({ name }) => {
  return (
    <>
      <Nav.Link href="/my-profile/my-pets" className="nav-link">
        My Pets
      </Nav.Link>

      <Nav.Link href="/my-profile/new-pet" className="nav-link">
        New Pet
      </Nav.Link>

      <Nav.Link href="/my-profile" className="nav-link">
        Hello, {name}!
      </Nav.Link>
    </>
  );
};

export default NavbarUser;
