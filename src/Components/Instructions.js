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
          <h1 className="Heading">iNSTRUCTIONS</h1>
          <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">


                <lord-icon src="https://cdn.lordicon.com/eszyyflr.json" trigger="loop" colors="primary:#4030e8,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>

              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">

                {/* <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-code"></i> */}
                <lord-icon src="https://cdn.lordicon.com/zpxybbhl.json" trigger="loop" colors="primary:#4030e8,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>
                
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">

                {/* <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-code-merge"></i> */}
                <lord-icon src="https://cdn.lordicon.com/gqdnbnwt.json" trigger="loop" colors="primary:#4030e8,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
          </div>

          <div className="row_inst1">
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">

                {/* <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-cubes"></i> */}
                <lord-icon src="https://cdn.lordicon.com/wloilxuq.json" trigger="loop" colors="primary:#4030e8,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>

               
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">

                {/* <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-laptop-code"></i> */}
                <lord-icon src="https://cdn.lordicon.com/qhgmphtg.json" trigger="loop" colors="primary:#4030e8,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>

                
              </div>
              <div className="inst-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident repudiandae aperiam id sunt hic excepturi eligendi quas omnis aut.
              </div>
            </div>
            <div className="inst">
              <div style={{ marginBottom: 15 }} className="pngtag">
                <lord-icon src="https://cdn.lordicon.com/gqzfzudq.json" trigger="loop" colors="primary:#7166ee,secondary:#30c9e8" style={{ width: '120px', height: '120px' }}>
                </lord-icon>
                {/* <i style={{ height: 20, width: 20, fontSize: 35, }} class="fa-solid fa-user-secret"></i> */}
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
