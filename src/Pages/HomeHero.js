import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import "./CorporateLinks.css";

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
      paddingTop: { xs: "240px", sm: "80px", lg: "250px" },
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

export default HomeHero;
