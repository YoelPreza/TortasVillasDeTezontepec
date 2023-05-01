import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import Branches from "./components/Branches";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import Landing from './components/landing';

function App() {
  return (
    // <div className='mainContainer'>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Branches' element={<Branches />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
