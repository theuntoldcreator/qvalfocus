import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';
  };
  
  const getPagesLinkClass = () => {
    return ['/blog', '/single'].includes(location.pathname) ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle';
  }

  return (
    <>
      <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="top-bar-left">
                <div className="text">
                  <i className="far fa-clock"></i>
                  <h2>8:00 - 9:00</h2>
                  <p>Mon - Fri</p>
                </div>
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <h2>+123 456 7890</h2>
                  <p>For Appointment</p>
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

      <div className={`navbar navbar-expand-lg bg-dark navbar-dark ${isSticky ? 'nav-sticky' : ''}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/img/qvalfocus.png" alt="Qvalfocus Logo" />
          </Link>
          <button type="button" className="navbar-toggler" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-between ${isNavOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <Link to="/" className={getNavLinkClass('/')}>Home</Link>
              <Link to="/about" className={getNavLinkClass('/about')}>About</Link>
              <Link to="/service" className={getNavLinkClass('/service')}>Service</Link>
              <Link to="/feature" className={getNavLinkClass('/feature')}>Feature</Link>
              <Link to="/advisor" className={getNavLinkClass('/advisor')}>Advisor</Link>
              <Link to="/review" className={getNavLinkClass('/review')}>Review</Link>
              <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <a href="#" className={getPagesLinkClass()} onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen);}}>Pages</a>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <Link to="/contact" className={getNavLinkClass('/contact')}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;