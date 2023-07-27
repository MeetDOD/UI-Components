import React from "react";
import './home.css'
import animate from "./animation_lkcgm8ny.json"
import Lottie from "lottie-react";

const Navbar = () => {
  return (
    <div className="my-5">
      <header >
        <div class="container">
          <div class="page-banner home-banner meet">
            <div class="row align-items-center flex-wrap-reverse h-100">
              <div class="col-md-6 py-5 wow fadeInLeft">
                <h1 class="mb-4 text-danger">
                  Walk in as an IDEA Walk out as a BUSINESS
                </h1>
                <p class="text-lg text-white mb-5">
                  BizThon is open to Everyone. Developers, Entrepreneurs,
                  Marketers, Project Managers, and everyone.
                </p>
                <a href="#" class="btn btn-danger ">
                  Enroll Now
                </a>
              </div>
              <div class="col-md-6 py-5 wow zoomIn">
                <div class="img-fluid text-center">
                  <Lottie animationData={animate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
