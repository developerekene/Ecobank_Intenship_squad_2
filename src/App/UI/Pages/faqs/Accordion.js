import React, { useState } from 'react';
import AccordionItem from "./AccordionItem"

const faqs =[
  {
    id:1,
  header:"what is iLink?",
  text:'iLink is a platform that connects job seekers with a wide range of job opportunities from various industries and companies.',
  },

  {
    id:2,
      header:"How does iLink work?",
      text:'iLink aggregates job listings from different companies and industries, making it easy for job seekers to search and apply for positions that match their skills and preferences.'
  },

  {
    id:3,
      header:"Is iLink free to use?",
      text:'Yes, iLink is completely free for job seekers to use. There are no charges for accessing job listings or applying for jobs.'    
  },

  {
      id:4,
      header:"How do I create an account?",
      text:'Creating an account on iLink is simple. Just click on the "Sign Up" button and follow the prompts to provide your information.'
  },
  
  {   
      id:5,
      header:"I forgot my password. What should I do?",
      text:'If you forget your password, you can click on the "Forgot Password" link on the login page. You will receive instructions on how to reset your password.'
  }
]
const Accordion = () => {
    const [active, setActive] = useState(null);

    const handleToggle = index =>{
        if(active ===index){
            setActive(null);
        }else{
            setActive(index);
        }
    };
      
  return (
    <>
      <article>
        {
            faqs.map((faq,index)=>{
                return(
                    <AccordionItem 
                    key={index}
                    active={active}
                    handleToggle={handleToggle}
                    faq={faq}
                    />
                )
            })
        }
      </article>
    </>
  )
}

export default Accordion
 