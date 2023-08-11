/* eslint-disable eqeqeq */
import React from 'react';
import "./Pagination.css"

const Pagination = ({totalItemsLength, postPerPage, setCurrentPage,currentPage}) => {

    const pageNumbers = []

    for(let i=0; i<Math.ceil(totalItemsLength/postPerPage); i++){
        pageNumbers.push(i+1)
    }

  return (
    <div className='pagination-container'>
      {pageNumbers.map((pageNumber,index)=>(
        <div className={`pagination-item ${pageNumber == currentPage ? "active" :""}`} key={index} onClick={()=>{setCurrentPage(pageNumber)}}>{pageNumber}</div>
      ))}
    </div>
  )
}

export default Pagination