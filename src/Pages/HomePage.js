// src/pages/HomePage.js (Finalized: Dramatic Image Zoom and Spacing)
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import { PRODUCTS, CORPORATE_PAGES } from "../data";
import "./CorporateLinks.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// --- Home Hero Component (Finalized Image and Spacing) ---
const HomeHero = () => (
  <Box
    sx={{
      backgroundImage: "url(/images/Hero-farmer.svg)",
      backgroundSize: "cover",

      backgroundRepeat: "no-repeat",
      backgroundPosition: {
        xs: "center 30%",
        sm: "center 35%",
        md: "center 40%",
        lg: "center 50%", 
      },
      height: { xs: "350px", sm: "450px", md: "750px" },
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingTop: { xs: "70px", sm: "80px", lg: "90px" },
    }}
  >
    <Container>
      <Box
        sx={{
          color: "white",
          maxWidth: { xs: "95%", sm: "85%", md: "100%" },
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
            fontSize: { xs: "1.75rem", sm: "2rem", md: "3.75rem" },
            lineHeight: { xs: 1.2, md: 1.1 },
            mb: 3,
            textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            wordSpacing: { xs: "0.25rem", md: "0.5rem" },
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
            padding: { xs: "8px 28px", sm: "10px 35px", md: "12px 45px" },
            marginTop: 4,
            textTransform: "none",
            fontSize: { xs: "0.6rem", sm: "0.75rem", md: "1rem" },
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

// --- Product Mosaic Component (Tablet Compatible, Left Arrow) ---
const ProductMosaic = () => {
  const mosaicProducts = PRODUCTS.slice(0, 8);

  return (
    <Box
      sx={{ backgroundColor: "#333", padding: { xs: "30px 0", md: "60px 0" } }}
    >
      <Container>
        <Row className="g-4">
          {mosaicProducts.map((product, index) => (
            <Col
              xs={6}
              sm={4} // 3 per row on tablet
              lg={3} // 4 per row on desktop
              key={index}
            >
              <Link
                to={`/products/${product.slug}`}
                style={{ display: "block", height: "100%", overflow: "hidden" }}
              >
                {/* Use square box */}
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
                        transform: { xs: "none", lg: "scale(1.03)" }, // hover only desktop
                        boxShadow: {
                          xs: "0 6px 15px rgba(0,0,0,0.5)",
                          lg: "0 10px 25px rgba(0,0,0,0.7)",
                        },
                      },
                    }}
                  >
                    <Box
                      className="product-arrow-icon"
                      sx={{
                        position: "absolute",
                        bottom: { xs: 10, lg: 12 }, // slightly higher on desktop
                        left: { xs: 10, lg: 12 }, // slightly more inward on desktop
                        width: { xs: 23, lg: 27 }, // bigger on desktop
                        height: { xs: 23, lg: 27 }, // bigger on desktop
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 1, // always visible
                        transform: "translateY(0)", // aligned properly
                        transition: "opacity 0.3s, transform 0.3s",
                        cursor: "pointer",
                        zIndex: 2,
                        fontWeight: "bold",
                        fontSize: { xs: "1.2rem", lg: "1.5rem" }, // bigger icon on desktop
                      }}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: "var(--pokrovske-green)",
                          fontSize: { xs: "1.4rem", lg: "1.55rem" },
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
    <Box
      sx={{
        padding: { xs: "40px 0", md: "60px 0" },
        backgroundColor: "var(--bg-white)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          {cardSlugs.map((slug) => {
            const page = CORPORATE_PAGES[slug];
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                key={slug}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  as={Link}
                  to={`/corporate/${slug}`}
                  className="home-corporate-card text-center h-100"
                >
                  <div className="home-corporate-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={page.Homeimage}
                      className="home-corporate-image"
                    />
                  </div>

                  <Card.Body>
                    <Card.Title className="home-corporate-title">
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
