// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";

// Import Footer CSS
import "./Footer.css";

const Footer = () => {
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
  const FooterCol = ({ title, links, baseRoute }) => (
    <Col xs={6} sm={6} md={2} lg={2} className="mb-4 footer-col">
      <Typography variant="h6" className="mb-3 footer-heading">
        {title}
      </Typography>
      <ul className="list-unstyled footer-list">
        {links.map((link, index) => (
          <li key={index} className="mb-2 footer-list-item">
            <span className="footer-arrow">
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M5 3l5 5-5 5" />
              </svg>
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

  // --- Main Footer ---
  return (
    <Box component="footer" className="site-footer">
      <Container>
        <Row className="align-items-start">
          {/* Logo */}
          <Col xs={6} sm={6} md={3} lg={3} className="mb-4 footer-brand-col">
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src="/images/Logo.svg"
                alt="Pokrovske Logo"
                className="footer-logo"
              />
            </Box>
            <Typography variant="body2" className="footer-company">
              TARIM LTD. CO.
            </Typography>
          </Col>

          {/* Footer Navigation */}
          <FooterCol
            title="Corporate"
            links={corporateLinks}
            baseRoute="corporate"
          />
          <FooterCol title="Fruits" links={fruitLinks} baseRoute="products" />
          <FooterCol
            title="Vegetables"
            links={veggieLinks}
            baseRoute="products"
          />

          {/* Contacts */}
          <Col xs={6} sm={6} md={3} lg={3} className="mb-4 footer-col">
            <Typography variant="h6" className="mb-3 footer-heading">
              Contacts
            </Typography>
            <Typography variant="body2" className="footer-contact">
              +90 534 29 29 764
            </Typography>
            <Typography variant="body2" className="footer-contact">
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
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
