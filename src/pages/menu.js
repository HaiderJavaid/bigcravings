import React from 'react';

class Menu extends React.Component{

    render(){
        return(

            <div>
                 {/* ***** Menu Area Starts ***** */}
<section className="section" id="menu">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-heading">
          <h6>Our Galleries</h6>
          <h2>OUR SELECTION OF CAKES</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="menu-item-carousel">
    <div className="col-lg-12">
      <div className="owl-menu-item owl-carousel">
        <div className="item">
          <div className="card card1">
           
            <div className="info">
              <h1 className="title">Chocolate Cake</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card2">
            <div className="info">
              <h1 className="title">Klassy Pancake</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card3">
            <div className="info">
              <h1 className="title">Blueberry Cake</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card4">
          <div className="info">
              <h1 className="title">Tall Klassy Bread</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="item">
          <div className="card card5">
           
            <div className="info">
              <h1 className="title">Klassy Cup Cake</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card3">
          
            <div className="info">
              <h1 className="title">Klassic Cake</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
              <div className="main-text-button">
                <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ***** Menu Area Ends ***** */}

            </div>
   
            );
        }
    }
    
    export default Menu;