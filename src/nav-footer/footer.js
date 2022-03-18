import { Link } from 'react-router-dom';
const Footer = () => {
    return (<>
        {/* Footer */}
      <footer className="text-center text-lg-start bg-dark
       text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href ="youtube.com" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />E-CELL RGPV
              </h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum accusamus explicabo cumque rem unde similique illo eaque qui, ut maiores, officia culpa voluptates? Dicta exercitationem error, dolor adipisci culpa repellendus!
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
              <Link className="text-reset" to="">Git project</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Git project</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Git project</Link>
              </p>
              <p>
              <Link className="text-reset" to="#">Git project</Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
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
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-home me-3" />UIT RGPV BHOPAL</p>
              <p>
                <i className="fas fa-envelope me-3" />
                MYID@MYMIND.COM
              </p>
              <p><i className="fas fa-phone me-3" /> 0000000000</p>
              
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