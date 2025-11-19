import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import { PRODUCTS, CORPORATE_PAGES } from "../data";
import "./CorporateLinks.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeHero = () => (
  <Box
    sx={{
      backgroundImage: " url(/images/Hero-farmer.svg)",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: {
        xs: "80% center",
        sm: "center 35%",
        md: "center 40%",
        lg: "center 50%",
      },
      height: { xs: "490px", sm: "450px", md: "730px" },
      position: "relative",
      display: "flex",
      alignItems: "left",
      paddingTop: { xs: "240px", sm: "180px", lg: "250px" },
    }}
  >
    <Container>
      <Box
        sx={{
          color: "white",
          maxWidth: { xs: "100%", sm: "85%", md: "100%" },
          borderRadius: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          textAlign: "left",
          padding: { xs: "0 34px", sm: "0" },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "540",
            fontSize: { xs: "2rem", sm: "2rem", md: "4rem" },
            lineHeight: { xs: 1, md: 1.1 },
            mb: { lg: 3, xs: 0.5 },
            textShadow: "3px 3px 6px rgba(0,0,0.9)", // Text shadow remains
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
            padding: { xs: "6px 34px", sm: "10px 35px", md: "9px 50px" },
            marginTop: 4,
            textTransform: "none",
            fontSize: { xs: "0.85rem", sm: "0.75rem", md: "1.1rem" },
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

  const getProductRoute = (product) => {
    if (product.type === "fruit") return "fruit-products";
    if (product.type === "vegetable") return "vegetable-products";
    return "products";
  };

  const handleArrowClick = (product) => {
    window.location.href = `/${getProductRoute(product)}/${product.slug}`;
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to left, black, #535353)",
        padding: { xs: "30px 0", md: "60px 0" },
      }}
    >
      <Container>
        <Row className="g-4">
          {mosaicProducts.map((product, index) => (
            <Col xs={12} sm={4} lg={3} key={index}>
              <Box
                className="product-tile-wrapper"
                sx={{
                  position: "relative",
                  paddingBottom: "100%",
                  "&:hover": {
                    "& .product-tile-content": {
                      transform: { xs: "none", lg: "scale(1.20)" },
                      boxShadow: {
                        xs: "0 6px 15px rgba(0,0,0,0.5)",
                        lg: "0 10px 25px rgba(0,0,0,0.7)",
                      },
                    },
                    "& .product-arrow-icon": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                {/* The Zoomable Image Tile */}
                <Box
                  className="product-tile-content"
                  sx={{
                    position: "absolute",
                    top: { lg: "8px", xs: "25px" },
                    bottom: { lg: "8px", xs: "25px" },
                    left: { lg: "8px", xs: "25px" },
                    right: { lg: "8px", xs: "25px" },
                    borderRadius: "30px",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                    backgroundImage: `url(${product.images.grid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 1.75s ease, box-shadow 0.5s ease",
                  }}
                />
                {/* The Arrow Icon */}
                <Box
                  onClick={() => handleArrowClick(product)}
                  className="product-arrow-icon"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 43, lg: 12, sm: 35 },
                    left: { xs: 43, lg: 12, sm: 35 },
                    width: { xs: 50, lg: 45, sm: 40 },
                    height: { xs: 50, lg: 45, sm: 40 },
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: { xs: 1, lg: 0 },
                    transform: { xs: "translateY(0)", lg: "translateY(10px)" },
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                    zIndex: 3,
                    fontWeight: "bold",
                    fontSize: { xs: "1.2rem", lg: "1.5rem" },
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
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

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
