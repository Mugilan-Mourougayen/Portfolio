import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';


const Sidelogos = () => {
  return (
    <div className='sticker'>

    <div className='parentgrid' >
        
        
        
        
        


        <a href="https://github.com/Mugilan-Mourougayen">        <BsGithub className='logo' /></a>
        <a href="https://www.linkedin.com/in/mugilan-mourougayen/">        <AiFillLinkedin className='logo'/></a>


        <a href="https://www.instagram.com/amar.anrak/">        <AiFillInstagram className='logo' /></a>
        <a href="https://medium.com/@nous.r2d2">        <BsMedium className='logo' /></a>

        
    </div>
       
    </div>
  )
}

export default Sidelogos