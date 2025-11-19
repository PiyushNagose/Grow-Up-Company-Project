import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavDropdown, Container, Button, Nav } from "react-bootstrap";
import { Box, useMediaQuery } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

// --- Link Definitions ---
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

// ------------------------------------------
// NavItem Component
// ------------------------------------------
const NavItem = ({
  title,
  links,
  baseRoute,
  activeDropdown,
  setActiveDropdown,
  handleLinkClick,
  isMobileView,
  navigate,
}) => {
  const open = activeDropdown === baseRoute;
  const dropdownRef = useRef(null);

  const handleInternalLinkClick = (e, slug) => {
    e.preventDefault();
    e.stopPropagation();

    // 1. Close both menu layers
    setActiveDropdown(null);
    if (handleLinkClick) handleLinkClick();

    // 2. Force programmatic navigation
    navigate(`/${baseRoute}/${slug}`);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    if (isMobileView) {
      setActiveDropdown(open ? null : baseRoute);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobileView &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        if (open) {
          setActiveDropdown(null);
        }
      }
    }
    if (isMobileView) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setActiveDropdown, isMobileView]);

  const CustomToggleTitle = (
    <>
      {title}
      <ExpandMoreIcon
        className="static-chevron"
        sx={{ ml: 0.5, fontSize: "1.2rem" }}
      />
    </>
  );

  return (
    <div ref={dropdownRef}>
      <NavDropdown
        title={CustomToggleTitle}
        id={`nav-dropdown-${baseRoute}`}
        show={isMobileView ? open : undefined}
        onClick={isMobileView ? toggleDropdown : undefined}
        className="nav-item-custom header-link-animation no-arrow"
      >
        {links.map((link, idx) => (
          // Using a simple div container for the link (Mobile fix)
          <div key={idx} className="dropdown-item" role="menuitem">
            <Link
              to={`/${baseRoute}/${link.slug}`}
              onClick={(e) => handleInternalLinkClick(e, link.slug)}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ChevronRightIcon
                sx={{
                  fontSize: "1.2rem",
                  mr: 1.5,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              />
              <span style={{ flexGrow: 1 }}>{link.name}</span>
            </Link>
          </div>
        ))}
      </NavDropdown>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 575px)");
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const handleScroll = () => {
      // Apply 'scrolled' class when scrolled past a small amount (e.g., 20px)
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  const openContact = (e) => {
    e?.preventDefault();
    setContactOpen(true);
    closeMobileMenu();
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  // Lock body scroll when any overlay is open
  useEffect(() => {
    if (mobileMenuOpen || contactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen, contactOpen]);

  return (
    <>
      <Navbar variant="dark" fixed="top" className="navbar">
        <Container>
          <div
            className={`header-inner ${
              scrolled ? "navbar-inner-scrolled" : ""
            }`}
          >
            {/* Logo */}
            <Navbar.Brand
              as={Link}
              to="/"
              onClick={closeMobileMenu}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/Logo.svg"
                alt="Logo"
                className="logo"
                style={{
                  // Only apply inline size if mobile menu is open, let CSS handle scroll/desktop size
                  width: mobileMenuOpen ? "3.5rem" : undefined,
                  height: mobileMenuOpen ? "3.5rem" : undefined,
                  transition: "width 0.3s, height 0.3s",
                }}
              />
            </Navbar.Brand>

            {/* 🔥 DESKTOP/TABLET NAVIGATION LINKS (sm and up) */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: { sm: 4, md: 12 },
              }}
            >
              <Link to="/" className="header-link-animation">
                Home
              </Link>

              <NavItem
                title="Corporate"
                links={corporateLinks}
                baseRoute="corporate"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobileView={isSmallScreen}
                navigate={navigate}
              />
              <NavItem
                title="Fruits"
                links={fruitLinks}
                baseRoute="fruit-products"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobileView={isSmallScreen}
                navigate={navigate}
              />
              <NavItem
                title="Vegetables"
                links={veggieLinks}
                baseRoute="vegetable-products"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobileView={isSmallScreen}
                navigate={navigate}
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

            {/* MOBILE TOGGLE BUTTON (xs only) */}
            <Box sx={{ display: { xs: "block", sm: "none" }, zIndex: 1000 }}>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="text"
                sx={{
                  minWidth: 0,
                  p: 0,
                  transition: "transform 0.3s ease",
                }}
              >
                {mobileMenuOpen ? (
                  <CloseIcon sx={{ fontSize: "2rem", color: "white" }} />
                ) : (
                  <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
                )}
              </Button>
            </Box>
          </div>
        </Container>
      </Navbar>

      {/* 🔥 MOBILE MENU CONTAINER (The off-canvas overlay) */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "show" : ""}`}>
        <Nav className="mobile-nav-links">
          <Link to="/" className="mobile-link" onClick={handleMobileLinkClick}>
            Home
          </Link>

          <NavItem
            title="Corporate"
            links={corporateLinks}
            baseRoute="corporate"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            handleLinkClick={handleMobileLinkClick}
            isMobileView={true}
            navigate={navigate}
          />
          <NavItem
            title="Fruits"
            links={fruitLinks}
            baseRoute="fruit-products"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            handleLinkClick={handleMobileLinkClick}
            isMobileView={true}
            navigate={navigate}
          />
          <NavItem
            title="Vegetables"
            links={veggieLinks}
            baseRoute="vegetable-products"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            handleLinkClick={handleMobileLinkClick}
            isMobileView={true}
            navigate={navigate}
          />

          <Button
            onClick={openContact}
            variant="contained"
            sx={{
              mt: 3,
              color: "#333",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#eee",
              },
            }}
          >
            Contact
          </Button>
        </Nav>
      </div>

      {/* Contact overlay (Unchanged) */}
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
