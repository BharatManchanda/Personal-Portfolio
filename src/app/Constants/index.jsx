import Project1 from "../assets/images/Projects/project-1.jpg";
import Project2 from "../assets/images/Projects/project-2.jpg";
import Project3 from "../assets/images/Projects/project-3.jpg";
import Project4 from "../assets/images/Projects/project-4.jpg";
import Project5 from "../assets/images/Projects/project-5.jpg";
import Project6 from "../assets/images/Projects/project-6.jpg";
import Project7 from "../assets/images/Projects/project-7.jpg";
import Email from "../Common/Singleton/Icons/Email";
import Location from "../Common/Singleton/Icons/Location";
import Whatsapp from "../Common/Singleton/Icons/Whatsapp";

export const projects = [
    {
        id: 1,
        image: Project1,
        title: 'Pronto Case Cash',
        description: 'Pronto Case Cash claims to be a financial service offering cash funding related to legal cases, connecting clients or law firms with settlement funding options. Some user reviews on Trustpilot report positive experiences, but independent scam-checking sites rate it as questionable with caution advised and limited verifiable information. The website doesn\'t load without JavaScript, and ownership details are privately registered, which may raise risk concerns.'
    },
    {
        id: 2,
        image: Project2,
        title: 'Construction Button',
        description: 'Construction Button is a specialized platform for construction projects, designed to track labor and manager locations in real time during work hours. It helps project supervisors monitor workforce activity, ensure accountability, and optimize site management. The system improves operational efficiency, reduces delays, and enhances safety by providing accurate location-based insights for all on-site personnel. It\'s a practical solution for modern construction workforce management.'
    },
    {
        id: 3,
        image: Project3,
        title: 'We are appointments',
        description: 'WeAreAppointments is an online appointment management platform designed to streamline scheduling for businesses and service providers. It allows users to book, track, and manage appointments efficiently, reducing missed bookings and administrative overhead. With real-time notifications, calendar integrations, and customer management tools, it helps businesses improve client experience, optimize staff allocation, and enhance operational efficiency. It\'s a comprehensive solution for modern appointment-based services.'
    },
    {
        id: 4,
        image: Project4,
        title: 'Day One Development',
        description: 'Day One Development is a client portfolio and CRM platform designed to help businesses manage clients efficiently. It allows users to store client information, send automated emails, and track interactions to convert contacts into leads. By integrating portfolio management with lead-generation tools, it streamlines communication, improves client engagement, and enhances sales opportunities, making it an effective solution for growing businesses seeking organized client management and increased conversions.'
    },
    {
        id: 5,
        image: Project5,
        title: 'Abatement and Remediation',
        description: 'Abatement and Remediation is a specialized service focused on identifying, removing, and managing hazardous materials in residential, commercial, and industrial properties. The company handles tasks like asbestos removal, mold remediation, and environmental cleanup, ensuring safety and regulatory compliance. By combining expert assessment, efficient removal techniques, and proper disposal practices, it protects occupants and the environment, providing a reliable solution for maintaining healthy and safe living or working spaces.'
    },
    {
        id: 6,
        image: Project6,
        title: 'Gobbler AI',
        description: 'Gobbler AI is an advanced platform for creating video ads for social media quickly and efficiently. Using AI-powered tools, it helps businesses generate engaging, high-quality video content tailored for platforms like Instagram, Facebook, and TikTok. Gobbler AI streamlines the ad creation process, saving time while maximizing audience engagement and reach. It’s an ideal solution for marketers looking to produce professional video ads without complex editing skills.'
    },
    {
        id: 7,
        image: Project7,
        title: 'Chirp Chat',
        description: 'Chirp chat is a modern chatting platform designed to connect people through instant messaging. It offers real-time communication, group chats, and multimedia sharing, making conversations seamless and engaging. With an intuitive interface and reliable performance, ChirpChat enhances social interaction, collaboration, and connectivity for users across personal and professional networks. Its focus on simplicity and speed makes it an ideal tool for staying connected anytime, anywhere.'
    },
];

export const contact = [
    {
        id: 1,
        icon: <Location />,
        label: 'Urlana Kalan, Panipat - 132103',
        props:{
            href:"https://www.google.com/maps?q=37.7749,-122.4194",
            target:"_blank",
        }
    },
    {
        id: 2,
        icon: <Whatsapp />,
        label: '+91 7777-004907',
        props: {
            component:'a',
            href:"tel:7777-004907"
        }
    },
    {
        id: 3,
        icon: <Email />,
        label: 'bharatmanchanda13@gmail.com',
        props:{}
    }
];

export const initContactUs  = {
    name: "",
    email: "",
    messsage: "",
    access_key: process.env.NEXT_PUBLIC_API_URL,
}

export const Languages = [
    "HTML",
    "CSS",
    "Saas",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "jQuery",
    "React",
    "Vue",
    "GIT",
    "Github",
    "Terminal",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "Node",
    "Express",
    "SQL",
    "Python",
    "Rest API",
]