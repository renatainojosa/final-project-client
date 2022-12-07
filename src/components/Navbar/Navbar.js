import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../images/pets2-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import NavbarOng from "../NavbarOng/NavbarOng";
import NavbarUser from "../NavbarUser/NavbarUser";
import { firstLetter } from "../../utils/other.utils";

const MainNavbar = () => {
  const { isLoggedIn, logoutUser, userOrOng } = useContext(AuthContext);
  return (
    <Navbar fixed='top' bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoImg}
            alt="Logo"
            width="50"
            height="44"
            className="d-inline-block align-text-top"
          />
          Adopt a Joseph
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn && (
              <>
                <Nav.Link
                  href="/signup"
                  className="nav-link"
                  aria-current="page"
                >
                  Sign Up
                </Nav.Link>

                <Nav.Link href="/login" className="nav-link">
                  Login
                </Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link href="/pets" className="nav-link">
                  Pets
                </Nav.Link>

                <Nav.Link href="/ongs" className="nav-link">
                  ONGs
                </Nav.Link>

                {userOrOng.type === "User" ? (
                  <NavbarUser name={firstLetter(userOrOng.name)} />
                ) : (
                  <NavbarOng name={firstLetter(userOrOng.name)} />
                )}
                <button
                  className="btn btn-new-pet btn-nav justify-content-end"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
