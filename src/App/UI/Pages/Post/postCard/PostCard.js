import { useEffect, React } from 'react'
import "./PostCard.css"
import noCompanyLogo from '../../../../Image/svg/noCompanyLogo.svg'

//Importing Animate on Scroll library

import AOS from 'aos';
import 'aos/dist/aos.css';

function PostCard({ company_logo, internName, skills, contactInfo, gender, date, onClick }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div
            data-aos="fade-up"
            className='PostCard'
            onClick={() => { onClick(internName, skills, contactInfo, gender, date, company_logo) }}
        >
            <div className='sponsor-logo'>
                {
                    company_logo === "" ? <img src={noCompanyLogo} alt="" /> : <img src={company_logo} alt="" />
                }
            </div>
            <div className='Opportunity-description'>
                <h2>{internName}</h2>
                <h3>{skills}</h3>
                <h4>{contactInfo}</h4>
                <div>{gender}</div>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default PostCard;