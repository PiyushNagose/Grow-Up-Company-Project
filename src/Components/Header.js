// Header.js — Offcanvas: close-first-then-navigate to avoid sticky body overflow
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Container,
  Button,
  Nav,
  Offcanvas,
  Accordion,
} from "react-bootstrap";
import { Box, useMediaQuery } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

/* --- Link Definitions --- */
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

/* ------------------------------------------
   NavItem Component (keeps original behavior)
-------------------------------------------*/
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
    setActiveDropdown(null);
    if (handleLinkClick) handleLinkClick();
    // close-first-then-navigate pattern: small delay to allow menu hide
    setTimeout(() => navigate(`/${baseRoute}/${slug}`), 180);
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
        if (open) setActiveDropdown(null);
      }
    }
    if (isMobileView)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, isMobileView, setActiveDropdown]);

  const CustomToggleTitle = (
    <>
      {title}
      <ExpandMoreIcon
        className="static-chevron"
        sx={{
          ml: 0.5,
          fontSize: "1.2rem",
          color: isMobileView ? "black" : "rgba(255,255,255,0.9)",
        }}
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
        menuVariant="light"
      >
        {links.map((link, idx) => (
          <div
            key={idx}
            className="dropdown-item"
            role="menuitem"
            style={{
              background: isMobileView ? "#ffffff" : undefined,
              padding: isMobileView ? 0 : undefined,
            }}
          >
            <a
              href={`/${baseRoute}/${link.slug}`}
              onClick={(e) => handleInternalLinkClick(e, link.slug)}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#222",
                width: "100%",
                padding: "10px 18px",
              }}
            >
              <ChevronRightIcon
                sx={{ fontSize: "1.1rem", mr: 1.5, color: "#333" }}
              />
              <span style={{ flexGrow: 1 }}>{link.name}</span>
            </a>
          </div>
        ))}
      </NavDropdown>
    </div>
  );
};

/* ------------------------------------------
   MobileMenu (Offcanvas) — close-first-then-navigate pattern
-------------------------------------------*/
const MobileMenu = ({ show, handleClose, navigate, openContact }) => {
  // IMPORTANT: when navigating, first close the offcanvas, then navigate after short delay
  const handleNavClick = (path) => {
    // close the offcanvas immediately
    handleClose?.();
    // navigate after small delay so bootstrap can remove 'overflow: hidden' etc.
    setTimeout(() => {
      navigate(path);
      // ensure body unlocked (defensive)
      document.body.style.overflow = "";
    }, 200);
  };

  const headerBg = "rgba(15, 74, 15, 0.95)";

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      aria-labelledby="mobile-menu"
      className="mobile-menu-overlay"
      backdrop={true}
      scroll={false}
      style={{ background: "transparent" }}
    >
      {/* Top header strip: green, logo left, white close icon */}
      <Offcanvas.Header
        closeButton
        closeVariant="white"
        style={{
          background: headerBg,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Offcanvas.Title id="mobile-menu" style={{ margin: 0 }}>
          <img
            src="/images/Logo.svg"
            alt="Logo"
            style={{ width: 56, height: 56 }}
          />
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body
        style={{
          padding: 0,
          background: "#ffffff",
          color: "#222",
          minHeight: "100vh",
          paddingTop: 0,
        }}
      >
        <Nav className="mobile-nav-links mt-3" style={{ color: "#222" }}>
          <a
            href="/"
            className="mobile-link"
            onClick={() => handleNavClick("/")}
            style={{
              color: "#222",
              padding: "14px 18px",
              display: "block",
              textDecoration: "none",
            }}
          >
            Home
          </a>

          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                style={{
                  color: "#222",
                  fontSize: "1.15rem",
                  background: "#fff",
                }}
              >
                Corporate
              </Accordion.Header>
              <Accordion.Body style={{ padding: 0, background: "#fff" }}>
                {corporateLinks.map((l, i) => (
                  <div key={i}>
                    <a
                      href={`/corporate/${l.slug}`}
                      onClick={() => handleNavClick(`/corporate/${l.slug}`)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 18px",
                        color: "#222",
                        textDecoration: "none",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        background: "#fff",
                      }}
                    >
                      <ChevronRightIcon sx={{ mr: 1, color: "#333" }} />
                      {l.name}
                    </a>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header
                style={{
                  color: "#222",
                  fontSize: "1.15rem",
                  background: "#fff",
                }}
              >
                Fruits
              </Accordion.Header>
              <Accordion.Body style={{ padding: 0, background: "#fff" }}>
                {fruitLinks.map((l, i) => (
                  <a
                    key={i}
                    href={`/fruit-products/${l.slug}`}
                    onClick={() => handleNavClick(`/fruit-products/${l.slug}`)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 18px",
                      color: "#222",
                      textDecoration: "none",
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      background: "#fff",
                    }}
                  >
                    <ChevronRightIcon sx={{ mr: 1, color: "#333" }} />
                    {l.name}
                  </a>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header
                style={{
                  color: "#222",
                  fontSize: "1.15rem",
                  background: "#fff",
                }}
              >
                Vegetables
              </Accordion.Header>
              <Accordion.Body style={{ padding: 0, background: "#fff" }}>
                {veggieLinks.map((l, i) => (
                  <a
                    key={i}
                    href={`/vegetable-products/${l.slug}`}
                    onClick={() =>
                      handleNavClick(`/vegetable-products/${l.slug}`)
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 18px",
                      color: "#222",
                      textDecoration: "none",
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      background: "#fff",
                    }}
                  >
                    <ChevronRightIcon sx={{ mr: 1, color: "#333" }} />
                    {l.name}
                  </a>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div style={{ marginTop: 20, padding: "0 18px 30px 18px" }}>
            <Button
              variant="light"
              onClick={() => {
                openContact();
                handleClose();
              }}
              style={{
                width: "100%",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                padding: "10px 12px",
                background: "#f8f8f8",
                color: "#222",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ color: "#222" }}>Contact</span>
              <AddCircleOutlineIcon
                sx={{ color: "#222", fontSize: "1.1rem" }}
              />
            </Button>
          </div>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

/* ------------------------------------------
   Main Header component (mobile stable spacing)
-------------------------------------------*/
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // mobile detection
  const isSmallScreen = useMediaQuery("(max-width: 575px)");
  const navigate = useNavigate();
  const location = useLocation();

  // desktop/tablet animation detection (kept)
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showHeaderRule, setShowHeaderRule] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const mqLarge = window.matchMedia("(min-width: 1024px)");
    const mqRule = window.matchMedia("(min-width: 600px)");

    const handleMqLarge = (e) => setIsLargeScreen(e.matches);
    const handleMqRule = (e) => setShowHeaderRule(e.matches);

    setIsLargeScreen(mqLarge.matches);
    setShowHeaderRule(mqRule.matches);

    mqLarge.addEventListener("change", handleMqLarge);
    mqRule.addEventListener("change", handleMqRule);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mqLarge.removeEventListener("change", handleMqLarge);
      mqRule.removeEventListener("change", handleMqRule);
    };
  }, []);

  // open/close handlers
  const handleOpenMobile = () => setShowMobileMenu(true);
  const handleCloseMobile = () => setShowMobileMenu(false);

  const openContact = () => {
    setShowContact(true);
    setShowMobileMenu(false);
  };
  const closeContact = () => setShowContact(false);

  // lock/unlock body scroll when offcanvas or contact modal is open,
  // and ensure on unmount we restore it (defensive)
  useEffect(() => {
    if (showMobileMenu || showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu, showContact]);

  // Close mobile menu and make sure body unlocked whenever route changes
  useEffect(() => {
    document.body.style.overflow = "";
    setShowMobileMenu(false);
  }, [location.pathname]);

  /* navbar base style (full-width transparent) */
  const navbarStyle = {
    backgroundColor: isSmallScreen
      ? scrolled
        ? "rgba(15, 74, 15, 0.95)"
        : "transparent"
      : "transparent",
    transition: "background-color 0.3s ease",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 999,
    background: "transparent",
    boxShadow: "none",
    border: "none",
  };

  const logoStyle = {
    width: isSmallScreen ? "4.5rem" : scrolled ? "3.5rem" : "4.5rem",
    height: isSmallScreen ? "4.5rem" : scrolled ? "3.5rem" : "4.5rem",
    transition: "width 0.3s, height 0.3s, transform 0.3s",
    transform: "scale(1)",
  };

  const innerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: isSmallScreen ? "12px" : undefined,
    paddingRight: isSmallScreen ? "12px" : undefined,
  };

  return (
    <>
      <Navbar variant="dark" fixed="top" style={navbarStyle}>
        <Container>
          <div
            className={`header-inner ${
              scrolled && !isSmallScreen ? "navbar-inner-scrolled" : ""
            }`}
            style={innerStyle}
          >
            <Navbar.Brand
              as={Link}
              to="/"
              onClick={() => {
                setShowMobileMenu(false);
                setActiveDropdown(null);
              }}
              style={{ padding: 0, marginRight: 0 }}
            >
              <img
                src="/images/Logo.svg"
                alt="Logo"
                className="logo"
                style={logoStyle}
              />
            </Navbar.Brand>

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
                Contact{" "}
                <AddCircleOutlineIcon sx={{ ml: 1, fontSize: "1.1rem" }} />
              </Button>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" }, zIndex: 1200 }}>
              <Button
                variant="text"
                onClick={() => setShowMobileMenu(true)}
                aria-label="Open menu"
                sx={{
                  minWidth: 0,
                  p: 0,
                  transition: "transform 0.3s ease",
                  color: "white",
                }}
              >
                <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
              </Button>
            </Box>
          </div>
        </Container>
      </Navbar>

      <MobileMenu
        show={showMobileMenu}
        handleClose={handleCloseMobile}
        navigate={navigate}
        openContact={openContact}
      />

      {/* Contact overlay (unchanged) */}
      <div className={`contact-overlay${showContact ? " show" : ""}`}>
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
