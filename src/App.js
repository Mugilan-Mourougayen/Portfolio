
import './App.css';
import React from "react";
import Home from './Home';
import Skills from './Skills';
import Sidelogos from './Sidelogos';
import Experience from './Experience';

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
<Experience/>
      </div> 
  );
}

export default App;
