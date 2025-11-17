import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Typography, Box } from "@mui/material";
import { getProductsByType } from "../data";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { type } = useParams();
  const products = useMemo(() => getProductsByType(type), [type]);

  const pageTitle =
    type && typeof type === "string"
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : "Category";

  return (
    <Box className="category-page-wrapper">
      {/* Banner */}
      <Box
        className="category-banner"
        role="img"
        aria-label={`${pageTitle} banner`}
      >
        <img src="/images/Banner.jpg" alt={`${pageTitle} Banner`} />
      </Box>

      {/* Title */}
      <Container>
        <Typography variant="h3" component="h1" className="category-title">
          {pageTitle}
        </Typography>
      </Container>

      {/* Images Grid */}
      <Container className="py-4">
        {products.length === 0 ? (
          <Typography variant="body1" align="center">
            No products found in the {pageTitle} category.
          </Typography>
        ) : (
          <section
            className="category-images-grid"
            role="list"
            aria-label={`${pageTitle} images`}
          >
            {products.map((p) => (
              <Link
                to={`/products/${p.slug}`}
                key={p.slug}
                className="category-image-link"
                role="listitem"
                aria-label={p.name}
              >
                <div className="category-image-card">
                  <img
                    src={p.images.grid}
                    alt={p.name}
                    className="category-image"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </section>
        )}
      </Container>
    </Box>
  );
};

export default CategoryPage;
