import React from 'react'
import "./button.css"
const filePath = 'https://mugilan-mourougayen.github.io/Portfolio/Mugilan_resume.pdf'
const Resume = () => {
  return (
    <div>

<button className='custom-button'>
        <a
          href={filePath}
          download="Mugilan_resume.pdf"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Download Resume
        </a>
      </button>
    </div>
  )
}

export default Resume