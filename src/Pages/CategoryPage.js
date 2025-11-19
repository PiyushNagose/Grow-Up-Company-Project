import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeHero from "./HomeHero"; // adjust path if needed
import { getProductsByType } from "../data";
import "./CategoryPage.css";

const VALID_SINGULAR_TYPES = ["fruit", "vegetable"];

const CategoryPage = () => {
  // ----------------------------------------------------
  // ✅ 1. CALL ALL HOOKS FIRST (Top of the function)
  // ----------------------------------------------------
  const { type } = useParams();
  const isMobile = useMediaQuery("(max-width:599px)");

  // ----------------------------------------------------
  // 2. LOGIC TO DETERMINE DATA TYPE AND REDIRECT
  // ----------------------------------------------------
  const isPlural = type && type.endsWith("s");
  let singularType = null;

  if (isPlural) {
    singularType = type.slice(0, -1);
  }

  const products = useMemo(() => {
    if (singularType && VALID_SINGULAR_TYPES.includes(singularType)) {
      return getProductsByType(singularType);
    }
    return [];
  }, [singularType]);

  if (!isPlural || !VALID_SINGULAR_TYPES.includes(singularType)) {
    return <Navigate to="/" replace />;
  }

  // ----------------------------------------------------
  // 5. REMAINING LOGIC
  // ----------------------------------------------------
  const pageTitle =
    type && typeof type === "string"
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : "Category";

  const getProductRoute = (product) => {
    if (product.type === "fruit") return "fruit-products";
    if (product.type === "vegetable") return "vegetable-products";
    return "products";
  };

  const handleArrowClick = (product, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.location.href = `/${getProductRoute(product)}/${product.slug}`;
  };

  return (
    <Box className="category-page-wrapper">
      {/* ... rest of the JSX ... */}
      {isMobile ? (
        <HomeHero />
      ) : (
        <Box
          className="category-banner"
          role="img"
          aria-label={`${pageTitle} banner`}
        >
          <img src="/images/Banner.jpg" alt={`${pageTitle} Banner`} />
        </Box>
      )}

      <Container>
        <Typography variant="h3" component="h1" className="category-title">
          {pageTitle}
        </Typography>
      </Container>

      <Box
        sx={{
          background: "white",
          padding: { xs: "30px 0", md: "60px 0" },
        }}
      >
        <Container>
          <Row className="g-4">
            {products.map((product) => (
              <Col xs={12} sm={4} lg={3} key={product.slug}>
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
                  {/* Image tile (zoomable) */}
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
                      transition: "transform 2s ease, box-shadow 0.5s ease",
                    }}
                  />

                  {/* Arrow button (clickable; navigates to product page) */}
                  <Box
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleArrowClick(product, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        handleArrowClick(product, e);
                    }}
                    className="product-arrow-icon"
                    sx={{
                      position: "absolute",
                      bottom: { xs: 35, lg: 12, sm: 30 },
                      left: { xs: 35, lg: 12, sm: 30 },
                      width: { xs: 50, lg: 45, sm: 40 },
                      height: { xs: 50, lg: 45, sm: 40 },
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: { xs: 1, lg: 0 },
                      transform: {
                        xs: "translateY(0)",
                        lg: "translateY(10px)",
                      },
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
    </Box>
  );
};

export default CategoryPage;
