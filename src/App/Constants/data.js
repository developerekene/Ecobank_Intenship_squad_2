import { FaInstagram, FaTwitter, FaFacebook, FaFigma, FaGit } from 'react-icons/fa';

export const navLinks = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Opportunity",
        href: "/opportunity",
    },
    {
        title: "Post ",
        href: "/post",
    }
    ,
    {
        title: "FAQs",
        href: "/faqs",
    }
]

export const footerLinks = [
    {
        header: "Navigation",
        links : [
            {link:"Home",
                href:"/home",
             },

            {link:"About",
                href:"/about",
            },

            {link:"Opportunity",
                href:"/opportunity",
            },

            {link:"Post",
                href:"/post",
            },

            {link:"Profile",
                href:"/profile",
             },

            {link:"FAQs",
            href:"/faqs",
            },
        ]
            
    },
    {
        header: "Contact",                
        links : [{link:"email"},
                    {link:"phone number"},
                    {link:"physical address"},
                    ]
    },

    {
        header: "Social media",
        links: [
          { icon: <FaInstagram />,
           href: "https://www.instagram.com",
            link: "Instagram" },
          { icon: <FaTwitter />,
           href: "https://twitter.com",
            link: "Twitter" },
          { icon: <FaFacebook />,
           href: "https://www.facebook.com",
            link: "Facebook" },
        ]
      },
    {
        header:"Partners",
        links: [{link:"Ecobank Nigeria"},
                 {link:"eProcess"},
                 {link: "Google"}]
    }
]

export const filters =[
    {
        name:"Nature Of Job",
        options:[
            {link:"Onsite"},
            {link:"Hybrid"},
            {link:"Remote"},
        ]
    },
    {
        name:"Duration",
        options:[
            {link:"Short-term"},
           {link:"Long-term"}]
    }
]