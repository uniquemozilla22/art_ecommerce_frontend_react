import React , {  useState  }  from 'react';
import classes from "./blog.module.css";
import Sidebar from "../sidebar/sidebar";



const Privacy = () => {

  return (
    <>
      <div className='blogPage'>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-2">
                  <Sidebar />
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className={classes.cardBox}>
                        <img src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CrashDummy_image1600w.jpg" className={classes.cardBoxImage}/>
                        <h4 className={classes.cardHeading}>Thieves Steal Gallery Owner’s Multimillion-Dollar NFT Collection: ‘All My Apes Gone’</h4>
                        <div className={`row ${classes.cardAuthorBox}`}>
                          <div className="col-lg-6">
                            <p>June 21, 2021</p>
                          </div>
                          <div className='col-lg-6'>
                            <p className={classes.cardAuthor}>Yogesh</p>
                          </div>
                        </div>
                        <p className={classes.cardDescription}>Proponents of NFTs argue that the novel technology is a radical force that will democratize art and push out gatekeepers. The truth is that NFTs remain inaccessible to many. The team behind JPG, a new website that aspires to be the Tumblr of the crypto world, is hoping to change that</p>
                    </div>
                  </div>

                </div>



                <div className={`row ${classes.cardBoxList}`}>
                  
                    <div className="col-lg-3 col-sm-4 col-4">
                        <img src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CrashDummy_image1600w.jpg" className={classes.cardBoxImage}/>
                      
                    </div>
                    <div className="col-lg-9 col-sm-8 col-8">
                        <h4 className={classes.cardHeading}>Thieves Steal Gallery Owner’s Multimillion-Dollar NFT Collection: ‘All My Apes Gone’</h4>
                        <div className={`row ${classes.cardAuthorListBox}`}>
                          <div className="col-lg-6 col-sm-6 col-6 p-0">
                            <p>June 21, 2021</p>
                          </div>
                          <div className='col-lg-6  col-sm-6 col-6 p-0'>
                            <p className={classes.cardAuthor}>Yogesh</p>
                          </div>
                        </div>
                        <div className='d-none d-sm-none d-md-block d-lg-block'>
                          <p className={classes.cardDescription}>Proponents of NFTs argue that the novel technology is a radical force that will democratize art and push out gatekeepers. The truth is that NFTs remain inaccessible to many. The team behind JPG, a new website that aspires to be the Tumblr of the crypto world, is hoping to change that</p>

                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Privacy;
