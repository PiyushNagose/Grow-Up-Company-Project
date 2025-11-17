import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Header.css";

const corporateLinks = [
  { name: "Quality policy", slug: "quality-policy" },
  { name: "Vision mission", slug: "vision-mission" },
  { name: "Sustainability", slug: "sustainability" },
  { name: "About us", slug: "about-us" },
];

const fruitLinks = [
  { name: "Mandarin", slug: "mandarin" },
  { name: "Lemon", slug: "lemon" },
  { name: "Pomegranate", slug: "pomegranate" },
];

const veggieLinks = [
  { name: "Cucumbers", slug: "cucumber" },
  { name: "Tomatoes", slug: "tomatoe" },
  { name: "Peppers", slug: "pepper" },
  { name: "Zucchini", slug: "zucchini" },
  { name: "Squash", slug: "squash" },
];

const NavItem = ({ title, links, baseRoute }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <NavDropdown
      title={title}
      id={`nav-dropdown-${baseRoute}`}
      show={open}
      onClick={toggleDropdown}
      className="nav-item-custom header-link-animation"
    >
      {links.map((link, idx) => (
        <NavDropdown.Item key={idx} as={Link} to={`/${baseRoute}/${link.slug}`}>
          {link.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = (e) => {
    e?.preventDefault();
    setContactOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContact = () => {
    setContactOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Navbar variant="dark" fixed="top" className={`navbar`}>
        <Container>
          <div
            className={`header-inner ${
              scrolled ? "navbar-inner-scrolled" : ""
            }`}
          >
            <Navbar.Brand
              as={Link}
              to="/"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/images/Logo.svg"
                alt="Logo"
                style={{ width: "4.5rem", height: "4.5rem" }}
                className="logo"
              />
            </Navbar.Brand>

            {/* Direct navigation links for desktop + tablet */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 4, sm: 4, md: 12 },
              }}
            >
              <Link to="/" className="header-link-animation">
                Home
              </Link>
              <NavItem
                title="Corporate"
                links={corporateLinks}
                baseRoute="corporate"
              />
              <NavItem title="Fruits" links={fruitLinks} baseRoute="products" />
              <NavItem
                title="Vegetables"
                links={veggieLinks}
                baseRoute="products"
              />

              <Button
                onClick={openContact}
                variant="outlined"
                className="contact-btn-animated"
              >
                Contact
                <AddCircleOutlineIcon sx={{ ml: 1, fontSize: "1.1rem" }} />
              </Button>
            </Box>
          </div>
        </Container>
      </Navbar>

      {/* Contact overlay */}
      <div className={`contact-overlay${contactOpen ? " show" : ""}`}>
        <div className="overlay-window contact-card">
          <button className="overlay-close" onClick={closeContact}>
            ×
          </button>
          <div className="contact-card-inner">
            <h2 className="contact-card-title">Contact information</h2>
            <div className="contact-lines">
              <div className="contact-row">
                <strong>Phone:</strong>
                <div className="contact-details">
                  <div>+90 534 29 29 764</div>
                  <div>+90 545 78 93 035</div>
                </div>
              </div>
              <div className="contact-row">
                <strong>Email:</strong>
                <div className="contact-details">freshveginf0@gmail.com</div>
              </div>
              <div className="contact-row">
                <strong>Address:</strong>
                <div className="contact-details">
                  Elmalı Mah. 21 Sk. Serbest Apt. No:1, İç Kapı No:12 Muratpaşa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
