import React from 'react'
import "./Filter.css"

function Filter({filterGroupName, filters}) {
  return (
    <div className='filter'>
      <h4>{filterGroupName}</h4>
      <div className='filter-container'>
        {
        filters.map((item)=>(
            <a href="#" className='filter-item'>{item.link}</a>
        ))
      }
      </div>
    </div>
  )
}

export default Filter
