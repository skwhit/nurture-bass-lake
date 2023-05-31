import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
