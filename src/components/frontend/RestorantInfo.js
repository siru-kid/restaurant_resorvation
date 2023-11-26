import React, { useEffect, useState } from "react";
import "./RestorantInfo.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../frontend/images/logo/lblack.png";
import Hero from "./hero";

const RestorantInfo = () => {
  const [isNavBlack, setIsNavBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavBlack(true);
      } else {
        setIsNavBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar expand="lg" variant={isNavBlack ? "light" : "dark"} fixed="top">
          <Navbar.Brand href="index.html" className="ml-3">
            <img
              src={logo}
              alt="Logo"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="ftco-nav" />
          <Navbar.Collapse id="ftco-nav">
            <Nav className="mr-5">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Work</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Hero />
    </div>
  );
};

export default RestorantInfo;
