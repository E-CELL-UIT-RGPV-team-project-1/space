import React, { PureComponent } from 'react';
import Registration from './Registration';
import Faq from './Faq';
import PastEvents from './PastEvents';
import AnimatedPage from "./AnimatedPage";
import "./instructions.css";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);



const Instructions = () => {
  return (
    <AnimatedPage>
      <>

        <div className="inst_container" style={{ color: 'white', backgroundColor: '#0c081c' }}>
          <h1 className="Heading">INSTRUCTIONS</h1>
          <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }}>
                <lord-icon trigger="loop"  src="https://cdn.lordicon.com/nobciafz.json" colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>
</i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} >
                <lord-icon trigger="loop"  src="https://cdn.lordicon.com/imamsnbq.json" colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>

                </i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} >
                <lord-icon trigger="loop" src="https://cdn.lordicon.com/zpxybbhl.json"  colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>

                </i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
          </div>
         
           <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} >
                <lord-icon trigger="loop" src="https://cdn.lordicon.com/nocovwne.json"  colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>

                </i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }}>
                <lord-icon trigger="loop"  src="https://cdn.lordicon.com/wloilxuq.json"  colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>

                </i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} >
                <lord-icon trigger="loop"  src="https://cdn.lordicon.com/ssdupzsv.json"  colors="primary:#7166ee,secondary:#4f1091" style={{ width:150,height:150 }}></lord-icon>

                </i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
          </div>
        </div>





        {/* <div style={{ backgroundColor: '#0c081c' }}>
      <br />
      <p className='hi text-info mt-2 mb-4 Heading2' style={{ Color: '#eee', fontSize: '3rem', textAlign: 'center', paddingtop: '4rem' }}>
        INSTRUCTIONS
      </p>
      <div role="tabpanel " className="tab-panel pl-5" id="pricing">
        <div className="insideTab">
          <div className="row">
            <div className="col-lg-12 pricingdescnew ">
              <h4 className='text-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque eius suscipit placeat?</h4>
              <p className='text-info'>Lorem ipsum:</p>
              <ul>
                <li className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, maiores.</li>
                <li className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum praesentium illo et labore.</li>
                <li className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident.</li>
              </ul>
              <p className='text-info'>Lorem:</p>
              <ul>
                <li className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              <p className='text-info'>Lorem ipsum dolor:</p>
              <ul>
                <li className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora nobis est, iure voluptatibus vitae?</li>
              </ul>
            </div>
          </div>
        </div></div>

    </div> */}

        <Registration />
        <Faq />
        <PastEvents />

      </>
    </AnimatedPage>

  )
}
export default Instructions;
