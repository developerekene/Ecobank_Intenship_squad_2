import React,{useEffect} from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import intern1 from '../../../Image/png/intern1.png';
import {BsCash} from "react-icons/bs";
import {IoIosBriefcase} from "react-icons/io";
import team from '../../../Image/png/team.png';
import {IoBookSharp, IoCogSharp, IoLogoTwitter, IoLogoLinkedin} from "react-icons/io5";
import {HiUserGroup} from "react-icons/hi";
import leaderDummy from "../../../Image/png/leaderDummy.png"

//Importing Animate on Scroll library

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <Navbar />
            <div className='about'>
                <div className='first-container'>
                    <div className='first-content'>
                        <p>We help students maximize effort by creating a technological platform that identifies internship opportinities </p>
                        <div className='underscore'>_________</div>
                        <a href='/about'>
                            <p>
                                WANT TO WRITE ABOUT US? CONTACT US
                            </p>
                        </a>
                        
                    </div>
                    <div className='first-image'>
                        <img src={intern1} className='first-image' alt="" />
                    </div>
                </div>

                <div className='second-container' data-aos="fade-up">
                    <div className='second-content'>
                        <div className='description-image'>
                            <IoBookSharp />
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
                
                        <div className='card' data-aos="fade-right">
                            <div className='card-content'>
                                <IoIosBriefcase />
                                <div>
                                    <p>FOUNDED IN</p>
                                    <h2>2014</h2>
                                </div>
                            </div>
                            <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                          
                        </div>

                        <div className='card' data-aos="fade-up">
                            <div className='card-content' >
                                <BsCash />
                                <div>
                                    <p>TRACKED SPENT</p> 
                                    <h2>$3 Billion</h2>
                                </div>
                            </div>
                            <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                        </div>

                        <div className='card' data-aos="fade-left">
                            <div className='card-content'>
                                <IoCogSharp />
                                <div>
                                    <p>INTEGRATION PARTNERS</p>
                                    <h2>2000+</h2>
                                </div>
                            </div>
                            <p>iLink was from Anthony's dorm room at the University of Maryland.</p>
                        </div>

                    
                </div>

                <div className='fourth-container'>
                    <div className='fourth-description'>
                        <div className="description-image">
                            <HiUserGroup />
                        </div>  
                        <h2>Leadership</h2>
                        <p>Get to know the leaders of Ilink community</p>
                    </div>
                    <div className='leader-content'>
                        <div className="leader">
                            <img src={leaderDummy} data-aos="fade-right" alt="" />
                            <div className="textarea" data-aos="fade-left">
                                <h3>Afolabi Ifekristi</h3>
                                <p>CEO/FOUNDER</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum eum, vero incidunt corporis reiciendis aliquid deleniti sunt sint ab vel, voluptatibus aliquam natus magni quidem. Cum nesciunt voluptas harum eveniet porro. Nemo ullam quae quisquam id dolore quod impedit eum quibusdam, dolorem, dicta libero quo totam accusantium qui pariatur?</p>
                                <div>
                                    <IoLogoTwitter />
                                    <IoLogoLinkedin />
                                </div>
                            </div>
                        </div>
                        <div className="leader">
                            <div className="textarea" data-aos="fade-right">
                                <h3>Kinako Kiaka</h3>
                                <p>CEO/FOUNDER</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus asperiores quisquam provident quas ex quasi corrupti nihil laborum quaerat tempore quia amet eveniet fugit libero molestiae labore, eligendi molestias tenetur aut deserunt doloribus earum itaque sint. Incidunt delectus ex deleniti tenetur earum culpa architecto molestiae qui. Placeat asperiores perferendis deleniti!</p>
                                <div>
                                    <IoLogoTwitter />
                                    <IoLogoLinkedin />
                                </div>
                            </div>
                            <img src={leaderDummy} data-aos="fade-left" alt="" />
                        </div>
                        <div className="leader">
                            <img src={leaderDummy} data-aos="fade-right" alt="" />
                            <div className="textarea" data-aos="fade-left">
                                <h3>David Adisa</h3>
                                <p>CEO/FOUNDER</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestiae fugit, nihil laborum, aliquam iste autem reprehenderit nobis eum dolorum debitis, magni error commodi voluptatibus. Voluptatibus, eligendi reprehenderit. Saepe vero explicabo odit incidunt fugit provident, tempore quae error similique ipsum officia id nemo necessitatibus a quis veniam dolorem sit esse.</p>
                                <div>
                                    <IoLogoTwitter />
                                    <IoLogoLinkedin />
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