import React from 'react';
import Navbar from './components/Navbar';
// import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import Lamp from './components/Lamp';
import Working from './components/Working';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Working on/>
      <QuoteList />
      <Lamp on />
      <Lamp />
      
      
      {/* <QuoteCard
      quote='Shoplifting is a victimless crime, like punching someone in the dark.' character='Nelson Muntz'
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"/>

      <QuoteCard
      quote="Shut up, brain. I got friends now. I don't need you anymore." character='Lisa Simpson'
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083"/> */}
      
      
      
      
      
    </div>
  );
}

export default App;
