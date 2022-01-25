import React , {  useState  }  from 'react';
import classes from "./faqs.module.css";
import { Accordion } from "react-bootstrap";
import './faqs.css';
import FeatherIcon from 'feather-icons-react';



const Faqs = () => {

  return (
    <>
      <div  id="faqspage" className={classes.FaqsPage}>
            <div className="container-fluid">
                <div className="row">
                    <h3 className="pageHeading">Frequently Asked Questions (FAQ)</h3>
                    
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className={classes.faqsItem} eventKey="0">
                        <Accordion.Header className={classes.faqsHeading}> Will every customer get discount?</Accordion.Header>
                        <Accordion.Body>
                          <div className='accordion-description'>
                            No, the offer is valid for one time per customer on his/her 1st transaction during campaign period.

                          </div>

                          <div className="row ">
                            <div className="col-lg-8 col-sm-8 col-12">
                                <div className={classes.faqFooter}>
                                  <div>
                                    <span>Helpful</span>
                                  </div>
                                  <div>
                                    <FeatherIcon icon="thumbs-up" />  Yes
                                  </div> 
                                  <div>
                                    <FeatherIcon icon="thumbs-down" />  No
                                  </div>
                                </div>
                             
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12">
                              <div className={classes.faqSocialIcon} >
                                  <span className="">Share</span>
                                  <FeatherIcon icon="facebook" className={classes.socialIcon} /> 
                                  <FeatherIcon icon="twitter"  className={classes.socialIcon}  /> 
                              </div>

                                
                            </div>

                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={classes.faqsItem} eventKey="1">
                        <Accordion.Header className={classes.faqsHeading}>What are the terms and condition for Esewa Wallet?</Accordion.Header>
                        <Accordion.Body>
                          <div className='accordion-description'>
                            No, the offer is valid for one time per customer on his/her 1st transaction during campaign period.

                          </div>

                          <div className="row ">
                            <div className="col-lg-8 col-sm-8 col-12">
                                <div className={classes.faqFooter}>
                                  <div>
                                    <span>Helpful</span>
                                  </div>
                                  <div>
                                    <FeatherIcon icon="thumbs-up" />  Yes
                                  </div> 
                                  <div>
                                    <FeatherIcon icon="thumbs-down" />  No
                                  </div>
                                </div>
                             
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12">
                              <div className={classes.faqSocialIcon} >
                                  <span className="">Share</span>
                                  <FeatherIcon icon="facebook" className={classes.socialIcon} /> 
                                  <FeatherIcon icon="twitter"  className={classes.socialIcon}  /> 
                              </div>

                                
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
