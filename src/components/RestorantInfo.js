import React, { useEffect, useState } from "react";
import "./RestorantInfo.css";
import { Navbar, Nav, Button } from "react-bootstrap";
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
          <Navbar.Brand href="index.html">Digital</Navbar.Brand>
          <Navbar.Toggle aria-controls="ftco-nav" />
          <Navbar.Collapse id="ftco-nav">
            <Nav className="ml-auto">
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
