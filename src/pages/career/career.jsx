import React , {  useState  }  from 'react';
import classes from "./career.module.css";



const Privacy = () => {

  return (
    <>
      <div className='careerPage'>
            <div className="container">
              <div className="row">
                <h3></h3>
              </div>
            <div className={"row " + classes.careerheader}>
                  <div className="col-lg-3">
                    Full Stack Developer
                  </div>
                  <div className="col-lg-1">
                    Yes
                  </div>
                  <div className="col-lg-2">
                    Development
                  </div>
                  <div className="col-lg-2">
                    Kathmandu
                  </div>
                  <div className="col-lg-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2">
                  </div>
                
                </div>
                <div className={"row " + classes.careerrow}>
                  <div className="col-lg-3">
                    Full Stack Developer
                  </div>
                  <div className="col-lg-1">
                    Yes
                  </div>
                  <div className="col-lg-2">
                    Development
                  </div>
                  <div className="col-lg-2">
                    Kathmandu
                  </div>
                  <div className="col-lg-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2">
                    <button className={classes.applynow}>Apply Now</button>
                  </div>
                
                </div>

                <div className={"row " + classes.careerrow}>
                  <div className="col-lg-3">
                    Full Stack Developer
                  </div>
                  <div className="col-lg-1">
                    Yes
                  </div>
                  <div className="col-lg-2">
                    Development
                  </div>
                  <div className="col-lg-2">
                    Kathmandu
                  </div>
                  <div className="col-lg-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2">
                    <button className={classes.applynow}>Apply Now</button>
                  </div>
                
                </div>
            </div>
        </div>
    </>
  );
};

export default Privacy;
