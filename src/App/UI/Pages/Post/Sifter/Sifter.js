import React from 'react'
import "./Sifter.css"

function Sifter({ filterGroupName, filters, onClick }) {


  return (
    <div className='sifter'>
      <h4>{filterGroupName}</h4>
      <div className='filter-container'>
        {

          filters.map((item) => (

            <div
              href=""
              className='filter-item'
              onClick={onClick}
            >{item.link}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Sifter;
