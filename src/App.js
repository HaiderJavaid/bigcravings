import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Chef from './pages/chef';
import Promotion from './pages/promotion';
import Reservation from './pages/reservation';
import Footer from './pages/footer';

function App() {
  return (
    <div>
    
    <Home></Home>
    <About/>
    <Menu/>
    <Promotion/>
    <Reservation/>
    <Footer/>
    </div>

  );
}

export default App;
