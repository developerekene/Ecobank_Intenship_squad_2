import { useEffect, React } from 'react'
import "./PostCard.css"
import noCompanyLogo from '../../../../Image/svg/noCompanyLogo.svg'

//Importing Animate on Scroll library

import AOS from 'aos';
import 'aos/dist/aos.css';

function PostCard({ companyLogo, jobTitle, companyName, NatureOfJob, TimePosted, onClick }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div
            data-aos="fade-up"
            className='PostCard'
            onClick={() => { onClick(jobTitle, companyName, NatureOfJob, TimePosted, companyLogo) }}
        >
            <div className='sponsor-logo'>
                {
                    companyLogo === "" ? <img src={noCompanyLogo} alt="" /> : <img src={companyLogo} alt="" />
                }
            </div>
            <div className='Opportunity-description'>
                <h2>{jobTitle}</h2>
                <h3>{companyName}</h3>
                <div>{NatureOfJob}</div>
                <p>{TimePosted}</p>
            </div>
        </div>
    )
}

export default PostCard;