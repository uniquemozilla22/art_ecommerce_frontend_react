import React , {  useState  }  from 'react';
import classes from "./honorCard.module.css";





const HonorCard = () => {

  return (
    <>  
    
                    <div className={classes.honorBox}>
                        <img className={classes.honorBoxImg} src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"  />
                        <div className={classes.honorBoxContent}>
                        <h2 className={classes.honorBoxTitle}>Kritika Thapa</h2>
                        <span>Founder</span>
                        </div>
                      
                    </div>

    </>
  );
};

export default HonorCard;
