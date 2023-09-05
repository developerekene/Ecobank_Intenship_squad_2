import React from 'react';
import "./Folio.css"

const Folio = ({ totalItemsLength, postPerPage, setCurrentPage, currentPage }) => {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalItemsLength / postPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <div className='folio-container'>
            {pageNumbers.map((pageNumber, index) => (
                <div className={`folio-item ${pageNumber == currentPage ? "active" : ""}`} key={index} onClick={() => { setCurrentPage(pageNumber) }}>{pageNumber}</div>
            ))}
        </div>
    )
}

export default Folio;