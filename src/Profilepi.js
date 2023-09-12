import React from 'react'
import "./Profilepi.css"
import mypic from "./ee3e2c91-2ca9-4de3-b8d1-6292ae8e7e63-removebg.png"
import itsme from "./itsme.png"
const Profilepi = () => {
  return (
    <div className='prof'>

   
    <div className='arrow' >
  <div class="graph__wrapper">
  <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path id="Path-1" class="path" fill="none" stroke="#0fa" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>

<path class="dashed" fill="none" stroke="white" stroke-width="8" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>   
      
<polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#0fa">
  <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
    <motionPath href="#Path-1" />
  </animateMotion>
</polyline>

    </g>
  </svg>
</div>
  </div>
<div className='mypic'>
  <img className="wave" src={itsme}style={{width:"60px", marginBottom:"-50px"}}/>
  <br/>
<img src={mypic} style={{width:"400px"}}/>
</div>
  </div>
  )
}

export default Profilepi