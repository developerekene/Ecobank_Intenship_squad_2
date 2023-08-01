import React from 'react'
import "./OpportunityCard.css"
import noCompanyLogo from '../../../../Image/svg/noCompanyLogo.svg'

function OpportunityCard({companyLogo,opportunityType,jobTitle,companyName,NatureOfJob,TimePosted}) {
  return (
    <div className='OpportunityCard'>
      <div className='sponsor-logo'>
        {
        companyLogo===""? <img src={noCompanyLogo} alt="" />  : <img src={companyLogo} alt=""/>      
        }
      </div>
      <div className='Opportunity-description'>
        <p>{opportunityType}</p>
        <h2>{jobTitle}</h2>
        <h3>{companyName}</h3>
        <div>{NatureOfJob}</div>
        <p>{TimePosted}</p>
      </div>
    </div>
  )
}

export default OpportunityCard
