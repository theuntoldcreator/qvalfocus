const Service = () => {
  return (
    <>
      <div className="service mt-125">
        <div className="container">
          <div className="section-header">
            <p>Our Services</p>
            <h2>Our Best Consulting Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>Life Sciences</h2>
              <div className="service-item">
                <h3>Staffing</h3>
                <p>
                  Strategic partner for comprehensive staffing in Life Sciences, integrating top-tier talent across Quality Assurance, Commissioning, Quality Control, and Computer System Validation.
                </p>
              </div>
              <div className="service-item">
                <h3>Project Delivery</h3>
                <p>
                  Specialized in Validation & Re-validation projects, ensuring meticulous adherence to regulatory standards for compliant, successful delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Information Technology</h2>
              <div className="service-item">
                <h3>Staffing</h3>
                <p>
                  Preferred partner for IT staffing. Optimize software quality with Test Automation Engineers / SDET; professionals bring automation expertise to build quality software and improve efficiency.
                </p>
              </div>
              <div className="service-item">
                <h3>Solutions</h3>
                <p>
                  Application Development services: Agile Transformation, Software Development, Software QA & Automation—ensuring applications meet the highest standards.
                </p>
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
    </>
  );
};

export default Service;