import React from "react";
import { useCart } from "../../store/CartContext";
import { Box, Typography, Button, Divider } from "@mui/material";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, cartItemCount } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box key={item.id} mb={3} display="flex" alignItems="center">
              <Box flex={1} mr={3}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
                />
              </Box>
              <Box flex={2}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: Rs. {item.price.toFixed(2)}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
                <Typography>
                  Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
                <Divider style={{ margin: "20px 0" }} />
              </Box>
            </Box>
          ))}
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>
              Total Items: {cartItemCount}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Total Price: Rs. {totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Button variant="contained" color="error" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
