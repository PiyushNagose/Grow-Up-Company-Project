import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { getProductBySlug } from "../data";
import HomeHero from "./HomeHero"; // adjust path if needed
import "./ProductDetail.css";

const ProductDetail = () => {
  const { slug } = useParams();

  // ----------------------------------------------------
  // 1. CALL ALL HOOKS FIRST (Unconditional)
  // ----------------------------------------------------
  const isMobile = useMediaQuery("(max-width:599px)");

  const initialFetch = getProductBySlug(slug);

  const [productData, setProductData] = useState(initialFetch);
  const [currentMainImage, setCurrentMainImage] = useState(
    initialFetch ? initialFetch.images.main : ""
  );
  const [thumbnails, setThumbnails] = useState(
    initialFetch ? initialFetch.images.thumbnails : []
  );
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // ----------------------------------------------------
  // 2. EFFECTS AND EARLY RETURNS
  // ----------------------------------------------------
  useEffect(() => {
    const newProduct = getProductBySlug(slug);

    if (newProduct && newProduct.details) {
      setProductData(newProduct);
      setCurrentMainImage(newProduct.images.main);
      setThumbnails(newProduct.images.thumbnails);
      setIsImageLoaded(false);
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

  // ----------------------------------------------------
  // 3. HANDLERS AND SUB-COMPONENTS
  // ----------------------------------------------------
  const handleImageSwap = (clickedThumbUrl) => {
    const clickedIndex = thumbnails.findIndex((url) => url === clickedThumbUrl);

    if (clickedIndex !== -1) {
      const oldMainImageUrl = currentMainImage;
      const newThumbnails = [...thumbnails];

      newThumbnails[clickedIndex] = oldMainImageUrl;

      setCurrentMainImage(clickedThumbUrl);
      setThumbnails(newThumbnails);
      setIsImageLoaded(false);
    }
  };

  const ProductInfo = () => (
    <Col lg={7} md={12} className="mb-3 mb-lg-0 content">
      <Box className="product-details-content-wrapper">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {product.name}
        </Typography>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "medium" }}>
            Product Information
          </Typography>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Object.entries(product.details).map(([key, value]) => (
              <li key={key} style={{ padding: "5px 0" }}>
                <span style={{ fontWeight: "bold" }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </span>
                {value}
              </li>
            ))}
          </ul>
        </Box>

        <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
          Our {product.name} is grown in the fertile soils of Turkey, offering
          exceptional quality and freshness.
        </Typography>
      </Box>
    </Col>
  );

  const MobileImageSection = () => (
    <Col xs={12} className="product-image-col mb-4">
      <Box className="product-image-wrapper-mobile">
        {/* 1. Main Image */}
        <Box className="main-image-box-mobile">
          <img
            src={currentMainImage}
            alt={product.name}
            onLoad={() => setIsImageLoaded(true)}
            className="main-product-image"
            style={{ opacity: isImageLoaded ? 1 : 0 }}
          />
        </Box>

        <Row className="thumbnail-row-mobile gx-2 mt-2 justify-content-center">
          {thumbnails.map((thumb, idx) => (
            <Col xs={4} key={idx} className="p-1">
              <Box
                style={{
                  cursor: "pointer",
                  border:
                    currentMainImage === thumb
                      ? "2px solid var(--pokrovske-green)"
                      : "2px solid transparent",
                  backgroundImage: `url(${thumb})`,
                  position: "relative",
                }}
                onClick={() => handleImageSwap(thumb)}
                className="thumbnail-image-mobile"
              />
            </Col>
          ))}
        </Row>
      </Box>
    </Col>
  );

  // ----------------------------------------------------
  // 4. MAIN RENDER
  // ----------------------------------------------------

  return (
    <Box className="product-page-wrapper">
      {/* Banner — replaced with HomeHero on mobile only */}
      {isMobile ? (
        <HomeHero />
      ) : (
        <Box className="product-banner">
          <img src="/images/Banner.jpg" alt="Product Banner" />
          <div className="banner-overlay" />
        </Box>
      )}

      <Container>
        <Row className="product-detail-layout gx-0">
          {isMobile && <MobileImageSection />}

          <Col lg={7} md={7} sm={12} xs={12} className="product-info-col">
            <ProductInfo />
          </Col>

          {!isMobile && (
            <Col lg={5} md={5} sm={12} className="product-image-col">
              <Box className="product-image-wrapper">
                <Box className="main-image-box">
                  <img
                    src={currentMainImage}
                    alt={product.name}
                    onLoad={() => setIsImageLoaded(true)}
                    className="main-product-image"
                    style={{ opacity: isImageLoaded ? 1 : 0 }}
                  />
                </Box>
                <Box className="thumbnail-column">
                  {thumbnails.map((thumb, idx) => (
                    <img
                      key={idx}
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageSwap(thumb)}
                      className="thumbnail-image"
                    />
                  ))}
                </Box>
              </Box>
            </Col>
          )}
        </Row>
      </Container>
    </Box>
  );
};

export default ProductDetail;
