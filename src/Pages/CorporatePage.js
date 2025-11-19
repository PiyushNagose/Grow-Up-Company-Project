import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { CORPORATE_PAGES } from "../data";
import HomeHero from "./HomeHero";
import "./CorporatePage.css";

const CorporatePage = () => {
  // Media query for mobile (up to 599px)
  const isMobile = useMediaQuery("(max-width:599px)");
  const { slug } = useParams();
  const pageData = CORPORATE_PAGES[slug];

  if (!pageData) return <Navigate to="/corporate/about-us" replace />;

  const { title, content, image } = pageData;

  return (
    <Box className="corporate-page-wrapper">
      {/* 🔹 HEADER BACKDROP GRADIENT FOR VISIBILITY */}
      <div className="header-gradient"></div>

      {/* 🔹 SHOW HERO COMPONENT ON MOBILE, BANNER OTHERWISE */}
      {isMobile ? (
        <HomeHero />
      ) : (
        <Box className="corporate-banner">
          <img src="/images/Banner.jpg" alt="Corporate Banner" />
        </Box>
      )}

      <Container>
        <Row className="corporate-layout gx-0">
          {/* RIGHT IMAGE (Now first in JSX) */}
          {/* MOBILE: order-1 (Top) | DESKTOP: order-md-2 (Right side) */}
          <Col
            lg={5}
            md={5}
            sm={12} /* Full width on small screens */
            xs={12} /* Full width on extra-small screens */
            className="corporate-image-col order-1 order-md-2"
          >
            <div className="corporate-side-image-wrapper">
              <img src={image} alt={title} />
            </div>
          </Col>

          {/* LEFT CONTENT (Now second in JSX) */}
          {/* MOBILE: order-2 (Bottom) | DESKTOP: order-md-1 (Left side) */}
          <Col
            lg={7}
            md={7}
            sm={12}
            xs={12}
            className="corporate-text-col order-2 order-md-1"
          >
            <div className="corporate-text-wrapper">
              <Typography variant="h3" className="corporate-title">
                {title}
              </Typography>

              <Typography variant="body1" className="corporate-text">
                {content}
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default CorporatePage;
