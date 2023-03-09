import Header from './Header';
import './App.css';





import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Home from './Home';
import Homefr from './Homefr';






function App() {
  const[lang,setLang]=useState(true)
  return (
    <div className="App">
      {/* <article class="scroller"> */}
      <div className='head'>
        <Header lang={lang} setLang={setLang}/>
          </div>
      <header className="App-header">

        <div>
          
          {/* <div className="left">

          </div>
          <div className="left">


          </div> */}
          <Router>
          <Routes>

<Route path="/" element={lang === true ? <Home /> : <Homefr />} />   
          </Routes>
    
      
      </Router>

{/* <RouterProvider router={router} /> */}
        </div>
    {/* <section>
        <h2>Section one</h2>
    </section>
    <section>
        <h2>Section two</h2>
    </section>
    <section>
        <h2>Section three</h2>
    </section> */}
      </header>
{/* </article> */}
    </div>
  );
}

export default App;
