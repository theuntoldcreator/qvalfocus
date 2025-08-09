const Home = () => {
  return (
    <>
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item active">
              <div className="carousel-img">
                <img src="/img/carousel-1.jpg" alt="Carousel Image" />
              </div>
              <div className="carousel-text">
                <h1>Fast & Trusted Consulting Service</h1>
                <p>
                  Pioneering solutions in Life Sciences and IT, we connect top-tier talent with leading organizations to drive innovation and success.
                </p>
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

      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-img">
                <div className="about-img-1">
                  <img src="/img/about-2.jpg" alt="Image" />
                </div>
                <div className="about-img-2">
                  <img src="/img/about-1.jpg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-header">
                <p>Learn About Us</p>
                <h2>25 Years Experience</h2>
              </div>
              <div className="about-text">
                <h3>Who We Are:</h3>
                <p>
                  QvalFocus is a forward-thinking leader in consulting, locating the most qualified individuals to pave the path for success. As a premier professional services organization, we connect top-tier talent with leading organizations in Life Sciences and Information Technology—built on expertise, precision, and dedication to shaping successful careers and partnerships.
                </p>
                <a className="btn" href="/about">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container">
          <div className="section-header">
            <p>Our Services</p>
            <h2>Our Best Consulting Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/icon-1.png" alt="Icon" />
                <h3>Life Sciences</h3>
                <p>Strategic partner for comprehensive staffing in Life Sciences, integrating top-tier talent.</p>
                <a href="/service">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/icon-2.png" alt="Icon" />
                <h3>Information Technology</h3>
                <p>Preferred partner for IT staffing. Optimize software quality with Test Automation Engineers / SDET.</p>
                <a href="/service">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/icon-3.png" alt="Icon" />
                <h3>Project Delivery</h3>
                <p>Specialized in Validation & Re-validation projects, ensuring meticulous adherence to regulatory standards.</p>
                <a href="/service">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/icon-4.png" alt="Icon" />
                <h3>IT Solutions</h3>
                <p>Application Development services: Agile Transformation, Software Development, Software QA & Automation.</p>
                <a href="/service">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature">
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

      <div className="team">
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
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="container">
          <div className="section-header">
            <p>Consulting Blog</p>
            <h2>Latest From Our Consulting Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="/img/blog-1.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Category</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor.
                    </p>
                    <a className="btn" href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="/img/blog-2.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Category</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor.
                    </p>
                    <a className="btn" href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;