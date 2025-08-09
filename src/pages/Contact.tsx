const Contact = () => {
  return (
    <div className="contact mt-125">
      <div className="container">
        <div className="section-header">
          <p>Get In Touch</p>
          <h2>Get In Touch For Any Query</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>United States Office</h3>
                <p>666 Plainsboro Rd #615, Plainsboro Township, NJ 08536.</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>India Office</h3>
                <p>Plot No 383, Bachpally, Hyderabad 500090, India.</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-phone-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Call for Help</h3>
                <p>+1 (609) 701-9988</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Mail</h3>
                <p>info@qvalfocus.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea className="form-control" id="message" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;