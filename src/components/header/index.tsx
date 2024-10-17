import {
  Container,
  Nav,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import BrandLogo from "./BrandLogo";

const Header = () => {
  return (
    <div className="navbar-bg">
      <Navbar expand="md" className="navbar-fixed">
        <Container className="header-container">
          <BrandLogo />
          <NavbarToggle aria-controls="beej-navbar-nav" />
          <NavbarCollapse id="beej-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#investment">Investments</NavLink>
              <NavLink href="#advisory">Advisory</NavLink>
              {/* <NavLink href="#product">Product</NavLink>
              <NavLink href="#content">Content</NavLink> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
