import "./Profile.css"
import Button from "../../Components/button/Button";
import Navbar from "../../Components/Navbar/Navbar"

const Profile = () => {
    return (
        <>
            <div className="container emp-profile">
                <Navbar />
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQKVgKb7G1p4Y-l2k9Vk9VSy5rVixd4D8mQ&usqp=CAU" alt='' height="100px" width="100px" />
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Stephen Curry</h5>
                                <h6>Frontend web developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 6/10 </span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2">
                            <Button text={"Edit Profile"} type={"submit"} />
                        </div>

                    </div>

                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a>Youtube</a> <br />
                                <a>Instagram</a> <br />
                                <a>Github</a> <br />
                                <a>Figma</a> <br />
                                <a>Software Engineer</a> <br />
                            </div>
                        </div>
                        {/* right side url */}

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>749950764</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Stephen Curry</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>stephencurry30@gmail.com</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>+1(408) 785-9959</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web developer</p>
                                        </div>


                                    </div>
                                </div>


                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>30</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Time duration</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>3 months</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}



export default Profile



