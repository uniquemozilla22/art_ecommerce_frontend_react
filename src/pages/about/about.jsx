import React , {  useState  }  from 'react';
import classes from "./about.module.css";

import HonorCard from "./honor/honorCard";



const About = () => {

  return (
    <>  
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className='pageHeading'>About Us.</h2>
            </div>
        </div>
    </div>
    <img src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"  className='w-100'/>
        <div className="container">
            <div className={classes.aboutSection}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className='w-100' src="https://s3-alpha-sig.figma.com/img/942b/ecc0/ad68b029f260f64c9f1029f30cbef537?Expires=1643587200&Signature=QJSvC8Lz5Q2nvHM1SSQJgFCt8xSNqlWfG4TAjtVclkh92Wz33hJEg0euntCXYEyXRxcSh954mYG~dosWoB3lK2noL0hKZ2m07M9uz-UJoCyDdIwzPYFt9834KApT466o6Zsk9tagWgLnIF69xqzJavUKe~mg9FWdhm2dxhFYiXkoJC24mh~gK~bZx0ROvOrv-qZIv452zFigbHHpqpZg3Sqm4wbdWJGzV8ZEKnVxRmPfnhRyQgDbRqxxgrKhoWIJVifT~rcO1WGrdFZhjAjm2A~QKevn0FZTQxCAaia0Fu~lHDuOynYvhR8lPReqdijvXBLfPxO0YWY3NkzcXcFj1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                </div>
                <div className="col-lg-6">
                    <h3 className={classes.aboutHeading}>Arneli's</h3>
                    <h4 className={classes.aboutSubHeading}>Art Gallery</h4>
                    <p>The storied rise and fall of Jean-Michel Basquiat is headed for a new rendering on the silver screen, according to Variety. Under the title Samo Lives (citing the mantle that Basquiat used as a mysterious graffiti tag on the streets of New York), the biopic is being developed and financed by Endeavor Content and director Julius Onah, whose credits include 2015’s The Girl Is in Trouble (a name-making debut produced by Spike Lee), 2018’s The Cloverfield Paradox (produced by J. J. Abrams), and 2019’s Luce.</p>
                    <p>The storied rise and fall of Jean-Michel Basquiat is headed for a new rendering on the silver screen, according to Variety. Under the title Samo Lives (citing the mantle that Basquiat used as a mysterious graffiti tag on the streets of New York), the biopic is being developed and financed by Endeavor Content and director Julius Onah, whose credits include 2015’s The Girl Is in Trouble (a name-making debut produced by Spike Lee), 2018’s The Cloverfield Paradox (produced by J. J. Abrams), and 2019’s Luce.</p>
                </div>
            </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12"><h3 className={classes.aboutHeading}> <span>People At</span> Honor</h3></div>
            
            </div>
            <div className={classes.honorBoxGrid}>
          
                    <HonorCard />
                    <HonorCard />
                    <HonorCard />


               
            </div>
        </div>
     
    </>
  );
};

export default About;
