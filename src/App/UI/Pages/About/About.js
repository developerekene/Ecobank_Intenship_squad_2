import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import intern1 from '../../../Image/png/intern1.png';
import book from '../../../Image/png/book.png';
import money from '../../../Image/png/money.png';
import bag from '../../../Image/png/bag.png';
import cog from '../../../Image/png/cog.png';
import team from '../../../Image/png/team.png';
import David from '../../../Image/png/David.png'
import Ife from '../../../Image/png/Ife.png'
import KK from '../../../Image/png/KK.png'


const About = () => {
    return (
        <div>
            <Navbar />
            <div className='About'>
                <div className='first-container'>
                    <div className='first-content'>
                        <p>We help students maximize effort by creating a technological platform that identifies internship opportinities </p>
                        <div className='underscore'>_________</div>
                        <div className='contact-content'>
                            <p>
                                WANT TO WRITE ABOUT US? CONTACT US
                            </p>
                        </div>
                    </div>
                    <div className='first-image'>
                        <img src={intern1} alt="" />
                    </div>
                </div>

                <div className='second-container'>
                    <div className='second-content'>
                        <div className='second-image'>
                            <img src={book} alt='' />
                        </div>
                        <h2>Our Mission</h2>
                        <div className='mission-content'>
                            <p>
                                Singular is re-imagining the way companies their mobile operations. The company's intelligent platform wnables students to analyze and optimize all of their internship opportunities through a single dashboard.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='third-container'>
                    <div className='third-content'>
                        <div className='established'>
                            <div className='established-image'>
                                <img src={bag} alt='' />
                            </div>
                            <div className='established-content'>
                                <h2>FOUNDED IN</h2>
                                <h1>2014</h1>
                                <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                            </div>
                        </div>

                        <div className='tracked'>
                            <div className='tracked-image'>
                                <img src={money} alt='' />
                            </div>
                            <div className='tracked-content'>
                                <h2>TRACKED SPENT</h2>
                                <h1>$3 Billion</h1>
                                <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                            </div>
                        </div>

                        <div className='partners'>
                            <div className='partners-image'>
                                <img src={cog} alt='' />
                            </div>
                            <div className='partners-content'>
                                <h2>INTEGRATION PARTNERS</h2>
                                <h1>2000+</h1>
                                <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='fourth-container'>
                    <div className='fourth-content'>
                        <div className='fourth-image'>
                            <img src={team} alt='' />
                        </div>
                        <h2>Leadership</h2>
                        <div className='leader-container'>
                            <div className='leader-content'>
                                <div className='first-leader'>
                                    <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                                </div>

                                <div className='dav-image'>
                                    {/* <img src={David} alt='' /> */}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div >
    )
}

export default About