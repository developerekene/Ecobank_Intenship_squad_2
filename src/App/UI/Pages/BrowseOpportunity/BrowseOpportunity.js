import React from "react";
import "./BrowseOpportunity.css";
import OpportunityCard from "./opportunityCard/OpportunityCard";
import Sidebar from "./sidebar/Sidebar";
import SideBarBackup from "./sidebar_backup/SideBarBackup";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function BrowseOpportunity() {
  return (
    
    <div>
    <Navbar/>
        <div className="BrowseOpportunity">
        <Sidebar />
        <SideBarBackup />
        <div className="result-display">
          <p className="search-result">{"searchResult"}</p>
          <hr />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
          <OpportunityCard
            companyLogo={""}
            opportunityType={"Internship"}
            jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"}
            NatureOfJob={"Onsite"}
            TimePosted={"1year ago"}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BrowseOpportunity;
