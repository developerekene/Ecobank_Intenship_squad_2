import { FaInstagram, FaTwitter, FaFacebook, FaFigma, FaGit } from 'react-icons/fa';

export const navLinks = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Companies",
        href: "/companies",
    },
    {
        title: "Interns ",
        href: "/interns",
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
        links: [
            {
                link: "Home",
                href: "/home",
            },

            {
                link: "About",
                href: "/about",
            },

            {
                link: "Companies",
                href: "/companies",
            },

            {
                link: "Interns",
                href: "/interns",
            },

            {
                link: "Profile",
                href: "/profile",
            },

            {
                link: "FAQs",
                href: "/faqs",
            },
        ]

    },
    {
        header: "Contact",
        links: [{ link: "Email" },
        { link: "Phone number" },
        { link: "Physical address" },
        ]
    },

    {
        header: "Social media",
        links: [
            {
                icon: <FaInstagram />,
                href: "https://www.instagram.com",
                link: "Instagram"
            },
            {
                icon: <FaTwitter />,
                href: "https://twitter.com",
                link: "Twitter"
            },
            {
                icon: <FaFacebook />,
                href: "https://www.facebook.com",
                link: "Facebook"
            },
        ]
    },
    {
        header: "Partners",
        links: [
        { link: "Google" }]
    }
]

export const filters = [
    {
        name: "Nature Of Job",
        options: [
            { link: "Onsite" },
            { link: "Hybrid" },
            { link: "Remote" },
        ]
    },
    {
        name: "Duration",
        options: [
            { link: "Short-term" },
            { link: "Long-term" }]
    }
]