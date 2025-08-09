import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="top-bar-left">
                <div className="text">
                  <i className="far fa-clock"></i>
                  <h2>info@qvalfocus.com</h2>
                </div>
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <h2>+1(609) 701 - 9988</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-bar-right">
                <div className="social">
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

      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/img/qvalfocus.png" alt="Qvalfocus Logo" />
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/feature" className="nav-item nav-link">Feature</Link>
              <Link to="/advisor" className="nav-item nav-link">Advisor</Link>
              <Link to="/review" className="nav-item nav-link">Review</Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;