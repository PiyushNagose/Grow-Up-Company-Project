import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
// Use React-Bootstrap for the robust grid layout (Container, Row, Col)
import { Container, Row, Col } from "react-bootstrap";
// Use Material UI (MUI) for styling, typography, and media queries
import { Typography, Box, useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeHero from "./HomeHero";
import { getProductsByType } from "../data";

// NOTE: All styling is inline or via frameworks

const VALID_SINGULAR_TYPES = ["fruit", "vegetable"];

const CategoryPage = () => {
  // ----------------------------------------------------
  // ✅ 1. CALL ALL HOOKS FIRST
  // ----------------------------------------------------
  const { type } = useParams();
  const isMobile = useMediaQuery("(max-width:599px)"); // Match the 560px/599px breakpoints

  // Define global color variable
  const pokrovskeGreen = "#145A32"; // Placeholder for the undefined color

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
    <Box
      // Corresponds to .category-page-wrapper
      sx={{
        backgroundColor: "#ffffff",
        paddingTop: 0,
        paddingBottom: "70px",
        boxSizing: "border-box",
      }}
    >
      {/* Banner/Hero Section */}
      {isMobile ? (
        <HomeHero />
      ) : (
        <Box
          // Corresponds to .category-banner
          role="img"
          aria-label={`${pageTitle} banner`}
          sx={{
            width: "100%",
            height: { xs: "220px", sm: "280px", md: "350px" }, // Responsive heights
            overflow: "hidden",
            marginBottom: { xs: "20px", sm: "30px", md: "40px" },
            position: "relative",
            "&::after": {
              // Overlay
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.35)",
              pointerEvents: "none",
            },
          }}
        >
          {/* Image inside banner */}
          <img
            src="/images/Banner.jpg"
            alt={`${pageTitle} Banner`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* Title Section */}
      <Container>
        <Typography
          variant="h3"
          component="h1"
          // Corresponds to .category-title
          sx={{
            display: "block",
            textAlign: "center",
            margin: {lg: "5px auto 25px auto !important", xs: "20px"},
            fontWeight: "700 !important",
            color: "#212529",
            textTransform: "capitalize",
            fontSize: {
              xs: "2.75rem",
              sm: "3rem !important",
              md: "3.2rem !important",
            },
            lineHeight: 1.15,
            maxWidth: "1200px",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          {pageTitle}
        </Typography>
      </Container>

      {/* Products Grid Section */}
      <Box
        sx={{
          background: "white",
          padding: { xs: "30px 0", md: "50px 0" },
        }}
      >
        <Container>
          {/* g-4 provides the gap between columns, roughly equivalent to 1.5rem */}
          <Row className="gx-6 gy-4 justify-content-center">
            {products.map((product) => (
              // sm={4} and lg={4} ensures 3 tiles per row on Tablet and Desktop
              <Col xs={12} sm={4} lg={4} key={product.slug}>
                <Box
                  className="product-tile-wrapper"
                  sx={{
                    position: "relative",
                    // 🔥 NEW: Changed aspect ratio from 1:1 (100%) to 4:3 (75%)
                    paddingBottom: { lg: "75%", sm: "100%", xs: "100%" },

                    // --- APPLYING MAX WIDTH & CENTERING (The Sizing Fix) ---
                    margin: "0 auto",
                    maxWidth: {
                      xs: "100%", // Mobile: Full width of the Col
                      sm: "400px", // Tablet: Max width 350px (Larger)
                      lg: "310px", // Desktop: Max width 250px (Smaller)
                    },
                    // ------------------------------------------------------

                    // Hover effects applied to the wrapper
                    "&:hover": {
                      "& .product-tile-content": {
                        // Zoom image
                        transform: { xs: "none", lg: "scale(1.15)" },
                        boxShadow: {
                          xs: "0 6px 15px rgba(0,0,0,0.5)",
                          lg: "0 10px 25px rgba(0,0,0,0.7)",
                        },
                      },
                      "& .product-arrow-icon": {
                        // Show arrow button
                        opacity: { lg: 1 },
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {/* Image tile (zoomable content) */}
                  <Box
                    className="product-tile-content"
                    sx={{
                      position: "absolute",
                      // Padding from the edge of the wrapper (which is 1:1)
                      top: { lg: "8px", xs: "25px" },
                      bottom: { lg: "8px", xs: "25px" },
                      left: { lg: "8px", xs: "25px" },
                      right: { lg: "8px", xs: "25px" },
                      borderRadius: "30px", // Corresponds to .category-image-card border-radius
                      boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
                      overflow: "hidden",
                      backgroundImage: `url(${product.images.grid})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 1.75s ease, box-shadow 0.5s ease",
                      cursor: "pointer",
                    }}
                    // Add click handler to the image box for navigation (standard practice for clickable tiles)
                    onClick={(e) => handleArrowClick(product, e)}
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
                      bottom: { xs: 43, lg: 12, sm: 35 },
                      left: { xs: 43, lg: 12, sm: 35 },
                      width: { xs: 50, lg: 45, sm: 40 },
                      height: { xs: 50, lg: 45, sm: 40 },
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: { xs: 1, sm: 0 }, // Visible on Mobile, hidden on Desktop initially
                      transform: {
                        xs: "translateY(0)",
                        lg: "translateY(10px)",
                      },
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      cursor: "pointer",
                      zIndex: 3,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <ChevronRightIcon
                      sx={{
                        color: pokrovskeGreen, // Using defined color variable
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
