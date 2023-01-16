import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Button from "@mui/material/Button";

const iconPath = process.env.PUBLIC_URL;

function Homepage() {
  return (
    <main className="main-container">
      <div className="main-hero-section">
        <div className="main-hero-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <h2>
            Welcome to Little Lemon, a family owned mediterrean restuarant in the heart of downtown. Our menu features a variety of fresh,
            Traditional dishes made with locally sourced ingredients and a modern twist.
          </h2>
          <Link to="/reservation">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F4CE14",
                color: "black",
                fontWeight: 700,
                textDecoration: "none",
                padding: "12px",
              }}
              className="main-hero-cta-button"
            >
              Reserve a table
            </Button>
          </Link>
        </div>
        <div className="main-hero-img">
          <img
            src={`${iconPath}/restauranfood.jpg`}
            height="420"
            width="100%"
            alt="logo"
          ></img>
        </div>
      </div>

      <div className="main-about-section">
        <div className="main-about-img">
          <img
            src={`${iconPath}/Mario and Adrian A.jpg`}
            height="420"
            width="100%"
            alt="about"
          ></img>
        </div>
        <div className="main-about-text">
          <h1>About</h1>
          <p>Mario and Adrian</p>
          <h2>
            At Little Lemon, we believe that food is not just sustenance, but an
            experience. That's why we've created a warm and inviting atmosphere
            that's perfect for a romantic dinner, a casual lunch, or a special
            occasion. Our attentive staff will make sure you have a memorable
            meal, whether you're dining alone or with a group.
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Main;