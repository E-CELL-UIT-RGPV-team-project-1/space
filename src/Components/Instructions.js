import React, { PureComponent } from 'react';
import Registration from './Registration';
import Faq from './Faq';
import PastEvents from './PastEvents';
import AnimatedPage from "./AnimatedPage";
import "./instructions.css";



const Instructions = () => {
  return (
    <AnimatedPage>
      <>

        <div className="inst_container" style={{ color: 'white', backgroundColor: '#0c081c' }}>
          <h1 className="Heading">instructions</h1>
          <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-user"></i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-code"></i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }}  class="fa-solid fa-code-merge"></i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
          </div>
         
           <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-cubes"></i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }}class="fa-solid fa-laptop-code"></i>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-user-secret"></i>
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
