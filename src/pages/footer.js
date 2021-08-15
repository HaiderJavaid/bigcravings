import React from 'react';

class Footer extends React.Component{

    render(){
        return(

            <div>
       {/* ***** Footer Start ***** */}
<footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-xs-12">
        <div className="right-text-content">
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="logo">
          {/* <a href="index.html"><img src="assets/images/white-logo.png" alt /></a> */}
        </div>
      </div>
      <div className="col-lg-4 col-xs-12">
        <div className="left-text-content">
          <p>© Copyright 2021 Bigcravings | Satisfy your food lust</p>
        </div>
      </div>
    </div>
  </div>
</footer>

            </div>
   
            );
        }
    }
    
    export default Footer;