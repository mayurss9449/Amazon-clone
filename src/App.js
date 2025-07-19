
import './App.css';
import Header from './Header';
import About from './About/About';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Mobiles from './Mobiles/Mobiles';
import Login from './Login';

import Footer from './Footer/Footer';
import Electronics from './Electronics/Electronics';
import Customerservice from './Customerservice/Customerservice';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    
      <div className='app'>
        
        
        
        {/* <Home /> */}
        <Routes>
          
          <Route path="/checkout" element={<><Header /><About /><Checkout /><Footer /></>} />
          <Route path="/Customerservice" element={<><Customerservice /></>} />
          <Route path="/mobiles" element={<><Header /><About /><Mobiles /><Footer /></>} />
          <Route path="/Electronics" element={<><Header /><About /><Electronics /><Footer /> </>} />
          <Route path="/login" element={<><Login /> </>} />
          <Route path="/" element={<><Header /><About /><Home /><Footer /> </>} />
          
        </ Routes>
        
        </div>
   
   </Router>
  );
}

export default App;
