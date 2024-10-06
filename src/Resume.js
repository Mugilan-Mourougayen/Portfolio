import React from 'react'
import "./button.css"
const filePath = 'https://mugilan-mourougayen.github.io/Portfolio/Mugilan_resume.pdf'
const filePathfr = 'https://mugilan-mourougayen.github.io/Portfolio/Mugilan_MourougayenCV_FR.pdf'

const Resume = () => {
  return (
    <div>


        <a
        className='custom-button'
          href={filePath}
          download="Mugilan_resume.pdf"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Download English Resume
        </a>

        <a
        className='custom-button'
          href={filePathfr}
          download="Mugilan_fr_resume.pdf"
          style={{ textDecoration: 'none', color: 'inherit' ,marginLeft:"20px"}}
        >
          Download French Resume
        </a>

    </div>
  )
}

export default Resume