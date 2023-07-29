import React from 'react'
import './Sidebar.css'
import Button from '../../../Components/button/Button'
import { filters } from '../../../../Constants/data'
import Filter from '../Filter/Filter'
// import { filters } from '../../../Constants/data'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='search-input-container'>
            <form action="">
                <input type="text" placeholder='Job Title'/>
                <input type="text" placeholder='Everywhere'/>
                <Button text={"Search"}/>
            </form>
        </div>
        <div className='filters'>
            <h3>Filters</h3>
            <div className='filters-container'>
                {
                    filters.map((item)=>(
                        <Filter filterGroupName={item.name} filters={item.options}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar
