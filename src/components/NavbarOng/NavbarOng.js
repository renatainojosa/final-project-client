import Nav from "react-bootstrap/Nav";

const NavbarOng = ({ name }) => {
  return (
    <>
      <Nav.Link href="/my-profile-ong/my-pets" className="nav-link">
        My Pets
      </Nav.Link>

      <Nav.Link href="/my-profile-ong/new-pet" className="nav-link">
        New Pet
      </Nav.Link>

      <Nav.Link href="/my-profile-ong" className="nav-link">
        Hello, {name}!
      </Nav.Link>
    </>
  );
};

export default NavbarOng;
