const Feature = () => {
  return (
    <>
      <div className="feature mt-125">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className="feature-img">
                <img src="/img/business-man.png" alt="Image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-header">
                <p>Our Feature</p>
                <h2>Why Choose Us?</h2>
              </div>
              <p>
                QvalFocus stands out through our unwavering commitment to quality, precision in talent acquisition, and deep industry expertise in Life Sciences and IT. We build lasting partnerships by understanding unique client needs and delivering tailored solutions that drive innovation and success.
              </p>
              <div className="row counters">
                <div className="col-6">
                  <i className="fa fa-user"></i>
                  <div className="counters-text">
                    <h2 data-toggle="counter-up">100</h2>
                    <p>Our Staffs</p>
                  </div>
                </div>
                <div className="col-6">
                  <i className="fa fa-users"></i>
                  <div className="counters-text">
                    <h2 data-toggle="counter-up">200</h2>
                    <p>Our Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <i className="fa fa-check"></i>
                  <div className="counters-text">
                    <h2 data-toggle="counter-up">300</h2>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="col-6">
                  <i className="fa fa-running"></i>
                  <div className="counters-text">
                    <h2 data-toggle="counter-up">400</h2>
                    <p>Running Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="/img/icon-4.png" alt="Icon" />
                <h2>Qualified Team</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="/img/icon-1.png" alt="Icon" />
                <h2>Individual Approach</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="/img/icon-8.png" alt="Icon" />
                <h2>100% Success</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="/img/icon-6.png" alt="Icon" />
                <h2>100% Satisfaction</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="container">
          <div className="section-header">
            <p>Testimonial Carousel</p>
            <h2>100% Positive Customer Reviews</h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <img src="/img/testimonial-1.jpg" alt="Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat
              </p>
              <h2>Client Name</h2>
              <h3>Profession</h3>
            </div>
            <div className="testimonial-item">
              <img src="/img/testimonial-2.jpg" alt="Image" />
              <p>
                Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
              </p>
              <h2>Client Name</h2>
              <h3>Profession</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;