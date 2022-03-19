import React, { PureComponent } from 'react';
import Registration from './Registration';
import Faq from './Faq';
import PastEvents from './PastEvents';

const Instructions = () => {
  return (<>
    <div style={{ backgroundColor: '#0c081c' }}>
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
                <li className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, maiores.</li>
                <li className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum praesentium illo et labore.</li>
                <li className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident.</li>
              </ul>
              <p className='text-info'>Lorem:</p>
              <ul>
                <li className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              <p className='text-info'>Lorem ipsum dolor:</p>
              <ul>
                <li className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora nobis est, iure voluptatibus vitae?</li>
              </ul>
            </div>
          </div>
        </div></div>

    </div>

    <Registration />
    <Faq />
    <PastEvents />

  </>)
}
export default Instructions;
