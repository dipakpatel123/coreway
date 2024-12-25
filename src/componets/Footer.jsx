import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {

  const handleSubscribe = (e) => {
    e.preventDefault();  
    alert("Subscribe Successful!");
  };

  return (
    <section className="footer_section mt-5">
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>ABOUT US</h5>
              <p className="small">
                Silversea is a one-stop solution for all your dainty silver jewellery needs. Our mission is to provide trendy and everyday wear minimal silver jewellery from all over the globe to our customers at pocket-friendly prices. The brand was established in 2017 and is carving its path to success since then.
              </p>
              <div>
                <IconButton href="#" aria-label="Facebook" className="text-light me-3">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" aria-label="Instagram" className="text-light">
                  <InstagramIcon />
                </IconButton>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Shipping & Delivery</a></li>
                <li><a href="#" className="text-light text-decoration-none">Return Policy</a></li>
                <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>COLLECTIONS</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">All</a></li>
                <li><a href="#" className="text-light text-decoration-none">Rings</a></li>
                <li><a href="#" className="text-light text-decoration-none">Chains</a></li>
                <li><a href="#" className="text-light text-decoration-none">Bracelets</a></li>
                <li><a href="#" className="text-light text-decoration-none">Necklaces</a></li>
                <li><a href="#" className="text-light text-decoration-none">Earrings</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>NEWSLETTER</h5>
              <p className="small">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form onSubmit={handleSubscribe}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <button type="submit" className="btn btn-light btn-sm">SUBSCRIBE</button>
              </form>
            </div>
          </div>

          <div className="text-center mt-4 border-top pt-3">
            <p className="small mb-0">Copyright © 2024 Silversea</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
