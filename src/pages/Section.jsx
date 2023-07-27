import React from 'react'
import './red.css'

const Section = () => {
  return (
    <div>
      <div class="text-center wow fadeInUp">
        <div class="subhead text-white">Learn | Build | Grow | Win</div>
        <h2 class="title-section text-danger">Explore Hackathons</h2>
        <div class="divider mx-auto ree"></div>
      </div>
      <div class="page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-1.svg" alt=""/>
            </div>
            <div class="body">
              <h5 class="text-danger">IIT Guwahti</h5>
              <p>We help you define your SEO objective & develop a realistic strategy with you</p>
              <a href="service.html" class="btn btn-danger">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-2.svg" alt=""/>
            </div>
            <div class="body">
              <h5 class="text-danger">IIT Bombay</h5>
              <p>We help you define your SEO objective & develop a realistic strategy with you</p>
              <a href="service.html" class="btn btn-danger">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card-service wow fadeInUp">
            <div class="header">
              <img src="../assets/img/services/service-3.svg" alt=""/>
            </div>
            <div class="body">
              <h5 class="text-danger">IIT Kanpur</h5>
              <p>We help you define your SEO objective & develop a realistic strategy with you</p>
              <a href="service.html" class="btn btn-danger">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div> 
    </div>
  )
}

export default Section
