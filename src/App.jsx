import React from 'react';
import { About, Contact, Education, Experience, Footer, Home, Nav, Portfolio, Skills } from './components/index';

const App = () => {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
