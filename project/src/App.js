import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './components/pages/home';
import Locations from './components/pages/locations';
import Events from './components/pages/events';
import About from './components/pages/about';
import Login from './components/pages/login';
import Admin from './components/pages/adminevents';
import Manage from './components/pages/adminmanage';

function App() {
  return (
    <>
    <Router>
    <Navbar />
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/locations' element={<Locations />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/adminevents' element={<Admin/>}/>
            <Route path='/adminmanage' element={<Manage/>}/>
        </Routes>
    </Router>
    </>

  );
}

export default App;
