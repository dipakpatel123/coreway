import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, ShoppingCart, Search, AccountCircle } from "@mui/icons-material";
import { useCart } from "../../store/CartContext";
import { useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const { cart } = useCart();  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();  

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate("/cart");  
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
       
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold" }}>
        <Link to={"/"}> <img
            src="/img/nav/symbol.png"
            alt="Logo"
            style={{ height: "30px", verticalAlign: "middle", cursor:"pointer"}}
          /></Link>
         
        </Typography>

     
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Button color="inherit">SHOP BY COLLECTIONS</Button>
          <Button color="inherit">SHOP BY CATEGORY</Button>
          <Button color="inherit">BESTSELLERS</Button>
          <Button color="inherit">MEN'S JEWELLERY</Button>
          <Button color="inherit">STORE LOCATION</Button>
        </div>

     
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit" onClick={handleCartClick}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
 
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          style={{ display: "flex" }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>SHOP BY COLLECTIONS</MenuItem>
          <MenuItem onClick={handleMenuClose}>SHOP BY CATEGORY</MenuItem>
          <MenuItem onClick={handleMenuClose}>BESTSELLERS</MenuItem>
          <MenuItem onClick={handleMenuClose}>MEN'S JEWELLERY</MenuItem>
          <MenuItem onClick={handleMenuClose}>STORE LOCATION</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
