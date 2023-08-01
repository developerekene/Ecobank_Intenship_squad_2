import React from 'react'
import "./BrowseOpportunity.css"
import OpportunityCard from './opportunityCard/OpportunityCard'
import Sidebar from './sidebar/Sidebar'
import SideBarBackup from './sidebar_backup/SideBarBackup'

function BrowseOpportunity() {

  return (
    <div className='BrowseOpportunity'>
      <Sidebar />
      <SideBarBackup />
      <div className='result-display'>
        <p className='search-result'>{"searchResult"}</p>
        <hr />
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
            <OpportunityCard companyLogo={""} opportunityType={"Internship"} jobTitle={"Frontend Developer"}
            companyName={"Ecobank Africa"} NatureOfJob={"Onsite"} TimePosted={"1year ago"}/>
        
      </div>
    </div>
  )
}

export default BrowseOpportunity
