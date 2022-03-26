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
          <h1 className="Heading">INSTRUCTIONS</h1>
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

        <Registration />
        <Faq />
        <PastEvents />

      </>
    </AnimatedPage>

  )
}
export default Instructions;
