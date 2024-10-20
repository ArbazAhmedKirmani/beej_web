"use client";

import Link from "next/link";
import { Nav, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

const Menus = () => {
  const menuClicked = () => {
    document?.getElementById("beej-navbar-nav")?.classList?.toggle("show");
  };

  return (
    <>
      <NavbarToggle
        className="navbar-toggle-btn"
        aria-controls="beej-navbar-nav"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </NavbarToggle>
      <NavbarCollapse id="beej-navbar-nav">
        <Nav className="me-auto">
          <Link href="/" className="nav-link" onClick={menuClicked}>
            Home
          </Link>
          <NavLink href="/#investment" onClick={menuClicked}>
            Investments
          </NavLink>
          <Link
            href="/advisory"
            className="nav-link"
            onClick={menuClicked}
            prefetch
          >
            Advisory
          </Link>
        </Nav>
      </NavbarCollapse>
    </>
  );
};

export default Menus;
