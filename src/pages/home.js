import React from 'react';

class Home extends React.Component{

    render(){
        return(
           <div>
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    
    <div className="container">
      <div className="row">
        <div className="col-12">
        <a href="index.html" className="logo1">
                 
                 BIGCRAVINGS
                 <img src="assets/images/whisk.png" align="klassy cafe html template" height="30px" width="30px"/>
             </a>
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="#about">About</a></li>
              
              <li className="scroll-to-section"><a href="#menu">Menu</a></li>
              <a href="index.html" className="logo">
                 
                BIGCRAVINGS
                <img src="assets/images/whisk.png" align="klassy cafe html template" height="30px" width="30px"/>
            </a>
              <li className="scroll-to-section"><a href="#chefs">Chefs</a></li> 
              
              {/* <li class=""><a rel="sponsored" href="https://templatemo.com" target="_blank">External URL</a></li> */}
              <li className="scroll-to-section"><a href="#reservation">Contact Us</a></li> 
            </ul>        
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  {/* ***** Main Banner Area Start ***** */}
  <div id="top">
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-lg-4">
          <div className="left-content">
            <div className="inner-content">
              <h4>KlassyCafe</h4>
              <h6>THE BEST EXPERIENCE</h6>
              <div className="main-white-button scroll-to-section">
                <a href="#reservation">Make A Reservation</a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-12">
          <div className="main-banner header-text">
            <div className="Modern-Slider">
              {/* Item */}
              <div className="item">
                <div className="img-fill">
                  <img class="img-fluid" src="assets/images/fresh.png" alt />
                </div>
              </div>
              {/* // Item */}
              {/* Item */}
              <div className="item">
                <div className="img-fill">
                  <img class="img-fluid" src="assets/images/delivery.png" alt />
                </div>
              </div>
              {/* // Item */}
              {/* Item */}
              <div className="item">
                <div className="img-fill">
                  <img class="img-fluid" src="assets/images/promo.png" alt />
                </div>
              </div>
              {/* // Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Main Banner Area End ***** */}
</div>



        
        );
    }
}

export default Home;