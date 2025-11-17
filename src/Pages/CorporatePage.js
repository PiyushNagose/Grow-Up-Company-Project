import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";
import { CORPORATE_PAGES } from "../data";
import "./CorporatePage.css";

const CorporatePage = () => {
  const { slug } = useParams();
  const pageData = CORPORATE_PAGES[slug];

  if (!pageData) return <Navigate to="/corporate/about-us" replace />;

  const { title, content, image } = pageData;

  return (
    <Box className="corporate-page-wrapper">
      {/* 🔹 HEADER BACKDROP GRADIENT FOR VISIBILITY */}
      <div className="header-gradient"></div>

      {/* 🔹 UNIVERSAL CORPORATE BANNER */}
      <Box className="corporate-banner">
        <img src="/images/Banner.jpg" alt="Corporate Banner" />
      </Box>

      <Container>
        <Row className="corporate-layout gx-0">
          {/* LEFT CONTENT */}
          <Col lg={7} md={7} sm={12} className="corporate-text-col">
            <div className="corporate-text-wrapper">
              <Typography variant="h3" className="corporate-title">
                {title}
              </Typography>

              <Typography variant="body1" className="corporate-text">
                {content}
              </Typography>
            </div>
          </Col>

          {/* RIGHT IMAGE — FIXED SIZE SQUARE */}
          <Col lg={5} md={5} sm={12} className="corporate-image-col">
            <div className="corporate-side-image-wrapper">
              <img src={image} alt={title} />
            </div>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default CorporatePage;
