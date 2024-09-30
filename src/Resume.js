import React from 'react'
import "./button.css"
const filePath = 'https://mugilan-mourougayen.github.io/Portfolio/Mugilan_resume.pdf'
const Resume = () => {
  return (
    <div>


        <a
        className='custom-button'
          href={filePath}
          download="Mugilan_resume.pdf"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Download Resume
        </a>

    </div>
  )
}

export default Resume