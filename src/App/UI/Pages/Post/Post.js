import React, { useEffect, useState } from "react";
import "./Post.css";
import PostCard from "./postCard/PostCard";
import Sidebars from "./Sidebars/Sidebars";
import Sidebarsbackup from "./Sidebars-backup/Sidebarsbackup";
import Folio from "./Folio/Folio";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import INTERNSHIP from '../../../Constants/INTERNSHIP.json';
import { HiX } from "react-icons/hi";
import { BiLogoGmail } from "react-icons/bi";

function Post() {
    //For Pagination
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    //Creating multiple item in the list with a loop

    const [filter, setFilter] = useState();
    if (filter === undefined) {
        setFilter({ natureOfJob: "onsite" })
        console.log(filter)
    }
    console.log(filter === { natureOfJob: "onsite" })
    // else if(){

    // }


    const setActive = (e) => {
        const siblings = e.target.parentNode.children
        console.log(e.target.parentNode)
        for (let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove("active")
        }
        e.target.classList.add("active");
    }

    const filteredItems = INTERNSHIP

    //Modal
    const [modal, setmodal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const toggleModal = () => {
        setmodal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const handleCardClick = (internName, skills, contactInfo, gender, date, company_logo) => {
        setSelectedCard({ internName, skills, contactInfo, gender, date, company_logo });
        toggleModal();
    };
    return (

        <div>
            <Navbar />
            <div className="Post">
                <Sidebars setActive={setActive} />
                <Sidebarsbackup setActive={setActive} />
                <div className="result-display">
                    <p className="search-result">{filteredItems.length + " results found"}</p>
                    <hr />
                    <div className="result-cards">
                        {
                            filteredItems.slice(firstPostIndex, lastPostIndex).map((item, index) => (
                                <>
                                    <PostCard
                                        company_logo={item.company_logo}
                                        internName={item.internName}
                                        skills={item.skills}
                                        contactInfo={item.contactInfo}
                                        gender={item.gender}
                                        date={item.date}
                                        onClick={handleCardClick}
                                    />
                                </>
                            ))
                        }
                    </div>


                    <Folio
                        totalItemsLength={filteredItems.length}
                        setCurrentPage={setCurrentPage}
                        postPerPage={postPerPage}
                        currentPage={currentPage} />
                </div>
                {selectedCard && (
                    <>

                        {modal && (
                            <div className="modal">

                                <div className="overlay">
                                </div>
                                <div className="modal-container">
                                    <div className="close-modal" onClick={toggleModal}>
                                        <HiX />
                                    </div>
                                    <div className="modal-content">
                                        <h2>{selectedCard.internName}</h2>
                                        <div className="company">
                                            <BiLogoGmail />
                                            <p>{selectedCard.skills}</p>
                                        </div>
                                        <div className="nature-of-job">
                                            <p>
                                                {selectedCard.gender}
                                            </p>
                                        </div>
                                        <p className="time-posted">{selectedCard.date}</p>
                                        <p className="job-description">Resume</p>
                                        <div className="overflow-hidden">
                                            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt voluptatum aliquam a, id, eligendi ipsam quibusdam
                                                architecto animi facilis error maiores temporibus amet sint veritatis cupiditate impedit. Suscipit tempora aut quas animi! Quas nulla consectetur maiores,
                                                recusandae, laborum repudiandae suscipit eius doloremque iure et dolores tempora vel tenetur maxime.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt voluptatum aliquam a, id, eligendi ipsam quibusdam architecto animi facilis error maiores temporibus amet sint veritatis cupiditate impedit. Suscipit tempora aut quas animi!
                                                Quas nulla consectetur maiores
                                                , recusandae, laborum repudiandae suscipit eius doloremque iure et dolores tempora vel tenetur maxime
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eaque, quasi nam repellat tempore nostrum magni consequatur hic. Autem eius eaque ipsa quod quo ad, provident in corporis? Cumque voluptates, iure corrupti quis eum consequatur ratione quos veritatis laudantium fugit maxime, incidunt hic modi eveniet adipisci. Odio voluptate maxime molestias voluptates et facere! Nulla aperiam, optio ad dolorum voluptas, veritatis placeat nam culpa quia quae illo, quasi impedit consequuntur ut? Sint tenetur velit temporibus cupiditate expedita esse ut ex iste fugit, porro nisi quia! Repellat maiores recusandae, ipsam unde corrupti dolore ea in vero totam iste consequuntur officia, temporibus debitis voluptatibus iure quam, doloremque eos nobis voluptatem excepturi! Error tempore facilis non? Reprehenderit vel eum fugit similique alias aliquid ab.
                                            </p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Post;
