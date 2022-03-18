import './timeline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Timeline = () => {
    return (
        
            <div className="timeline">
                <div className="timeline-row">
                    <div className="timeline-time" >
                        1:00 AM<small>Dec 1</small>
                    </div>
                    <div className="timeline-content" >
                        <img className="icon-attachment" src={require('../img/setern.png')} alt="" />
                        <h4>Anuusment</h4>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vitae!</p>
                        {/* <div className="thumbs">
                                <img className="img-fluid rounded" src={require("./img/moon.png")} alt="Maxwell Admin" />
                                <img className="img-fluid rounded" src={require("./img/moon.png")} alt="Maxwell Admin" />
                                <img className="img-fluid rounded" src={require("./img/moon.png")} alt="Maxwell Admin" />
                            </div> */}
                    </div>
                </div>

                <div className="timeline-row">
                    <div className="timeline-time">
                        1:00 AM<small>Dec 1</small>
                    </div>
                    <div className="timeline-content" >
                        <img className="icon-attachment" src={require('../img/setern.png')} alt="" />
                        <h4>registration starts</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vitae!
                        </p>
                    </div>
                </div>

                <div className="timeline-row">
                    <div className="timeline-time">
                        1:00 AM<small>Dec 1</small>
                    </div>
                    <div className="timeline-content">
                        <img className="icon-attachment" src={require('../img/setern.png')} alt="" />
                        <h4>Session</h4>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vitae!</p>

                    </div>
                </div>

                <div className="timeline-row">
                    <div className="timeline-time">
                        1:00 AM<small>Dec 1</small>
                    </div>
                    <div className="timeline-content">
                        <img className="icon-attachment" src={require('../img/setern.png')} alt="" />
                        <h4>Riwords</h4>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vitae!</p>

                    </div>
                </div>
            </div>

       


    );
}

export default Timeline;