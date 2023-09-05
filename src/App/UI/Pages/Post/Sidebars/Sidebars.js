import React from 'react'
import './Sidebars.css'
import Button from '../../../Components/button/NavigateButton/NavigateButton'
import { filters } from '../../../../Constants/data'
import Sifter from "../Sifter/Sifter"
import { HiBriefcase } from "react-icons/hi2"
import { HiLocationMarker } from 'react-icons/hi'
import Search from '../../../Components/search/Search'

function Sidebars({ setActive }) {


    return (
        <div className='sidebars'>
            <div className='search-input-container'>
                <form action="">
                    <Search Icon={HiBriefcase} placeholder='Intern search' />
                    <Search Icon={HiLocationMarker} placeholder='Everywhere' />
                    <Button text={"Search"} />
                </form>

            </div>
            <div className='filters'>
                <h3>Filters</h3>
                <div className='filters-container'>
                    {
                        filters.map((item) => (

                            <Sifter filterGroupName={item.name} filters={item.options} onClick={(e) => setActive(e)} />
                        ))

                    }
                </div>
            </div>


        </div>
    )
}

export default Sidebars;
