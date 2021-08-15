import React from 'react';

class About extends React.Component{

    render(){
        return(

            <div>
               {/* ***** About Area Starts ***** */}
<section className="section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-xs-12">
        <div className="left-text-content">
          <div className="section-heading">
            <h6>About Us</h6>
            <h1>LET'S SATISFY YOUR CRAVINGS</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do. <br /></p>
          <div className="row">
            <button className="button-order main-button-icon">Order Now</button>
            <button className="button-menu main-button-icon">See Our Full Menu</button>
            {/* <div className="col-4">
              <img src="assets/images/about-thumb-01.jpg" alt />
            </div>
            <div className="col-4">
              <img src="assets/images/about-thumb-02.jpg" alt />
            </div>
            <div className="col-4">
              <img src="assets/images/about-thumb-03.jpg" alt />
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-xs-12">
        <div className="right-content">
          <div className="thumb">
            <a rel="nofollow" href="http://youtube.com"><i className="fa fa-play" /></a>
            <img src="assets/images/about-video-bg.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ***** About Area Ends ***** */}


            </div>
   
            );
        }
    }
    
    export default About;