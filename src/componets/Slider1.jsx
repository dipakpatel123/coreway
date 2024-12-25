import React from "react";
import Slider from "react-slick";
import { Button, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/CSS/Slider.css";

const SliderComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 1, 
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Box
            position="relative"
            style={{
              height: isSmallScreen ? "300px" : "500px",  
              overflow: "hidden",
            }}
          >
            <img
              src="/img/slider1/img1.png"
              alt="Earring Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              position="absolute"
              top={isSmallScreen ? "10%" : "20%"}  
              left={isSmallScreen ? "5%" : "10%"}
              color="white"
              zIndex="10"
              maxWidth="80%" 
            >
              <Typography
                variant={isSmallScreen ? "h6" : "h5"}
                gutterBottom
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Jewellery
              </Typography>
              <Typography
                variant={isSmallScreen ? "h4" : "h2"}
                gutterBottom
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: isSmallScreen ? "2rem" : "3rem",
                }}
              >
                Earring
              </Typography>
              <Typography
                variant={isSmallScreen ? "body1" : "h6"}
                gutterBottom
                style={{ textTransform: "uppercase" }}
              >
                Collection
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  marginTop: "20px",
                  padding: "10px 20px",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </div>

        <div>
          <Box
            position="relative"
            style={{
              height: isSmallScreen ? "300px" : "500px",  
              overflow: "hidden",
            }}
          >
            <img
              src="/img/slider1/img2.png"
              alt="Necklace Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              position="absolute"
              top={isSmallScreen ? "10%" : "20%"} 
              left={isSmallScreen ? "5%" : "10%"}
              color="white"
              zIndex="10"
              maxWidth="80%"  
            >
              <Typography
                variant={isSmallScreen ? "h6" : "h5"}
                gutterBottom
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Jewellery
              </Typography>
              <Typography
                variant={isSmallScreen ? "h4" : "h2"}
                gutterBottom
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: isSmallScreen ? "2rem" : "3rem",
                }}
              >
                Necklace
              </Typography>
              <Typography
                variant={isSmallScreen ? "body1" : "h6"}
                gutterBottom
                style={{ textTransform: "uppercase" }}
              >
                Collection
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  marginTop: "20px",
                  padding: "10px 20px",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
