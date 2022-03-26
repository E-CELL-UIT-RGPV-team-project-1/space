import React, { PureComponent } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PastEvents = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div style={{ backgroundColor: '#0c081c' }}>
            <br />
            <p className='hi text-info mb-4 Heading2' style={{ Color: '#eee', fontSize: '3rem', textAlign: 'center', paddingtop: '4rem' }}>
                PAST EVENTS
            </p>
            <div  className="card-deck" style={{ backgroundColor: '#0c081c' }}>

                <div data-aos="zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0"  className="card border border-info shadow-2">
                    <img className="card-img-top " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Card image cap" />
                    <div className="card-body text-info" style={{ backgroundColor: '#0c081c' }}>
                        <h5 className="card-title text-secondary Heading1">CARD TITLE</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>



                <div data-aos="zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" className="card border border-info shadow-2">
                    <img className="card-img-top " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Card image cap" />
                    <div className="card-body text-info" style={{ backgroundColor: '#0c081c' }}>
                        <h5 className="card-title text-secondary Heading1">CARD TITLE</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div data-aos="zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" className="card border border-info shadow-2">
                    <img className="card-img-top " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Card image cap" />
                    <div className="card-body text-info" style={{ backgroundColor: '#0c081c' }}>
                        <h5 className="card-title text-secondary Heading1">CARD TITLE</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div data-aos="zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" className="card border border-info shadow-2">
                    <img className="card-img-top " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Card image cap" />
                    <div className="card-body text-info" style={{ backgroundColor: '#0c081c' }}>
                        <h5 className="card-title text-secondary Heading1">CARD TITLE</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEvents;
