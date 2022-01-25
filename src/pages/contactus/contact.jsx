import React , {  useState  }  from 'react';
import classes from "./contact.module.css";

const Contact = () => {

  return (
    <>
        <div className={classes.pageContact}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="pageHeading">Contact Us</h2>
                    </div>
                </div>
                <div className={"row " + classes.contactBox}>
                    <div className="col-lg-5">
                        <img alt="contactImage" className='w-100' src="https://s3-alpha-sig.figma.com/img/3497/cf1d/6c4e75162258e7ac76c894e908bd7bdd?Expires=1643587200&Signature=QPLUoR03EgsW8nP8Qw2EQOJqVe-Ay4bEFrnjZo-HkbkKe~c12M8yPBszD72FapUWs8KeQ~nX~sI675WcSFA0XSSfGt-vECWaoHr7~BSw3uQ8IksaYaqf7GQ5DB0-JszgTnn8aO8WWzsGultC2tg3rrErf1u9NTbJ1OfOUrdGstGijh4OmCM~MAXHr03MCbivLKR1UZBg453dUvvvsHyMCa5tFLBeLchgzqVVy9g8oSpwpOgN1S0~PAhT6CH4safVqsiRZ1HjnpPofPM2YLDe9SbgkBzC7jOzezr7FTbqEYcZ1rh1gpwu-o2h5t6YcOZ5LjoI4rj1aRx2IwJrW62XSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </div>
                    <div className="col-lg-7">
                        <input type="text" className={classes.inputText} placeholder='Contact Number'></input>
                        <input type="text" className={classes.inputText} placeholder='Contact Number'></input>
                        <textarea rows={5} className={classes.inputText} placeholder='Message'></textarea>
                        <button className={classes.inputBtn}>Send Email</button>
                    </div>
                </div>
            </div>

        </div>

     
    </>
  );
};

export default Contact;
