import React from 'react'
import "./Filter.css"

function Filter({filterGroupName, filters, onClick}) {

  
  
  
  return (
    <div className='filter'>
      <h4>{filterGroupName}</h4>
      <div className='filter-container'>
        {
        filters.map((item)=>(
            <div href="" className='filter-item' onClick={onClick}>{item.link}</div>
        ))
      }
      </div>
    </div>
  )
}

export default Filter
