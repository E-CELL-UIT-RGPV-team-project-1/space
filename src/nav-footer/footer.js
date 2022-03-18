import { Link } from 'react-router-dom';
const Footer = () => {
    return (<>
        {/* Footer */}
      <footer className="text-center text-lg-start 
       text-muted" style={{ backgroundColor: '#0c081c' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between pt-4 border-top ">
        {/* Left */}
        <div className="me-5 d-none d-lg-block text-white">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-facebook-f" />
          </a>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-twitter" />
          </a>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-google" />
          </a>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-instagram" />
          </a>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-linkedin" />
          </a>
          <a href ="youtube.com" className="me-4 text-white">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className>
        <div className="container text-center text-md-start mt-5 text-white">
          {/* Grid row */}
          <div className="row mt-1">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <i className="fas fa-gem me-3 text-white" />E-CELL RGPV
              </h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum accusamus explicabo cumque rem unde similique illo eaque qui, ut maiores, officia culpa voluptates? Dicta exercitationem error, dolor adipisci culpa repellendus!
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Quick Links
              </h6>
              <p>
              <Link className="text-reset" to="">Home</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Registration</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Organisers</Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Useful links
              </h6>
              <p>
              <Link className="text-reset" to="#">Imp links</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Imp links</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Imp links</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Imp links</Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Contact Us
              </h6>
              <p><i className="fas fa-home me-3 text-white" />E-Cell RGPV, Gandhi Nagar, BhopalL</p>
              <p>
                <i className="fas fa-envelope me-3 text-white" />
                xyz@gmail.com
              </p>
              <p><i className="fas fa-phone me-3 text-white" /> 9876543210</p>
              
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
    </footer>
    {/* Footer */}
    </>  );
}
 
export default Footer;