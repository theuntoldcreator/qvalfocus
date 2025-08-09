const Review = () => {
  return (
    <>
      <div className="fact mt-125">
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
            <div className="testimonial-item">
              <img src="/img/testimonial-2.jpg" alt="Image" />
              <p>
                Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
              </p>
              <h2>Client Name</h2>
              <h3>Profession</h3>
            </div>
            <div className="testimonial-item">
              <img src="/img/testimonial-3.jpg" alt="Image" />
              <p>
                Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
              </p>
              <h2>Client Name</h2>
              <h3>Profession</h3>
            </div>
            <div className="testimonial-item">
              <img src="/img/testimonial-4.jpg" alt="Image" />
              <p>
                Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
              </p>
              <h2>Client Name</h2>
              <h3>Profession</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;