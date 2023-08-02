import React from 'react'
import "./SideBarBackup.css"
import { useState } from 'react'
import { HiAdjustmentsHorizontal, HiBriefcase} from "react-icons/hi2"
import { HiLocationMarker, HiX} from 'react-icons/hi'
import { filters } from '../../../../Constants/data'
import Filter from '../Filter/Filter'
import Button from '../../../Components/button/NavigateButton/NavigateButton'

function SideBarBackup() {
    const [showFilter,setShowFilters]=useState(false)
  return (
    <div className='sidebar-backup'>
        <div className='search-input-container'>
            <form action="">
                <div className='input-div'>
                    <HiBriefcase />
                    <input type="text" placeholder='Job Title'/>
                </div>
                <div className='input-div'>
                    <HiLocationMarker />
                    <input type="text" placeholder='Everywhere'/>
                </div>
                <Button text={"Search"}/>
            </form>
        </div>
        <div className='filter-dropmenu'>
            <div onClick={()=>setShowFilters(!showFilter)}>
               { showFilter ?
               <>
                    <p>Hide</p>
                    <HiX />
               </>
                :
                <>
                    <p>Filters</p>
                    <HiAdjustmentsHorizontal />
                </>
                
                }
                
            </div>
        </div>
        {
            showFilter ?
            <div className='dropmenu'>
                <div className='filters'>
                    <div className='filters-container'>
                        {
                            filters.map((item)=>(
                                <Filter filterGroupName={item.name} filters={item.options}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            :
            <> 
            </>
            
        }
    </div>
  )
}

export default SideBarBackup
