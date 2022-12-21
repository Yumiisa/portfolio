import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Project from './routes/Project';
import About from './routes/About';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   
   
   </Routes>
    
 

   </>
  );
}

export default App;
