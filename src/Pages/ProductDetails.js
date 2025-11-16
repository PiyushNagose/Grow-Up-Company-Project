import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";
import { getProductBySlug } from "../data";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { slug } = useParams();
  const initialFetch = getProductBySlug(slug);

  const [productData, setProductData] = useState(initialFetch);
  const [mainImage, setMainImage] = useState(
    initialFetch ? initialFetch.images.main : ""
  );
  const [thumbnails, setThumbnails] = useState(
    initialFetch ? initialFetch.images.thumbnails : []
  );

  useEffect(() => {
    const newProduct = getProductBySlug(slug);
    if (newProduct && newProduct.details) {
      setProductData(newProduct);
      setMainImage(newProduct.images.main);
      setThumbnails(newProduct.images.thumbnails);
    }
  }, [slug]);

  if (!productData || !productData.details) {
    return (
      <Container className="py-5 text-center" style={{ minHeight: "60vh" }}>
        <Typography variant="h4" color="error" sx={{ pt: 5 }}>
          Product not found.
        </Typography>
      </Container>
    );
  }

  const product = productData;

  const handleImageSwap = (clickedThumbUrl) => {
    const clickedIndex = thumbnails.findIndex((url) => url === clickedThumbUrl);
    if (clickedIndex !== -1) {
      const oldMainImageUrl = mainImage;
      setMainImage(clickedThumbUrl);
      const newThumbnails = [...thumbnails];
      newThumbnails[clickedIndex] = oldMainImageUrl;
      setThumbnails(newThumbnails);
    }
  };

  const ProductInfo = () => (
    <Col lg={5} md={12} className="mb-5 mb-lg-0">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        {product.name.toUpperCase()}
      </Typography>
      <Box sx={{ mt: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "medium" }}>
          Product Information
        </Typography>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.entries(product.details).map(([key, value]) => (
            <li key={key} style={{ padding: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </span>{" "}
              {value}
            </li>
          ))}
        </ul>
      </Box>

      <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
        Our {product.name} is grown in the fertile soils of Turkey, offering
        exceptional quality and freshness.
      </Typography>
    </Col>
  );

  return (
    <Box className="product-page-wrapper">
      {/* Banner */}
      <Box className="product-banner">
        <img src="/images/Banner.jpg" alt="Product Banner" />
        <div className="banner-overlay" />
      </Box>

      <Container>
        <Row className="product-detail-layout align-items-center">
          <ProductInfo />

          {/* Right Side: Main Image + Vertical Thumbnails */}
          <Col lg={7} md={12}>
            <Box className="product-image-wrapper">
              {/* Main Image */}
              <Box className="main-image-box">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="main-product-image"
                />
              </Box>

              {/* Thumbnails Column */}
              <Box className="thumbnail-column">
                {thumbnails.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => handleImageSwap(thumb)}
                    className="thumbnail-image"
                  />
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default ProductDetail;
