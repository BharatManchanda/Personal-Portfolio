import Project1 from "../assets/images/Projects/project-1.jpg";
import Project2 from "../assets/images/Projects/project-2.jpg";
import Project3 from "../assets/images/Projects/project-3.jpg";
import Email from "../Common/Singleton/Icons/Email";
import Location from "../Common/Singleton/Icons/Location";
import Whatsapp from "../Common/Singleton/Icons/Whatsapp";

export const projects = [
    {
        id: 1,
        image: Project1,
        title: 'Pronto Case Cash',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 2,
        image: Project2,
        title: 'A1 Residential Builders',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 3,
        image: Project3,
        title: 'We are appointments',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
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