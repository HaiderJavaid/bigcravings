import React from 'react';

class Chef extends React.Component{

    render(){
        return(

            <div>
              {/* ***** Chefs Area Starts ***** */}
<section className="section" id="chefs">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 offset-lg-4 text-center">
        <div className="section-heading">
          <h6>Our Baker</h6>
          <h2>Made with love <br/>just for you</h2>
        </div>
      </div>
    </div>
    <div className="row">
     
     
      <div className="col-lg-4">
        <div className="chef-item">
          <div className="thumb">
            <div className="overlay" />
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google" /></a></li>
            </ul>
            <img src="assets/images/chefs-03.jpg" alt="Chef #3" />
          </div>
          <div className="down-content">
            <h4>Anisah Mothar</h4>
            <span>Owner and Baker</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ***** Chefs Area Ends ***** */}

            </div>
   
            );
        }
    }
    
    export default Chef;