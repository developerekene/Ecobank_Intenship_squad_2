import React, { useState } from 'react';
import AccordionItem from "./AccordionItem"

const faqs =[
  {
    id:1,
  header:"How do I search for jobs on INTERNHUB?",
  text:'You can search for jobs by using keywords, location, industry, and other filters in the search bar. The results will display relevant job listings.',
  },

  {
    id:2,
      header:"Can I upload my resume?",
      text:'Yes, you can upload your resume to your profile. This makes it easier for employers to find you when they have job openings that match your qualifications.'
  },

  {
    id:3,
      header:"Do I need an account to apply for jobs?",
      text:'Yes, having an account on INTERNHUB is necessary to apply for jobs. This helps employers track your applications and communicate with you.'    
  },

  {
      id:4,
      header:"How can I receive job alerts?",
      text:'You can set up job alerts based on your preferences. These alerts will notify you via email or notifications when new jobs that match your criteria are posted.'
  },
  
  {   
      id:5,
      header:"Are there resources for improving my job search?",
      text:'Absolutely! INTERNHUB often provides blog posts, articles, and guides on resume writing, interview tips, career development, and more.'
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
 