import React, { PureComponent } from 'react'

const Faq = () => {
  
    return (
      <div style={{backgroundColor: '#0c081c'}}>
        <br />
          <p className='text-info Heading' style={{Color: '#eee' , fontSize:'2rem', textAlign:'center', paddingtop:'4rem'}}>
          FAQ's
          </p>
          <div style={{borderRadius: '25px'}} className="accordion w-100 border-info pl-5 pr-5" id="basicAccordion">
        <div  className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button style={{backgroundColor: '#0c081c'}} className="accordion-button collapsed text-secondary " type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Impedit, ipsum quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{backgroundColor: '#271637'}} className="accordion-body text-secondary">
              <strong>This is the first item's accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button style={{backgroundColor: '#0c081c'}} className="accordion-button collapsed text-secondary" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum?
            </button>
          </h2>
          <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{backgroundColor: '#271637'}} className="accordion-body text-secondary">
              <strong>This is the second item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button style={{backgroundColor: '#0c081c'}} className="accordion-button collapsed text-secondary" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Impedit quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{backgroundColor: '#271637'}} className="accordion-body text-secondary">
              <strong>This is the second item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button style={{backgroundColor: '#0c081c'}} className="accordion-button collapsed text-secondary" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, Lorem ipsum dolor sit. Impedit, ipsum quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{backgroundColor: '#271637'}} className="accordion-body text-secondary">
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
        
      </div>
    )
  }

  export default Faq;
