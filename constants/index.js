const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Concepts",
    href: "/concepts",
  },
]
// const bentoSocialLinks = [
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/",
//     icon: "/images/fb.svg",
//   },
//   {
//     name: "Instagram",
//     href: "https://www.facebook.com/",
//     icon: "/images/insta.svg",
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.facebook.com/",
//     icon: "/images/linkedin.svg",
//   },
//   {
//     name: "WhatsApp",
//     href: "https://www.facebook.com/",
//     icon: "/images/whatsapp.svg",
//   },
// ];

const iconsList = [
  {
    name: "html",
    image: "/images/html.svg",
  },
  {
    name: "css",
    image: "/images/css.svg",
  },
  {
    name: "javascript",
    image: "/images/js.svg",
  },
  {
    name: "react",
    image: "/images/react.svg",
  },
  {
    name: "typescript",
    image: "/images/ts.svg",
  },
  {
    name: "github",
    image: "/images/github.svg",
  },
  {
    name: "gsap",
    image: "/images/gsap.svg",
  },
  {
    name: "threejs",
    image: "/images/threejs.svg",
  },
  {
    name: "figma",
    image: "/images/figma.svg",
  },
  {
    name: "aws",
    image: "/images/aws.svg",
  },
];

const iconsListnew = [
  {
    name: "html5",
    image: "/images/icons/HTML5.svg",
  },
  {
    name: "css3",
    image: "/images/icons/CSS3.svg",
  },
  {
    name: "javascript",
    image: "/images/icons/JavaScript.svg",
  },
  {
    name: "react",
    image: "/images/icons/React.svg",
  },
  {
    name: "nextjs",
    image: "/images/icons/nextjs-icon.svg",
  },
  {
    name: "tailwindcss",
    image: "/images/icons/Tailwind CSS.svg",
  },
  {
    name: "threejs",
    image: "/images/icons/three.svg",
  },
  {
    name: "gsap",
    image: "/images/icons/gsap-greensock.svg",
  },
  {
    name: "nodejs",
    image: "/images/icons/Node.js.svg",
  },
  {
    name: "expressjs",
    image: "/images/icons/Express.svg",
  },
  {
    name: "mongodb",
    image: "/images/icons/MongoDB.svg",
  },
  {
    name: "python",
    image: "/images/icons/Python.svg",
  },
  {
    name: "mysql",
    image: "/images/icons/MySQL.svg",
  },
];

const projects = [
  {
    id: 1,
    heading: "Personal 3D Portfolio",
    des: "A visually immersive and interactive developer portfolio built using Next.js, Tailwind CSS, Three.js, and GSAP. This project showcases my web development skills through a futuristic 3D design and fluid user experience.",
    img: "/images/portfolio.png",
    iconLists: ["/images/icons/React.svg", "/images/icons/nextjs-icon.svg", "/images/icons/Tailwind CSS.svg", "/images/icons/gsap-greensock.svg", "/images/icons/three.svg"],
    title: "/garv-3dportfolio.vercel.app",
    link: "http://garv-3dportfolio.vercel.app"
  },
  {
    id: 2,
    heading: "Mojito - Awwwards website",
    des: "A pixel-perfect recreation of the award-winning Mojito site, built with GSAP and Next.js for stunning animations and immersive experience.",
    img: "/images/mojito2.png",
    iconLists: ["/images/icons/React.svg", "/images/icons/nextjs-icon.svg", "/images/icons/Tailwind CSS.svg", "/images/icons/gsap-greensock.svg", "/images/icons/three.svg"],
    title: "/mojito-kappa.vercel.app",
    link: "http://mojito-kappa.vercel.app"
  },
  {
    id: 3,
    heading: "BuyMeaCoffee Clone",
    des: "A full-stack clone of the Buy Me a Coffee platform with secure payment flows and creator support features using MongoDB, Node.js, and Next.js.",
    img: "/images/bmc.png",
    iconLists: ["/images/icons/React.svg", "/images/icons/nextjs-icon.svg", "/images/icons/Tailwind CSS.svg", "/images/icons/MongoDB.svg", "/images/icons/Node.js.svg"],
    title: "/buymeacoffee-peach.vercel.app",
    link: "http://buymeacoffee-peach.vercel.app"
  },
];

const footerIconsList = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/garv.singhal.121",
    icon: "/images/b-fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/garvsinghal00/",
    icon: "/images/b-insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/garv-singhal-1b378a248/",
    icon: "/images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://github.com/garv000",
    icon: "/images/b-whatsapp.svg",
  },
];

const conceptsList = [
  {
    id: 1,
    title: "Asynchronous Programming",
    link: "/concepts/asynchronous-programming",
    description: "Understanding callbacks, promises, and async/await in JavaScript for handling asynchronous operations.",
    explaination: "Asynchronous programming allows code to run without blocking the main thread, enabling smoother user experiences. Callbacks are functions passed as arguments to be executed later, while promises represent the eventual completion or failure of an asynchronous operation. The async/await syntax provides a more readable way to work with promises, allowing developers to write asynchronous code that looks synchronous."
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    link: "/concepts/javascript-fundamentals",
    description: "Core concepts of JavaScript including variables, functions, and event handling.",
    explaination: "JavaScript fundamentals form the building blocks of web development. Variables are used to store data, functions encapsulate reusable code, and event handling allows interaction with user actions. Understanding these concepts is crucial for creating dynamic and interactive web applications."
  },
]

export {
  navItems,
  // bentoSocialLinks,
  // iconsList,
  iconsListnew,
  projects,
  // testimonials,
  footerIconsList,
  conceptsList
};
