/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./BrowseOpportunity.css";
import OpportunityCard from "./opportunityCard/OpportunityCard";
import Sidebar from "./sidebar/Sidebar";
import SideBarBackup from "./sidebar_backup/SideBarBackup";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "./Pagination/Pagination";

function BrowseOpportunity() {
  //For Pagination
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const OpportunityList = [];
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  //Creating multiple item in the list with a loop
  let i=0
  while(i<30){
    OpportunityList.push({
      companyLogo: "",
      opportunityType: `Internship${i}`,
      jobTitle:`Frontend Developer${i}`,
      companyName:`Ecobank Africa${i}`,
      NatureOfJob:`Onsite ${i}`,
      TimePosted:`${i} year ago`
      
    })
    i++;
  }
  const [filter,setFilter]= useState("")
  const filteredItems = OpportunityList.filter((item)=>item.opportunityType.includes(filter))
  console.log(filteredItems.length)
  
  return (
    
    <div>
    <Navbar/>
        <div className="BrowseOpportunity">
        <Sidebar />
        <SideBarBackup />
        <div className="result-display">
          <p className="search-result">{"searchResult"}</p>
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
