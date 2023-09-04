import { useEffect, React } from 'react'
import "./EmployeeCard.css"
import noCompanyLogo from '../../../../Image/svg/noCompanyLogo.svg'

//Importing Animate on Scroll library

import AOS from 'aos';
import 'aos/dist/aos.css';

function EmployeeCard({ companyLogo, opportunityType, jobTitle, companyName, NatureOfJob, TimePosted }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-up" className='EmployeeCard'>
            <div className='sponsor-logo'>
                {
                    companyLogo === "" ? <img src={noCompanyLogo} alt="" /> : <img src={companyLogo} alt="" />
                }
            </div>
            <div className='Employee-description'>
                <p>{opportunityType}</p>
                <h2>{jobTitle}</h2>
                <h3>{companyName}</h3>
                <div>{NatureOfJob}</div>
                <p>{TimePosted}</p>
            </div>
        </div>
    )
}

export default EmployeeCard;
