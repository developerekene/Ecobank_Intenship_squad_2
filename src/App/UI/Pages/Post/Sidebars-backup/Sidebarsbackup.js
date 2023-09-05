import React from 'react'
import "./Sidebarsbackup.css"
import { useState } from 'react'
import { HiAdjustmentsHorizontal, HiBriefcase } from "react-icons/hi2"
import { HiLocationMarker, HiX } from 'react-icons/hi'
import { filters } from '../../../../Constants/data'
import Sifter from '../Sifter/Sifter'
import Button from '../../../Components/button/NavigateButton/NavigateButton'
import Search from '../../../Components/search/Search'

function SideBarsBackup({ setActive }) {
    const [showFilter, setShowFilters] = useState(false)

    return (
        <div className='sidebars-backup'>
            <div className='search-input-container'>
                <form action="">
                    <Search Icon={HiBriefcase} placeholder='Intern search' />
                    <Search Icon={HiLocationMarker} placeholder='Everywhere' />
                    <Button text={"Search"} />
                </form>

            </div>
            <div className='filter-dropmenu'>
                <div onClick={() => setShowFilters(!showFilter)}>
                    {showFilter ?
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
                                    filters.map((item) => (
                                        <Sifter onClick={(e) => { setActive(e) }} filterGroupName={item.name} filters={item.options} />
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

export default SideBarsBackup
