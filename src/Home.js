import React from 'react'
import Profilepi from './Profilepi';

const Home = () => {
  return (
    <div className='mainbox'>
      <Profilepi/>
      <br/>
      <p>
        Hi,<span class="wave">👋</span> I am  <span className='name'>MUGILAN</span>,
      </p>
      <h1 > I am a 
         <span className='job'> Full STACK DEVELOPER </span>
      </h1>
      <div className='about'>

      I'm a web enthusiast, diving deep into Full Stack development, and always on the hunt for exciting web adventures. Let's code some digital magic together!
      </div>
    </div>
  )
}

export default Home