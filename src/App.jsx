import React from 'react';

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects';
// import More from './components/More'
import Contact from './components/Contact';


import './App.scss';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        {/* <More /> */}
        <Contact />
    </div>
  );
}

export default App;
