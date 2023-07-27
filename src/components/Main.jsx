import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <div class="container-xxl">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <h5 class="text-white">
              Presentation for Talentship Global Advisory Forum
            </h5>
            <h1 class="text-white mb-4">Meet Dodiya</h1>
            <button className="mb-3" >
              <Link to="/nav" style={{textDecoration:'none'}}>Navbar</Link>
            </button>
            <button className="mb-3">
              <Link to="/home" style={{textDecoration:'none'}}>Home</Link>
            </button>
            <button className="mb-3">
              <Link to="/card" style={{textDecoration:'none'}}>Card</Link>
            </button>
            <button className="mb-3">
              <Link to="/flip" style={{textDecoration:'none'}}>FlipCard</Link>
            </button>
            <button className="mb-3">
              <Link to="/info" style={{textDecoration:'none'}}>InfoCard</Link>
            </button>
            <button className="mb-3">
              <Link to="/footer" style={{textDecoration:'none'}}>Footer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
