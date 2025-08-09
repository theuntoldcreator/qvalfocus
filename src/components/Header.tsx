import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClass = (path: string) => 
    `block py-2 px-3 rounded md:bg-transparent md:p-0 ${location.pathname === path ? 'text-white bg-qval-blue md:text-qval-blue' : 'text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-qval-blue'}`;

  const getPagesLinkClass = () => 
    `block py-2 px-3 rounded md:bg-transparent md:p-0 ${['/blog', '/single'].includes(location.pathname) ? 'text-white bg-qval-blue md:text-qval-blue' : 'text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-qval-blue'}`;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-qval-darkblue to-qval-blue text-white text-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <i className="far fa-clock"></i>
                <span>8:00 - 9:00 | Mon - Fri</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa fa-phone-alt"></i>
                <span>+123 456 7890</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-qval-blue"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-qval-blue"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-qval-blue"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-qval-blue"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-qval-darkblue/90 backdrop-blur-sm w-full z-20 top-0 start-0 ${isSticky ? 'fixed shadow-md' : 'absolute'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/img/qvalfocus.png" className="h-8" alt="Qvalfocus Logo" />
          </Link>
          <button onClick={() => setIsNavOpen(!isNavOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isNavOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li><Link to="/" className={getNavLinkClass('/')}>Home</Link></li>
              <li><Link to="/about" className={getNavLinkClass('/about')}>About</Link></li>
              <li><Link to="/service" className={getNavLinkClass('/service')}>Service</Link></li>
              <li><Link to="/feature" className={getNavLinkClass('/feature')}>Feature</Link></li>
              <li><Link to="/advisor" className={getNavLinkClass('/advisor')}>Advisor</Link></li>
              <li><Link to="/review" className={getNavLinkClass('/review')}>Review</Link></li>
              <li className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${getPagesLinkClass()} flex items-center justify-between w-full`}>
                  Pages <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                </button>
                <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute top-full mt-2 md:mt-1 w-44 bg-white rounded-lg shadow-lg z-10`}>
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog Page</Link></li>
                    <li><Link to="/single" className="block px-4 py-2 hover:bg-gray-100">Single Page</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="/contact" className={getNavLinkClass('/contact')}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;