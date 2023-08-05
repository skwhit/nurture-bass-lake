import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [home, setHome] = useState(true);

  return (
    <div className="App">
      <Navbar setHome={setHome}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {!home ? <Footer/> : <></>}
    </div>
  );
}

export default App;
