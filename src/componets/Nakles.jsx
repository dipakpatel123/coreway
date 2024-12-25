import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/CSS/CustomSlider.css";
import "../assets/CSS/Slider.css";

const CustomSlider = () => {
  const products = [
    {
      id: 1,
      name: "Hobo Small",
      price: "Rs. 3,499.00",
      image: "/img/slider1/img4.png",
      colors: ["#E9C46A", "#F4A261"],
    },
    {
      id: 2,
      name: "Stormi",
      price: "Rs. 3,499.00",
      oldPrice: "Rs. 3,999.00",
      image: "/img/slider1/img5.png",
      colors: ["#E9C46A", "#F4A261"],
      sale: true,
    },
    {
      id: 3,
      name: "Bo Soft Strap",
      price: "Rs. 3,499.00",
      image: "/img/slider1/img6.png",
      colors: ["#E9C46A", "#F4A261"],
    },
    {
      id: 4,
      name: "Hobo Large",
      price: "Rs. 3,499.00",
      image: "/img/slider1/img4.png",
      colors: ["#E9C46A", "#F4A261"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Necklaces
      </Typography>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} className="product-card">
            <Box className="image-container">
              {product.sale && <div className="sale-tag">Sale</div>}
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Box>
            <Typography variant="h6" className="product-name">
              {product.name}
            </Typography>
            <Box className="price-container">
              {product.oldPrice && (
                <Typography
                  variant="body2"
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    marginRight: "10px",
                  }}
                >
                  {product.oldPrice}
                </Typography>
              )}
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {product.price}
              </Typography>
            </Box>
            <Box className="color-options">
              {product.colors.map((color, index) => (
                <Box
                  key={index}
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    marginRight: "5px",
                    border: "1px solid #ccc",
                  }}
                ></Box>
              ))}
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
