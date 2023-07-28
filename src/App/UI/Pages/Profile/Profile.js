import React, { useState } from "react";
import "../Profile/Profile.css";


function Profile() {
  const [name, setName] = useState('Stephen Curry');
  const [job, setjob] = useState('Frontend Developer');
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate');

  return (
    <div className='Profile'>
      <div className='upper-container'>
        <div className='image-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQKVgKb7G1p4Y-l2k9Vk9VSy5rVixd4D8mQ&usqp=CAU" alt='' height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{about}</p>
        <button>Profile Settings</button>
        <button>Log Out</button>
      </div>
    </div>
  )
}
export default Profile