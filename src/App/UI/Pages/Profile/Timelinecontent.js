import React from 'react'

function Timelinecontent({content}) {
  return (
    <div className='timeline-content' data-aos="fade-up">
        <p>
        {content}
        </p>
    </div>
  )
}

export default Timelinecontent
