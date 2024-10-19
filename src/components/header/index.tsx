import { Container, Navbar } from "react-bootstrap";
import BrandLogo from "./BrandLogo";
import Menus from "./menus";

const Header = () => {
  return (
    <div className="navbar-bg">
      <Navbar expand="md" className="navbar-fixed">
        <Container className="header-container">
          <BrandLogo />
          <Menus />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
