const Blog = () => {
  return (
    <div className="blog blog-page mt-125">
      <div className="container">
        <div className="section-header">
          <p>Consulting Blog</p>
          <h2>Latest From Our Consulting Blog</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/img/blog-1.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                <div className="blog-meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Category</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                  </p>
                  <a className="btn" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/img/blog-2.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                <div className="blog-meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Category</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                  </p>
                  <a className="btn" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/img/blog-3.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                <div className="blog-meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Category</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                  </p>
                  <a className="btn" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/img/blog-4.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                <div className="blog-meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Category</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                  </p>
                  <a className="btn" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;