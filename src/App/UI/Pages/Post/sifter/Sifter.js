import React from 'react'
import "./Sifter.css"

function Sifter({ sifterGroupName, sifters, onClick }) {


    return (
        <div className='Sifter'>
            <h4>{sifterGroupName}</h4>
            <div className='sifter-container'>
                {

                    sifters.map((item) => (

                        <div
                            href=""
                            className='sifter-item'
                            onClick={onClick}
                        >{item.link}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sifter;
