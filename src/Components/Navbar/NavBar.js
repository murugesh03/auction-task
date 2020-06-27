import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import BrandLogo from "../../assets/asLogo.png";
import LoginUser from "../../assets/iler-stoe-iEAvKBfqD8c-unsplash.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" fixed="top">
        <Navbar.Brand href="/">
          <img
            alt="brand logo"
            src={BrandLogo}
            width="auto"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto navBar-menu">
          <Nav.Link className="nav-link">About Us</Nav.Link>
          <Nav.Link className="nav-link">Become a Buyer</Nav.Link>
          <Nav.Link className="nav-link">Become a Seller</Nav.Link>
          <Nav.Link className="nav-link">Transactions</Nav.Link>
          <Nav.Link href="/dashboard" className="nav-links">
            Dashboard
          </Nav.Link>
          <Nav.Link className="nav-link">Hi, Daniel</Nav.Link>
          <Nav.Link className="nav-link">
            <img src={LoginUser} alt="login user" width="30" height="30" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
