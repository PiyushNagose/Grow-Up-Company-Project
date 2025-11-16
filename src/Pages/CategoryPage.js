import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";
import { getProductsByType } from "../data";
import CategoryCard from "../Components/CategoryCard";
import "./CategoryPage.css"; // New CSS file for layout

const CategoryPage = () => {
  const { type } = useParams();
  const products = useMemo(() => getProductsByType(type), [type]);
  const pageTitle = type.charAt(0).toUpperCase() + type.slice(1);

  if (products.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Typography variant="h4" color="error" gutterBottom>
          No products found in the {pageTitle} category.
        </Typography>
      </Container>
    );
  }

  // Example: Take first 4 images for the right-side banner layout
  const rightImages = products.slice(0, 4);

  return (
    <Box className="category-page-wrapper">
      {/* 🔹 TOP BANNER */}
      <Box className="category-banner">
        <img src="/images/Banner.jpg" alt={`${pageTitle} Banner`} />
        <div className="banner-overlay" />
        <Typography variant="h2" className="banner-title">
          {pageTitle}
        </Typography>
      </Box>

      <Container>
        <Row className="category-layout">
          {/* LEFT: Product Grid */}
          <Col lg={7} md={12} className="category-products-col">
            <Row className="g-4">
              {products.map((product) => (
                <Col xs={12} sm={6} md={4} key={product.slug}>
                  <CategoryCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT: Image Layout */}
          <Col lg={5} md={12} className="category-images-col">
            <div className="right-image-wrapper">
              {rightImages.length > 0 && (
                <img
                  src={rightImages[0].images.grid}
                  alt={rightImages[0].name}
                  className="large-image"
                />
              )}
              <div className="small-images-wrapper">
                {rightImages.slice(1).map((img) => (
                  <img
                    key={img.slug}
                    src={img.images.grid}
                    alt={img.name}
                    className="small-image"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default CategoryPage;
