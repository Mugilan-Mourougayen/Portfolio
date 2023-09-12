
import './App.css';
import React from "react";
import Home from './Home';
import Skills from './Skills';
import Sidelogos from './Sidelogos';

function App() {
  return (
    <div className="App">
      <Sidelogos />
      <section>
<Home />
      </section>
      <br/>
      <br/>  <br/>  <br/>  <br/>  <br/>
      <section>
<Skills />
      </section>

      </div> 
  );
}

export default App;
