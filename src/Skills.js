import React from 'react'
import "./Skills.css"
import { RiJavascriptLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BiLogoMongodb } from 'react-icons/bi';
import { BiLogoNodejs } from 'react-icons/bi';
import Mysql from './mysql.png';
import { SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import python from "./python.png"
import javaimg from "./javaimg.png"
import spring from "./spring.png"
const Skills = () => {
  return (
    <div>
    <div className='skillwrd' style={{fontSize:'xx-large',margin:"50px"}}>Skills</div>


<div id="grid" style={{color:"#0C8CC8"}}>
<div class="column logos"><img src={javaimg} style={{width:"60px",height:"40px"}}/></div>
  <div class="column">Java</div>
</div>


<div id="grid" style={{color:"#68BD45"}}>
<div class="column logos"><img src={spring} style={{width:"60px",height:"40px"}}/></div>
  <div class="column">SpringBoot</div>
</div>

<div id="grid" style={{color:"rgb(222, 214, 0)"}}>
  <div class="column logos"><RiJavascriptLine style={{width:"40px",height:"40px"}}/></div>
  <div class="column">JavaScript</div>
</div>



<div id="grid" style={{color:"#4DDDF6"}}>
  <div class="column logos"><FaReact style={{width:"40px",height:"40px"}}/></div>
  <div class="column">React</div>
</div>

<div id="grid" style={{color:"#17AD55"}}>
  <div class="column logos"><BiLogoMongodb style={{width:"40px",height:"40px"}}/></div>
  <div class="column">mongoDB</div>
</div>


<div id="grid" style={{color:"#93C745"}}>
  <div class="column logos"><BiLogoNodejs style={{width:"40px",height:"40px"}}/></div>
  <div class="column">NodeJs</div>
</div>


<div id="grid" >
  <div class="column logos"><img src={Mysql} style={{width:"60px",height:"40px"}}/></div>
  <div class="column"><span style={{color:"#00618A"}}>My</span><span style={{color:"#E48E00"}}>SQL</span></div>
</div>


<div id="grid" style={{color:"#grey"}}>
  <div class="column logos"><SiExpress style={{width:"40px",height:"40px"}}/></div>
  <div class="column">Express</div>
</div>


<div id="grid" style={{color:"#grey"}}>
  <div class="column logos"><img src={python} style={{width:"60px",height:"40px"}}/></div>
  <div class="column">Python</div>
</div>



  </div>
  )
}

export default Skills