import './timeline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Timeline = () => {
    return (

        <div className="contain_timeline">
            <div className="heading_timeline">
                <h1 className="Heading">TIMELINE</h1>
            </div>
            <div className="container-fluid py-5 " style={{color:'white'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="horizontal-timeline">
                            <ul className="list-inline items">
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-info">4 June</div>
                                        <h5 className="pt-2" style={{color:'white'}}>Event One</h5>
                                        <p className="text-muted " style={{color:'white'}}>
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla ipsam accusantium facilis, nam in!
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-success">5 June</div>
                                        <h5 className="pt-2">Event Two</h5>
                                        <p className="text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla ipsam accusantium facilis, nam in!
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-danger">6 June</div>
                                        <h5 className="pt-2">Event Three</h5>
                                        <p className="text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla ipsam accusantium facilis, nam in!
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-warning">7 June</div>
                                        <h5 className="pt-2">Event Four</h5>
                                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla ipsam accusantium facilis, nam in!
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Timeline;