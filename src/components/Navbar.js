import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="Navbar">
          <a
          className="Navbar-link"
          href="https://fr.wikipedia.org/wiki/Les_Simpson"
          target="_blank"
          rel="noopener noreferrer">
          The Simpsons (Wiki)</a> 
          
      </nav>
      
    );
    
  }

// render() {
//     <span className="Navbar"></span>
//   };
  
  export default Navbar;