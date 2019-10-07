import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      
    </div>
  );
}

ReactDOM.render(<Navbar />, document.getElementById('root'));


export default App;
