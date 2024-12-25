import React, { useState } from "react";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import Slider from "react-slick";
import { useCart } from "../../store/CartContext";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Rose ForHER Sterling Silver Pendant Chain",
      price: 8999,
      description:
        "Whimsical jewellery that will look extra adorable when you wear it. This design is so cute and easy to wear, you will never want to take it off. Light weightand super easy to carry that will amp up the style quotient outfit. And a perfect gift for your loved one.",
      image: "/img/slider1/image12.png",
    },
    {
      id: 2,
      name: "Gold-Plated Necklace",
      price: 5499,
      description:
        "Whimsical jewellery that will look extra adorable when you wear it. This design is so cute and easy to wear, you will never want to take it off. Light weightand super easy to carry that will amp up the style quotient outfit. And a perfect gift for your loved one.",
      image: "/img/slider1/image12.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,  
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: parseInt(value) || 0 });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    if (quantity <= 0) {
      alert("Quantity must be at least 1 to add to the cart.");
      return;
    }
    addToCart({ ...product, quantity });
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    const quantity = quantities[product.id];
    if (quantity <= 0) {
      alert("Quantity must be at least 1 to buy the product.");
      return;
    }
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Box key={product.id} p={3}>
          <Grid container spacing={4} alignItems="center">
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Rs. {product.price.toFixed(2)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Box mt={2}>
                <Typography variant="subtitle1" gutterBottom>
                  Quantity
                </Typography>
                <TextField
                  type="number"
                  value={quantities[product.id]}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box mt={2} display="flex" gap={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy It Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Slider>
  );
};

export default ProductSlider;
