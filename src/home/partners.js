import './partners.css';

const Parteners = () => {
    return (
        <div classNameName="parteners-box">

            <section className="teams" id="teams">
                <h2 className="title">sponsers/parteners</h2>
                <div className="max-width">

                    <div className="row1">
                        <div className="cardss">
                            <div className="box">
                                <img src={require('../img/moon.png')} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="cardss">
                            <div className="box">
                                <img src={require('../img/moon.png')} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="cardss">
                            <div className="box">
                                <img src={require('../img/moon.png')} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="cardss">
                            <div className="box">
                                <img src={require('../img/moon.png')} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="cardss">
                            <div className="box">
                                <img src={require('../img/moon.png')} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Parteners;