const About = () => {
  return (
    <>
      <div className="about mt-125">
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
                <h3>What We Do:</h3>
                <p>
                  We integrate top-tier talent with industry leaders in Life Sciences and IT. Our consulting and staffing solutions help candidates and organizations support each other to propel innovation.
                </p>
                <h3>Our Mission:</h3>
                <p>
                  We support the Life Sciences and IT industries by shaping careers and providing tailored solutions for client success—driven by expertise, commitment, and precision in every partnership, ensuring growth for individuals and industries alike.
                </p>
                <a className="btn" href="">Learn More</a>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus
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
    </>
  );
};

export default About;