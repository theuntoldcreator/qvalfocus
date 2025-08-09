const Advisor = () => {
  return (
    <>
      <div className="team mt-125">
        <div className="container">
          <div className="section-header">
            <p>Meet Our Advisors</p>
            <h2>Our Professional Consulting Team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-1.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Donald John</h2>
                  <p>Founder & CEO</p>
                  <div className="team-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-2.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>Chef Executive</p>
                  <div className="team-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-3.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Thomas Olsen</h2>
                  <p>Chef Advisor</p>
                  <div className="team-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-4.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
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

export default Advisor;