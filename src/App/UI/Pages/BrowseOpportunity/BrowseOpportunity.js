/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./BrowseOpportunity.css";
import OpportunityCard from "./opportunityCard/OpportunityCard";
import Sidebar from "./sidebar/Sidebar";
import SideBarBackup from "./sidebar_backup/SideBarBackup";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "./Pagination/Pagination";
import MOCK_DATA from '../../../Constants/MOCK_DATA.json'

function BrowseOpportunity() {
  //For Pagination
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  //Creating multiple item in the list with a loop
 
  const [filter,setFilter]= useState({});

  const setActive =(e)=>{
    const siblings = e.target.parentNode.children
    console.log(e.target.parentNode)
    for(let i=0; i<siblings.length;i++){
       siblings[i].classList.remove("active")
    }
    e.target.classList.add("active");
}

  const filteredItems = MOCK_DATA

  
  return (
    
    <div>
    <Navbar/>
        <div className="BrowseOpportunity">
        <Sidebar setActive={setActive}/>
        <SideBarBackup setFilter={filter} filter={filter}/>
        <div className="result-display">
          <p className="search-result">{filteredItems.length+" results found"}</p>
          <hr />
          {
              filteredItems.slice(firstPostIndex,lastPostIndex).map((item)=>(
              <OpportunityCard 
              companyLogo={item.companyLogo}
              opportunityType={item.opportunityType}
              jobTitle={item.jobTitle}
              companyName={item.companyName}
              NatureOfJob={item.NatureOfJob}
              TimePosted={item.TimePosted}
              />
            ))
          }
          <Pagination 
          totalItemsLength={filteredItems.length} 
          setCurrentPage={setCurrentPage} 
          postPerPage={postPerPage}
          currentPage={currentPage}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BrowseOpportunity;
