import React from 'react'
import './Sidebar.css'
import Button from '../../../Components/button/NavigateButton/NavigateButton'
import { filters } from '../../../../Constants/data'
import Filter from '../Filter/Filter'
import { HiBriefcase} from "react-icons/hi2"
import { HiLocationMarker} from 'react-icons/hi'
import Search from '../../../Components/search/Search'
// import { filters } from '../../../Constants/data'

function Sidebar() {
    
  return (
    <div className='sidebar'>
                <div className='search-input-container'>
                <form action="">
                    <Search Icon={HiBriefcase} placeholder='Job Title'/>
                    <Search Icon={HiLocationMarker} placeholder='Everywhere'/>
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
