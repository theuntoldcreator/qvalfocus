const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-contact">
                  <h2>Our Offices</h2>
                  <p><i className="fa fa-map-marker-alt"></i> <strong>United States:</strong> 666 Plainsboro Rd #615, Plainsboro Township, NJ 08536.</p>
                  <p><i className="fa fa-map-marker-alt"></i> <strong>India:</strong> Plot No 383, Bachpally, Hyderabad 500090, India.</p>
                  <p><i className="fa fa-phone-alt"></i> +1 (609) 701-9988</p>
                  <p><i className="fa fa-envelope"></i> info@qvalfocus.com</p>
                  <div className="footer-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-link">
                  <h2>Quick Links</h2>
                  <a href="">Terms of use</a>
                  <a href="">Privacy policy</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
              </p>
              <div className="form">
                <input className="form-control" placeholder="Email goes here" />
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="#">Qvalfocus</a>, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;