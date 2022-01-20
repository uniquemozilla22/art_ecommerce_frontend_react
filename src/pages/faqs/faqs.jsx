import React , {  useState  }  from 'react';
import classes from "./faqs.module.css";
import { Accordion } from "react-bootstrap";
import './faqs.css';



const Faqs = () => {

  return (
    <>
      <div  id="faqspage" className={classes.FaqsPage}>
            <div className="container-fluid">
                <div className="row">
                    <h3>Privacy Policy</h3>
                    
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className={classes.faqsItem} eventKey="0">
                        <Accordion.Header className={classes.faqsHeading}>Category</Accordion.Header>
                        <Accordion.Body>
                          <div className='accordion-description'>
                            No, the offer is valid for one time per customer on his/her 1st transaction during campaign period.

                          </div>

                          <div className="row ">
                            <div className="col-lg-8 col-sm-8 col-12">
                                <div className="faqFooter">
                                  <div>
                                    Helpful
                                  </div>
                                  <div>
                                    Yes
                                  </div> 
                                  <div>
                                    No
                                  </div>
                                </div>
                             
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12">
                                 <img src="./../../../Assets/facebook.png" />
                            </div>

                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={classes.faqsItem} eventKey="1">
                        <Accordion.Header className={classes.faqsHeading}>Category</Accordion.Header>
                        <Accordion.Body>
                          <div className='accordion-description'>
                            No, the offer is valid for one time per customer on his/her 1st transaction during campaign period.

                          </div>

                          <div className="row ">
                            <div className="col-lg-8 col-sm-8 col-12">
                                <div className="faqFooter">
                                  <div>
                                    Helpful
                                  </div>
                                  <div>
                                    Yes
                                  </div> 
                                  <div>
                                    No
                                  </div>
                                </div>
                             
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12">
                                 <img src="./../../../Assets/facebook.png" />
                            </div>

                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
  );
};

export default Faqs;
