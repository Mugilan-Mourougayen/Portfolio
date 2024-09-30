
import './App.css';
import React from "react";
import Home from './Home';
import Skills from './Skills';
import Sidelogos from './Sidelogos';
import Experience from './Experience';
import Resume from './Resume';
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
<Resume />
      </section>
      <section>
<Skills />
      </section>
<Experience/>
      </div>
  );
}

export default App;
