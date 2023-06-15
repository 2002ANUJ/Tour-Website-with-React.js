
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Services';
import Contact from './routes/Contact';
import Travelplan from './routes/Travelplan';


function App() {
  return (
   <div className="app">
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/service' element= {<Service />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/travelplan' element ={<Travelplan />} />
    </Routes>
    
   </div>
  );
}

export default App;
