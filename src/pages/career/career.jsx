import React , {  useState  }  from 'react';
import classes from "./career.module.css";



const Privacy = () => {

  return (
    <>
      <div className={classes.careerPage}>
            <div className="container-fluid">
              <div className="row">
                <h3 className='pageHeading'>Career</h3>
              </div>
                <div className={"row " + classes.careerheader}>
                  <div className="col-lg-3 col-3">
                    Posting Title
                  </div>
                  <div className="col-lg-1 col-1">
                    Remote
                  </div>
                  <div className="col-lg-2 col-2">
                    Department Name
                  </div>
                  <div className="col-lg-2 col-2">
                    City
                  </div>
                  <div className="col-lg-2 col-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2 col-2">
                  </div>
                
                </div>
                <div className={"row " + classes.careerrow}>
                  <div className="col-lg-3 col-3">
                    Full Stack Developer
                  </div>
                  <div className="col-lg-1 col-1">
                    Yes
                  </div>
                  <div className="col-lg-2 col-2">
                    Development
                  </div>
                  <div className="col-lg-2 col-2">
                    Kathmandu
                  </div>
                  <div className="col-lg-2 col-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2 col-2">
                    <button className={classes.applynow}>Apply Now</button>
                  </div>
                
                </div>


                <div className={"row " + classes.careerrow}>
                  <div className="col-lg-3 col-3">
                    Full Stack Developer
                  </div>
                  <div className="col-lg-1 col-1">
                    Yes
                  </div>
                  <div className="col-lg-2 col-2">
                    Development
                  </div>
                  <div className="col-lg-2 col-2">
                    Kathmandu
                  </div>
                  <div className="col-lg-2 col-2">
                    Full Time 
                  </div>
                  <div className="col-lg-2 col-2">
                    <button className={classes.applynow}>Apply Now</button>
                  </div>
                
                </div>

            </div>
        </div>
    </>
  );
};

export default Privacy;
