import React from "react";

import { Typography, Button, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ==============================================================================
//
// --- MOCK EXTERNAL IMPORTS ---
// Components mocked to simplify running in a single file environment.
//
// ==============================================================================
const Link = React.forwardRef((props, ref) => (
  // Uses React.forwardRef to correctly handle the ref passed by MUI Button's 'component' prop.
  // The 'to' prop is used here to simulate navigation via window.location.href for simplicity
  // in a single-file environment, which achieves the navigation effect the user desires.
  <a href={props.to} {...props} ref={ref} style={{ textDecoration: "none" }}>
    {props.children}
  </a>
));
Link.displayName = "CustomLink";

const Container = ({ children }) => <div className="container">{children}</div>;
// Ensuring justify-content-center is present for centering in the QuickLinks section
const Row = ({ className, children }) => (
  <div className={`row ${className || ""}`}>{children}</div>
);
const Col = ({ xs, sm, md, lg, className, children }) => {
  // Fix for dynamic class generation
  const classes = `col-${xs || 12} col-sm-${sm || 12} col-md-${
    md || 12
  } col-lg-${lg || 12} ${className || ""}`;
  return <div className={classes}>{children}</div>;
};

// Mock Card structure for the Corporate Links section
const Card = {
  Body: ({ children }) => <div className="card-body p-0 pt-3">{children}</div>,
  Title: ({ children, sx }) => (
    <h5 className="card-title m-0" style={sx}>
      {children}
    </h5>
  ),
  Img: (props) => <img {...props} className="w-100 h-100 object-cover" />,
};

// --- GLOBAL COLORS ---
const POKROVSKE_GREEN = "#00a000";
const BG_WHITE = "#ffffff";

// ==============================================================================
//
// --- PRODUCT DATA (Simulating import from '../data') ---
//
// ==============================================================================
export const PRODUCTS = [
  {
    name: "Pomegranate",
    slug: "pomegranate",
    type: "fruit",
    details: {
      product: "pomegranate",
      variety: "sweet, type Bear Sualibra 12",
      size: "T",
      season: "November - May",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Pomegranate-Main.jpg",
      main: "/images/Pomegranate-Main.jpg",
      thumbnails: [
        "/images/Pomegranate-1.jpg",
        "/images/Pomegranate-2.jpg",
        "/images/Pomegranate-3.jpg",
      ],
    },
  },
  {
    name: "Cucumber",
    slug: "cucumber",
    type: "vegetable",
    details: {
      product: "cucumber",
      variety: "smooth, spiny",
      size: "8-16 cm",
      season: "all year",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Cucumber-Main.jpg",
      main: "/images/Cucumber-Main.jpg",
      thumbnails: [
        "/images/Cucumber-1.png",
        "/images/Cucumber-2.jpg",
        "/images/Cucumber-3.jpg",
      ],
    },
  },
  {
    name: "Tomatoe",
    slug: "tomatoe",
    type: "vegetable",
    details: {
      product: "tomatoe",
      variety: "pink, vine",
      size: "50-80 mm",
      season: "all year",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Tomato-Main.jpg",
      main: "/images/Tomato-Main.jpg",
      thumbnails: [
        "/images/Tomato-1.jpg",
        "/images/Tomato-2.jpg",
        "/images/Tomato-3.png",
      ],
    },
  },
  {
    name: "Lemon",
    slug: "lemon",
    type: "fruit",
    details: {
      product: "lemon",
      variety: "meyer, inter",
      size: "54-70 mm",
      season: "August - April",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Lemon-Main.jpg",
      main: "/images/Lemon-Main.jpg",
      thumbnails: [
        "/images/Lemon-1.jpg",
        "/images/Lemon-2.jpg",
        "/images/Lemon-3.jpg",
      ],
    },
  },
  {
    name: "Squash",
    slug: "squash",
    type: "vegetable",
    details: {
      product: "squash",
      variety: "T",
      size: "T",
      season: "T",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Squash-Main.jpg",
      main: "/images/Squash-Main.jpg",
      thumbnails: [
        "/images/Squash-1.jpg",
        "/images/Squash-2.jpg",
        "/images/Squash-3.jpg",
      ],
    },
  },
  {
    name: "Mandarin",
    slug: "mandarin",
    type: "fruit",
    details: {
      product: "mandarin",
      variety: "murcott",
      size: "54-70 mm",
      season: "November - May",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Mandarine-Main.jpg",
      main: "/images/Mandarine-Main.jpg",
      thumbnails: [
        "/images/Mandarine-1.jpg",
        "/images/Mandarine-2.png",
        "/images/Mandarine-3.jpg",
      ],
    },
  },
  {
    name: "Zucchini",
    slug: "zucchini",
    type: "vegetable",
    details: {
      product: "zucchini",
      variety: "california red, california yellow, kapia chi red, chi green",
      size: "150-300 gr / length",
      season: "November - June",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Zucchini-Main.jpg",
      main: "/images/Zucchini-Main.jpg",
      thumbnails: [
        "/images/Zucchini-1.jpg",
        "/images/Zucchini-2.jpg",
        "/images/Zucchini-3.jpg",
      ],
    },
  },
  {
    name: "Pepper",
    slug: "pepper",
    type: "vegetable",
    details: {
      product: "pepper",
      variety: "T",
      size: "T",
      season: "T",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Pepper-Main.jpg",
      main: "/images/Pepper-Main.jpg",
      thumbnails: [
        "/images/Pepper-1.jpg",
        "/images/Pepper-2.jpg",
        "/images/Pepper-3.jpg",
      ],
    },
  },
];

// ==============================================================================
//
// --- CORPORATE PAGE DATA (Simulating import from '../data') ---
// Added 'about-us' mock data to complete the structure.
//
// ==============================================================================
export const CORPORATE_PAGES = {
  // --- ADDED MOCK ENTRY FOR 'ABOUT US' ---
  "quality-policy": {
    title: "Quality policy",
    Homeimage: "/images/Premium-export.jpg",
    image: "/images/Premium-export.jpg",
    content: `Quality is the foundation of everything we do. From careful selection of seeds to modern storage and delivery, every step is managed to guarantee freshness, safety, and premium taste that meet most international standards. Our policy mandates strict adherence to global food safety certifications and continuous monitoring of our produce. We are dedicated to providing products that are not only delicious but also meet the highest standards of purity and health.`,
  },
  "vision-mission": {
    title: "Vision mission",
    Homeimage: "/images/Misson-1.png",
    image: "/images/Mission-Vision.jpg",
    content: `Our mission is to grow a sustainable future through responsible farming and strong partnerships. We aim to be a leading global supplier known for quality, transparency, and respect for both people and the planet. Our vision is a world where everyone has access to the highest quality fresh produce grown with integrity and care. We strive to innovate farming technologies to minimize our environmental footprint while maximizing nutritional value.`,
  },
  sustainability: {
    title: "Sustainability",
    Homeimage: "/images/Life.jpg",
    image: "/images/Life.jpg",
    content: `We believe in harmony between business and nature. By using eco-friendly technologies, reducing waste, and supporting local communities, our work contributes to a greener and healthier tomorrow. We employ water-saving irrigation techniques, natural pest control methods, and ensure our packaging is recyclable. Sustainability is not just a practice for us; it's a core value that guides every decision we make in the field and beyond.`,
  },
};
// ==============================================================================

/**
 * Hero Section Component
 */
const HomeHero = () => (
  <Box
    sx={{
      // Using a local placeholder for the Hero background image
      backgroundImage: "url(/images/Hero-farmer.svg)",
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
          marginLeft: { sm: "2rem" },
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
            textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
            wordSpacing: { xs: "0.25rem", md: "0.5rem" },
          }}
        >
          The freshest from <br />
          nature perfectly <br />
          prepared and delivered <br />
          to you
        </Typography>

        {/* This Button uses Link to corporate/about-us, making it clickable as requested */}
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

/**
 * Product Mosaic Component
 * Renders product tiles using image links from the PRODUCTS data structure.
 */
const ProductMosaic = () => {
  // Use the provided PRODUCTS data
  const mosaicProducts = PRODUCTS.slice(0, 8);

  const getProductRoute = (product) => {
    if (product.type === "fruit") return "fruit-products";
    if (product.type === "vegetable") return "vegetable-products";
    return "products";
  };

  const handleArrowClick = (product) => {
    // Navigate to the correct path using the product slug, simulating router navigation
    const path = `/${getProductRoute(product)}/${product.slug}`;
    console.log(`Navigating to ${path}`);
    window.location.href = path; // Simulates react-router's navigate
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
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                className="product-tile-wrapper"
                sx={{
                  position: "relative",
                  paddingBottom: "100%", // Aspect ratio container
                  cursor: "default", // Changed to default since the main tile is no longer clickable
                  "&:hover": {
                    "& .product-tile-content": {
                      transform: { xs: "none", lg: "scale(1.15)" },
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
                {/* The Zoomable Image Tile - REMOVED onClick handler as requested */}
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
                    // Image link extracted from PRODUCTS data structure (using local path)
                    backgroundImage: `url(${product.images.grid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 1.75s ease, box-shadow 0.5s ease",
                    zIndex: 2,
                  }}
                />

                {/* The Arrow Icon - ONLY this element is now clickable as requested */}
                <Box
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents clicks from bubbling up if wrapper was clickable
                    handleArrowClick(product);
                  }}
                  className="product-arrow-icon"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 43, lg: 12, sm: 35 },
                    left: { xs: 43, lg: 12, sm: 35 },
                    width: { xs: 40, lg: 45, sm: 40 },
                    height: { xs: 40, lg: 45, sm: 40 },
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
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <ChevronRightIcon
                    sx={{
                      color: POKROVSKE_GREEN,
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

/**
 * Corporate Quick Links Component
 * Uses image links from the CORPORATE_PAGES data structure.
 */
// CENTRALIZED RESPONSIVE SIZE CONTROL
const CARD_SIZE = {
  width: {
    xs: "87%", // mobile
    sm: "200px", // tablet
    md: "300px", // small desktop
    lg: "350px", // large desktop
  },
  padding: {
    xs: "5px",
    sm: "10px",
    md: "15px",
    lg: "18px",
  },
};

const IMAGE_HEIGHT = {
  xs: "125px",
  sm: "110px",
  md: "135px",
  lg: "155px",
};

const CorporateQuickLinks = () => {
  // Use the provided CORPORATE_PAGES data
  const cardSlugs = [
    "about-us", // Now has a valid entry in CORPORATE_PAGES
    "quality-policy",
    "vision-mission",
    "sustainability",
  ];

  // --- MUI SX STYLES TRANSLATION for the Cards ---
  const CARD_SX = {
    width: CARD_SIZE.width,
    padding: CARD_SIZE.padding,
    margin: "0 auto",
    border: "none",
    borderRadius: "10px",
    background: BG_WHITE,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    transition: "0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    height: "100%",

    "&:hover": {
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
      transform: "translateY(-5px)",
      "& .card-image-box": {
        transform: "scale(1.08)",
      },
    },
  };

  const IMG_BOX_SX = {
    height: IMAGE_HEIGHT,
    overflow: "hidden",
    borderRadius: "10px",
    transition: "transform 0.4s ease",
  };

  return (
    <Box
      sx={{
        background: "#f8f8f8",
        padding: { xs: "30px 0", md: "60px 0", lg: "100px" },
      }}
    >
      <Container>
        <Row className="g-4 align-items-stretch justify-content-between">
          {cardSlugs.map((slug, index) => {
            const page = CORPORATE_PAGES[slug];
            if (!page) return null;

            return (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  component={Link}
                  to={`/corporate/${slug}`}
                  sx={{
                    ...CARD_SX,
                    height: "100%", // 🔥 makes all cards equal height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box className="card-image-box" sx={IMG_BOX_SX}>
                    <Card.Img
                      variant="top"
                      src={page.Homeimage}
                      alt={page.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/400x150/f0f0f0/888888?text=Image+Error";
                      }}
                    />
                  </Box>

                  <Card.Body sx={{ flexGrow: 1 }}>
                    {/* 🔥 pushes card title evenly */}
                    <Card.Title
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.5rem" },
                        fontWeight: 610,
                        color: "#212529",
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      {page.title}
                    </Card.Title>
                  </Card.Body>
                </Box>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Box>
  );
};

/**
 * Main Application Component
 */
const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeHero />
      <ProductMosaic />
      <CorporateQuickLinks />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default HomePage;
