import React, { PureComponent } from 'react'

const Faq = () => {

  return (<>
    <div style={{ backgroundColor: '#0c081c' }}>
      <br />
      <p className='text-info mb-4 Heading2' style={{ Color: '#eee', fontSize: '3rem', textAlign: 'center', paddingtop: '4rem' }}>
        FAQ's
      </p>
      <div style={{ borderRadius: '25px' }} className="accordion w-100 border-info pl-5 pr-5" id="basicAccordion">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button style={{ backgroundColor: '#0c081c' }} className="accordion-button collapsed text-white " type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Impedit, ipsum quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{ backgroundColor: '#271637' }} className="accordion-body text-white">
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
            <button style={{ backgroundColor: '#0c081c' }} className="accordion-button collapsed text-white" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum?
            </button>
          </h2>
          <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{ backgroundColor: '#271637' }} className="accordion-body text-white">
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
            <button style={{ backgroundColor: '#0c081c' }} className="accordion-button collapsed text-white" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Impedit quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{ backgroundColor: '#271637' }} className="accordion-body text-white">
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
            <button style={{ backgroundColor: '#0c081c' }} className="accordion-button collapsed text-white" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, Lorem ipsum dolor sit. Impedit, ipsum quis?
            </button>
          </h2>
          <div id="basicAccordionCollapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-mdb-parent="#basicAccordion" style={{}}>
            <div style={{ backgroundColor: '#271637' }} className="accordion-body text-white">
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
  
    <section style={{ backgroundColor: '#0c081c' }}>
      {/* <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3> */}
      
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4 mt-5">
          <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> A simple
            question?</h6>
          <p>
            <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
            your safety and
            security. All billing information is stored on our payment processing partner.
          </p>
        </div>
    
        <div class="col-md-6 col-lg-4 mb-4 mt-5">
          <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> A question
            that is longer then the previous one?</h6>
          <p>
            <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
            your account. Once the subscription is
            cancelled, you will not be charged next month.
          </p>
        </div>
    
        <div class="col-md-6 col-lg-4 mb-4 mt-5">
          <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> A simple
            question?</h6>
          <p>
            Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
            account at any time with no further obligation.
          </p>
        </div>
    
        <div class="col-md-6 col-lg-4 mb-4">
          <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> A simple
            question?</h6>
          <p>
            Yes. Go to the billing section of your dashboard and update your payment information.
          </p>
        </div>
    
        <div class="col-md-6 col-lg-4 mb-4">
          <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> A simple
            question?</h6>
          <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
            reason.</p>
        </div>
    
        <div class="col-md-6 col-lg-4 mb-4">
          <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Another
            question that is longer than usual</h6>
          <p>
            Of course! We’re happy to offer a free plan to anyone who wants to try our service.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Faq;
