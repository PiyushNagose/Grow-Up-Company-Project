// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Footer.css";

const Footer = () => {
  // --- Access isMobile State ---
  const isMobile = useMediaQuery("(max-width:575px)"); // Matching CSS breakpoint for full mobile layout

  // --- Navigation Data ---
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

  // --- Reusable Footer Column ---
  const FooterCol = ({ title, links, baseRoute, colProps }) => (
    <Col
      {...(colProps || { xs: 6, sm: 6, md: 2, lg: 2 })}
      className={`mb-4 footer-col ${colProps?.className || ""}`}
    >
      <Typography variant="h6" className="mb-3 footer-heading">
        {title}
      </Typography>
      <ul className="list-unstyled footer-list">
        {links.map((link, index) => (
          <li key={index} className="mb-2 footer-list-item">
            {/* Chevron Icon is only used on desktop/tablet, hidden on mobile by CSS */}
            <span className="footer-arrow">
              <ChevronRightIcon
                sx={{
                  fontSize: "1rem",
                  verticalAlign: "middle",
                }}
              />
            </span>
            <Link
              to={`/${baseRoute}/${link.slug}`}
              className="footer-link link-hover-underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );

  // --- Mobile-specific Contact Section Component ---
  const MobileContactSection = () => (
    <Col
      xs={12}
      sm={6}
      md={3}
      lg={3}
      className="mb-4 footer-col order-md-4 order-lg-4"
    >
      {/* 1. Phone Numbers Group (Same Line) */}
      <Box className="footer-phone-group">
        {/* Font Awesome Icon for Phone: Center with margin: auto */}
        <i
          className="fa-solid fa-phone"
          style={{
            fontSize: "1.5rem",
            display: "block",
            marginBottom: "5px",
            margin:
              "0 auto 5px auto" /* Added margin: 0 auto to center block element */,
          }}
        ></i>

        <Typography variant="body2" className="footer-contact footer-phone-1">
          +90 534 29 29 764
        </Typography>

        <Typography variant="body2" className="footer-contact footer-phone-2">
          +90 545 78 59 035
        </Typography>
      </Box>

      {/* 2. Email Address */}
      <Typography variant="body2" className="footer-email">
        {/* Font Awesome Icon for Email: Center with margin: auto */}
        <i
          className="fa-solid fa-envelope"
          style={{
            fontSize: "1.5rem",
            display: "block",
            margin:
              "0 auto 5px auto" /* Added margin: 0 auto to center block element */,
          }}
        ></i>

        <a
          href="mailto:freshveggies.info@gmail.com"
          className="footer-link link-hover-underline"
        >
          freshveggies.info@gmail.com
        </a>
      </Typography>

      {/* 3. Address Placeholder */}
      <Box
        className="mobile-address-placeholder"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <i
          className="fa-solid fa-location-dot"
          style={{
            fontSize: "1.5rem",
            display: "block",
            margin: "25px auto 5px auto",
          }}
        ></i>

        <Typography variant="body2" className="footer-address">
          Elmalı Mah. 21 Sk. Şerbetçi Apt. No:1 İç <br />
          Kapı No:12 Muratpaşa
        </Typography>
      </Box>
    </Col>
  );
  // --- Main Footer ---
  return (
    <Box component="footer" className="site-footer">
      <Container>
        <Row className="align-items-start">
          {/* 1. Logo */}
          <Col
            xs={12}
            sm={6}
            md={3}
            lg={3}
            className="mb-4 footer-brand-col order-md-1 order-lg-1"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <img
                src="/images/Logo.svg"
                alt="Pokrovske Logo"
                className="footer-logo"
              />
            </Box>
            <Typography
              variant="body2"
              className="footer-company"
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              TARIM LTD. CO.
            </Typography>
          </Col>
          {isMobile ? (
            <MobileContactSection />
          ) : (
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="mb-4 footer-col order-md-4 order-lg-4"
            >
              <Typography variant="h6" className="mb-3 footer-heading">
                Contacts
              </Typography>
              <Typography
                variant="body2"
                className="footer-contact footer-phone-1"
              >
                +90 534 29 29 764
              </Typography>
              <Typography
                variant="body2"
                className="footer-contact footer-phone-2"
              >
                +90 545 78 59 035
              </Typography>
              <Typography variant="body2" className="footer-email">
                <a
                  href="mailto:freshveggies.info@gmail.com"
                  className="footer-link link-hover-underline"
                >
                  freshveggies.info@gmail.com
                </a>
              </Typography>
            </Col>
          )}

          {/* 3. Corporate */}
          <FooterCol
            title="Corporate"
            links={corporateLinks}
            baseRoute="corporate"
            colProps={{
              xs: 4,
              sm: 3,
              md: 2,
              lg: 2,
              className: "order-md-2 order-lg-2",
            }}
          />

          {/* 4. Fruits */}
          <FooterCol
            title="Fruits"
            links={fruitLinks}
            baseRoute="fruit-products"
            colProps={{
              xs: 4,
              sm: 3,
              md: 2,
              lg: 2,
              className: "order-md-3 order-lg-3",
            }}
          />

          {/* 5. Vegetables */}
          <FooterCol
            title="Vegetables"
            links={veggieLinks}
            baseRoute="vegetable-products"
            colProps={{
              // Adjusted to xs: 4 for 3-across in mobile CSS
              xs: 4,
              sm: 3,
              md: 2,
              lg: 2,
              className: "order-md-3 order-lg-3",
            }}
          />
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
