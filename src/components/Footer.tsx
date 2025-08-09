const Footer = () => {
  return (
    <div className="bg-qval-darkblue text-gray-300 pt-20 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-oswald text-white mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-qval-blue">Our Offices</h2>
                <div className="space-y-3">
                  <p className="flex items-start"><i className="fa fa-map-marker-alt mt-1 mr-3 text-qval-blue"></i><strong>United States:</strong> 666 Plainsboro Rd #615, Plainsboro Township, NJ 08536.</p>
                  <p className="flex items-start"><i className="fa fa-map-marker-alt mt-1 mr-3 text-qval-blue"></i><strong>India:</strong> Plot No 383, Bachpally, Hyderabad 500090, India.</p>
                  <p><i className="fa fa-phone-alt mr-3 text-qval-blue"></i>+1 (609) 701-9988</p>
                  <p><i className="fa fa-envelope mr-3 text-qval-blue"></i>info@qvalfocus.com</p>
                </div>
                <div className="flex space-x-4 mt-5">
                  <a href="#" className="text-gray-300 hover:text-qval-blue"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-300 hover:text-qval-blue"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-300 hover:text-qval-blue"><i className="fab fa-youtube"></i></a>
                  <a href="#" className="text-gray-300 hover:text-qval-blue"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-300 hover:text-qval-blue"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-oswald text-white mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-qval-blue">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-qval-blue hover:ml-1 transition-all duration-300 before:content-['\f105'] before:font-awesome before:mr-2">Terms of use</a></li>
                  <li><a href="#" className="hover:text-qval-blue hover:ml-1 transition-all duration-300 before:content-['\f105'] before:font-awesome before:mr-2">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-qval-blue hover:ml-1 transition-all duration-300 before:content-['\f105'] before:font-awesome before:mr-2">Cookies</a></li>
                  <li><a href="#" className="hover:text-qval-blue hover:ml-1 transition-all duration-300 before:content-['\f105'] before:font-awesome before:mr-2">Help</a></li>
                  <li><a href="#" className="hover:text-qval-blue hover:ml-1 transition-all duration-300 before:content-['\f105'] before:font-awesome before:mr-2">FQAs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-xl font-oswald text-white mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-qval-blue">Newsletter</h2>
            <p>Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus.</p>
            <div className="mt-4">
              <form className="flex">
                <input type="email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" placeholder="Email goes here" />
                <button type="submit" className="px-6 py-2 bg-qval-blue text-white font-semibold rounded-r-md hover:bg-blue-600 transition-colors">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6">
          <div className="text-center text-gray-500">
            <p>&copy; <a href="#" className="text-gray-300 hover:text-qval-blue">Qvalfocus</a>, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;