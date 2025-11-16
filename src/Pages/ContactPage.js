import React from "react";
import { Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// Removed unused imports: useState, Container, Row, Col, TextField, Button

const ContactPage = () => {
  // Define contact data directly in the component
  const contactInfo = [
    { icon: PhoneIcon, label: "+90 534 29 29 764", type: "Phone" },
    { icon: PhoneIcon, label: "+90 545 78 59 035", type: "Phone" },
    { icon: EmailIcon, label: "freshveggies.info@gmail.com", type: "Email" },
    {
      icon: LocationOnIcon,
      label: "Elmalı Mah. 21 Sk. Şerbetçi Apt. No:1, İç Kapı No:12 Muratpaşa",
      type: "Address",
    },
  ];

  // Component styles for centering the card and defining its appearance
  const pageContainerStyle = {
    // Full screen height, centered content
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Simple light grey background as seen in the mockup image
    backgroundColor: "#ccc",
    padding: "20px",
  };

  const cardStyle = {
    // Card appearance (white background, rounded corners, shadow)
    backgroundColor: "white",
    padding: { xs: 3, md: 5 },
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px", // Max width for desktop
    width: "100%",
  };

  const titleStyle = {
    // Title style
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: { xs: "1.8rem", md: "2.5rem" },
    color: "#333",
  };

  const itemStyle = {
    // Style for individual contact lines
    display: "flex",
    alignItems: "flex-start",
    marginBottom: 2,
    fontSize: "1.1rem",
    color: "#555",
  };

  const iconStyle = {
    // Icon style (using a dark green/pokrovske color)
    color: "#006400",
    mr: 2,
    mt: 0.5, // Slight top margin to align with text
    fontSize: "1.2rem",
    flexShrink: 0,
  };

  return (
    <Box sx={pageContainerStyle}>
      <Box sx={cardStyle}>
        {/* Contact Information Title */}
        <Typography variant="h4" component="h1" sx={titleStyle}>
          Contact Information
        </Typography>

        {/* Contact Items List */}
        <Box>
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Box key={index} sx={itemStyle}>
                <IconComponent sx={iconStyle} />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: item.type === "Address" ? 400 : 500 }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
