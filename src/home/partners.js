import './partners.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// const card_spo={
//     width: '20vw',
//     padding: '0.5rem',
//     margin: 'auto',
//     backgroundColor: 'blue',
// }
// style={card_spo}

const Parteners = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (<>

        <div className="card_container" style={{color:'white'}}>

            <h1 className="Heading" >SPONSORS</h1>

            <div className="card_row_1" >
                <div data-aos="fade-up-right" className="cardspo">
                    <div className="card ">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid "

                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="cardspo">
                    <div className="card " >
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid "

                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="cardspo">
                    <div className="card " >
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid "

                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card_row_2">
                <div data-aos="fade-up-right" className="cardspo">
                    <div className="card " >
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid "

                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="cardspo">
                    <div className="card " >
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid "

                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </>
    );
}

export default Parteners;