const navItems = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
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
    explaination: "Asynchronous programming allows code to run in multiple threads parallely without blocking the main thread, enabling smoother user experiences. Callbacks are functions passed as arguments to another function to be executed later, while promises represent the eventual completion or failure of an asynchronous operation like fullfilled, pending or failure. The async/await is a more readable way to work with promises, allowing developers to write asynchronous code that looks synchronous. This page shows the difference between sequential and parallel API calls using these concepts. This page shows a comparison between sequential (synchronous) and parallel (asynchronous) JavaScript execution by fetching data from multiple independent APIs and displaying the results in a single UI. In the sequential method, each API call waits for the previous one to complete using async/await, which increases the total execution time, while in the parallel method, all API calls are executed simultaneously using Promise.all, significantly improving performance. By rendering the same product data using both approaches and measuring execution time, the page highlights how asynchronous JavaScript enables non-blocking operations, smoother user experience and faster data loading. This helps in understanding when to use sequential execution for dependent tasks and parallel execution for independent tasks."
  },
  {
    id: 2,
    title: "Debounce and Throttle",
    link: "/concepts/debounce-throttle",
    description: "Understanding how to optimize event handling in JavaScript using debounce and throttle.",
    explaination: "Debounce is a technique which ensures that a function is only executed after a specified delay from last fired event. When typing or keypressing event occurs rapidly for searching functionality, without debounce, after each keypress, an API is called for serching input data which lead to unnecessary API calls. But with debounce, the API is called only after user has stopped typing with some specific delay e.g., 200 ms. This reduces the number of API calls and improves performance. Throttle ensures function are executed at most once in a defined time interval irrespective of how many times event is fired. For similar example of debounce, with throttle, the API is called at a given interval repeatedly while user is typing, like in every 200 ms. This reduces the number of API calls and improves performance. Both techniques are used for optimizing event handling in JavaScript."
  },
  {
    id: 3,
    title: "Map, Filter, Reduce",
    link: "/concepts/asynchronous-programming",
    description: "Understanding how to use map, filter, and reduce methods for array manipulation in JavaScript.",
    explaination: "Map, filter and reduce are powerful array methods in javscript for manipulating or transforming data. Map method creates a new array by applying function on each element of original array. Fiter method creates a new array with only required element needed based on condition from original array. Reduce method reduces array to single value by applying function on each element. This page demonstrates how to use these methods like mapping an array of products to extract required product details like name and price, filtering products based on price by showing only that product that have price greater or equal to input price and reducing all cart product prices by adding them to get total cart value"
  },
  {
    id: 4,
    title: "useState, useEffect and useRef in React",
    link: "/concepts/asynchronous-programming",
    description: "Understanding how to manage state, side effects, and references in React using useState, useEffect, and useRef hooks.",
    explaination: ""
  },
  // {
  //   id: 5,
  //   title: "useMemo and useCallback in React",
  //   link: "/concepts/asynchronous-programming",
  //   description: "Understanding how to optimize performance in React using useMemo and useCallback hooks.",
  //   explaination: ""
  // },
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
