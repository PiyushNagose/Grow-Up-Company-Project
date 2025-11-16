// src/components/CategoryCard.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CategoryCard = ({ product }) => {
  // Determine the base route type (e.g., 'fruits' or 'vegetables' based on the product slug)
  const cardLink = `/products/${product.slug}`;

  return (
    <Card
      component={Link}
      to={cardLink}
      sx={{
        width: "100%",
        overflow: "hidden", // Essential for controlling the image zoom
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s",
        textDecoration: "none",
        color: "var(--text-dark)",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)", // Subtle lift on hover
        },
      }}
    >
      <Box
        className="image-wrapper"
        sx={{
          position: "relative",
          height: 250, // Fixed height for consistent grid look
          overflow: "hidden", // Ensures only the inner image zooms
        }}
      >
        <img
          src={product.images.grid}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // ❗ Zoom Effect Implementation (Requirement 5)
            transition: "transform 0.8s ease-in-out",
          }}
          // Apply the zoom transform on parent hover
          className="category-card-image"
        />

        {/* Arrow Icon Slide-up Implementation (Requirement 4) - Same as Home Mosaic */}
        <Box
          className="product-arrow-icon"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0 /* Default hidden */,
            transform: "translateY(20px)" /* Default slide-up position */,
            transition: "opacity 0.3s, transform 0.3s",
            zIndex: 2,
          }}
        >
          <ArrowRightAltIcon sx={{ color: "var(--pokrovske-green)" }} />
        </Box>
      </Box>

      <Box sx={{ padding: 2, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
        >
          {product.name}
        </Typography>
      </Box>
    </Card>
  );
};

export default CategoryCard;
