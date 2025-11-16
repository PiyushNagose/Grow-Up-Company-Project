// src/pages/HomePage.js (Finalized: Dramatic Image Zoom and Spacing)
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { PRODUCTS, CORPORATE_PAGES } from "../data";
import "./CorporateLinks.css";

// --- Home Hero Component (Finalized Image and Spacing) ---
const HomeHero = () => (
  <Box
    sx={{
      backgroundImage: "url(/images/Hero-farmer.svg)",
      backgroundSize: "110%",
      backgroundPosition: { xs: "center", md: "center 40%" },
      height: { xs: "550px", md: "750px" },
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingTop: { xs: "70px", lg: "90px" },
    }}
  >
    <Container>
      <Box
        sx={{
          color: "white",
          maxWidth: "100%",
          borderRadius: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "500",
            fontSize: { xs: "1.75rem", md: "3.75rem" },
            lineHeight: 1.1,
            mb: 3,
            textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            wordSpacing: "0.5rem",
          }}
        >
          The freshest from <br />
          nature perfectly <br />
          prepared and delivered <br />
          to you
        </Typography>

        <Button
          component={Link}
          to="/corporate/about-us"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            fontWeight: "bold",
            borderRadius: "25px",
            padding: "12px 45px",
            marginTop: 4,
            textTransform: "none",
            transition:
              "background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              borderColor: "white",
              transform: "scale(1.05)",
            },
          }}
        >
          About us
        </Button>
      </Box>
    </Container>
  </Box>
);

// -----------------------------------------------------------------------------------

// --- Product Mosaic Component (No Change) ---
const ProductMosaic = () => {
  const mosaicProducts = PRODUCTS.slice(0, 8);

  return (
    <Box
      sx={{ backgroundColor: "#333", padding: { xs: "30px 0", md: "60px 0" } }}
    >
      <Container>
        <Row className="g-4">
          {mosaicProducts.map((product, index) => (
            <Col xs={6} lg={3} key={index}>
              <Link
                to={`/products/${product.slug}`}
                style={{ display: "block", height: "100%", overflow: "hidden" }}
              >
                <Box sx={{ position: "relative", paddingBottom: "100%" }}>
                  <Box
                    className="product-tile-content"
                    sx={{
                      position: "absolute",
                      top: "8px",
                      bottom: "8px",
                      left: "8px",
                      right: "8px",
                      borderRadius: "30px",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
                      overflow: "hidden",
                      backgroundImage: `url(${product.images.grid})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition:
                        "transform 0.5s ease-out, box-shadow 0.3s ease-out",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
                      },
                      "&:hover .product-arrow-icon": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Box
                      className="product-arrow-icon"
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transform: "translateY(15px)",
                        transition: "opacity 0.3s, transform 0.3s",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      <ArrowRightAltIcon
                        sx={{
                          color: "var(--pokrovske-green)",
                          fontSize: "1.4rem",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

// -----------------------------------------------------------------------------------

// --- Corporate Quick Links Component (No Change) ---
const CorporateQuickLinks = () => {
  const cardSlugs = ["quality-policy", "vision-mission", "sustainability"];

  return (
    <Box sx={{ padding: "60px 0", backgroundColor: "var(--bg-white)" }}>
      <Container>
        <Row className="justify-content-center">
          {cardSlugs.map((slug) => {
            const page = CORPORATE_PAGES[slug];
            return (
              <Col
                xs={12}
                md={4}
                key={slug}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  as={Link}
                  to={`/corporate/${slug}`}
                  className="corporate-card text-center h-100"
                >
                  <div className="corporate-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={page.Homeimage}
                      className="corporate-image"
                    />
                  </div>

                  <Card.Body>
                    <Card.Title className="corporate-title">
                      {page.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Box>
  );
};

// -----------------------------------------------------------------------------------

const HomePage = () => {
  return (
    <div className="home-page-content">
      <HomeHero />

      <ProductMosaic />

      <CorporateQuickLinks />
    </div>
  );
};

export default HomePage;
