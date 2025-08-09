const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-100px)] min-h-[500px] bg-qval-darkblue">
        <div className="absolute inset-0">
          <img src="/img/carousel-1.jpg" alt="Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-qval-darkblue/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-thin tracking-wider leading-tight mb-4">Fast & Trusted Consulting Service</h1>
            <p className="text-lg md:text-xl mb-8">
              Pioneering solutions in Life Sciences and IT, we connect top-tier talent with leading organizations to drive innovation and success.
            </p>
          </div>
        </div>
      </section>

      {/* Fact Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white shadow-lg rounded-md">
              <img src="/img/icon-4.png" alt="Icon" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-qval-darkblue">Qualified Team</h2>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-md">
              <img src="/img/icon-1.png" alt="Icon" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-qval-darkblue">Individual Approach</h2>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-md">
              <img src="/img/icon-8.png" alt="Icon" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-qval-darkblue">100% Success</h2>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-md">
              <img src="/img/icon-6.png" alt="Icon" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-qval-darkblue">100% Satisfaction</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full">
              <div className="relative w-full h-full p-10">
                  <img src="/img/about-2.jpg" alt="About us 1" className="relative w-full rounded-lg shadow-lg" />
                  <img src="/img/about-1.jpg" alt="About us 2" className="absolute w-1/2 top-0 left-0 rounded-lg shadow-lg border-8 border-white" />
              </div>
            </div>
            <div>
              <p className="text-qval-blue font-semibold">Learn About Us</p>
              <h2 className="text-4xl md:text-5xl font-thin text-qval-darkblue mt-2 mb-6">25 Years Experience</h2>
              <h3 className="text-xl font-semibold text-qval-darkblue mb-2">Who We Are:</h3>
              <p className="text-gray-600 mb-6">
                QvalFocus is a forward-thinking leader in consulting, locating the most qualified individuals to pave the path for success. As a premier professional services organization, we connect top-tier talent with leading organizations in Life Sciences and Information Technology—built on expertise, precision, and dedication to shaping successful careers and partnerships.
              </p>
              <Link to="/about" className="inline-block bg-transparent border-2 border-qval-darkblue text-qval-darkblue font-semibold py-2 px-6 rounded hover:bg-qval-darkblue hover:text-white transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;