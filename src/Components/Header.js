import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Header.css";

// Navigation arrays
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

// NavItem component
const NavItem = ({ title, links, baseRoute }) => (
  <NavDropdown
    title={title}
    id={`nav-dropdown-${baseRoute}`}
    className="nav-item-custom header-link-animation"
  >
    {links.map((link, index) => (
      <NavDropdown.Item
        key={index}
        as={Link}
        to={`/${baseRoute}/${link.slug}`}
        className="dropdown-item-custom"
      >
        {link.name}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add background to inner container
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNav = (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        gap: 8,
        fontWeight: "0.5rem",
      }}
    >
      <Link to="/" className="header-link-animation">
        Home
      </Link>

      <NavItem title="Corporate" links={corporateLinks} baseRoute="corporate" />
      <NavItem title="Fruits" links={fruitLinks} baseRoute="products" />
      <NavItem title="Vegetables" links={veggieLinks} baseRoute="products" />

      <Button
        component={Link}
        to="/contact"
        variant="outlined"
        className="contact-btn-animated"
        sx={{
          color: "white",
          borderColor: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          textTransform: "none",
          ml: 2,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "transparent", // hide border on hover
          },
        }}
      >
        Contact
        <AddCircleOutlineIcon sx={{ ml: 1, fontSize: "1.1rem" }} />
      </Button>
    </Box>
  );

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="navbar">
      <Container>
        <div
          className={`header-inner ${scrolled ? "navbar-inner-scrolled" : ""}`}
        >
          {/* Logo + Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/Logo.svg"
                alt="Pokrovske Logo"
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  marginLeft: "0.3rem",
                }}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  ml: 1,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              />
            </Box>
          </Navbar.Brand>

          {/* Toggle + Collapse */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {desktopNav}

            {/* Mobile Menu */}
            <Nav className="d-block d-lg-none">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>

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

              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
