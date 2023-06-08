import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  php,
  carrent,
  jobit,
  netflix,
  food,
  blog,
  chatgpt,
  hotstar,
  sethu,
  girish,
  vijayan,
  engineerhub,
  sna,
  hack,
} from "../assets";

// Set your start date in the format "YYYY-MM-DD"
const startDate = "2022-01-01";

// Calculate the difference between the start date and today's date
const diffInMs = Date.now() - new Date(startDate).getTime();
const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

// Round the result to two decimal places
const years = diffInYears.toFixed(0);



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const hero = {
  summary: `As a Full Stack Developer with ${years}+ years of experience, I specialize in creating beautiful and functional websites. With my knowledge in ethical hacking, I ensure the security of the websites I create. Additionally, I'm passionate about creating engaging content that keeps users coming back. Take a look at my portfolio to see my work and let's discuss how I can help bring your project to life!`,
};

const services = [
  {
    title: "Web Application Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Ethical Hacker",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name: "Python", 
  icon: python,
 },
  { name: "PHP", 
  icon: php ,
},

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Co-Head and Senior Mentor",
    company_name: "engineerhub",
    icon: engineerhub,
    iconBg: "#138382",
    date: "June 2021 - Present",
    points: [
      "Guided numerous students towards a career in cybersecurity by providing them with valuable resources and mentorship.",
      "Created engaging content for the company's social media platforms to increase brand awareness and attract potential students.",
      "Managed the company's social media presence, ensuring consistent and effective communication with the target audience.",
      "Contributed to the development side of the business, collaborating with the team to improve products and services.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Selfmade Ninja Academy",
    icon: sna,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed vulnerability labs using Docker containerization, providing students with a secure and isolated environment for hands-on learning",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed a new web app for the edtech portfolio, enhancing the user experience and expanding the company's product offerings..",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Assisted students with technical issues, ensuring a smooth learning experience and fostering their growth in the field.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vijayan is a rare full-stack developer who genuinely prioritizes clients' success, demonstrating unparalleled dedication and expertise in every project. Highly recommended!",
    name: "Sethunath",
    designation: "HR Manager",
    company: "SNA",
    image: sethu,
  },
  {
    testimonial:
      "His exceptional talent in content creation and design shines through in every project, delivering captivating visuals and engaging narratives. A true creative powerhouse!",
    name: "Girish Shedge",
    designation: "Head Design",
    company: "engineerhub ",
    image: girish,
  },
  {
    testimonial:
      "His passion for innovation and creativity is evident in every project. Vijayan's work is not only technically sound but also visually stunning, making him a true asset to any team.",
    name: "Vijayan SS",
    designation: "Graphic Designer",
    company: "SNA",
    image: vijayan,
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "A web-based platform that emulates the functionality of Netflix, allowing users to browse and stream movies and TV shows from a vast library of content.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/vijayan108/Netflix-clone",
  },
  {
    name: "Hotstar Clone",
    description:
      "A cutting-edge web application that replicates the features of Hotstar, providing users with a seamless experience to explore and stream a diverse collection of movies and TV shows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: hotstar,
    source_code_link: "https://github.com/vijayan108/hotstar-clone",
  },
  {
    name: "Chatgpt Clone",
    description:
      "ChatGPT Clone is a web application that emulates the conversational abilities of GPT-3, allowing users to engage in natural language interactions with an AI-powered chatbot.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/vijayan108/Chatgpt-clone",
  },
  {
    name: "Food Delivery App",
    description:
      "A mobile application that allows users to order food from nearby restaurants, providing a convenient and efficient solution for their food delivery needs.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/vijayan108/Zomato-Clone-using-ReactNative",
  },
  {
    name: "Hacking Tools",
    description:
      "A collection of hacking tools that can be used for penetration testing, network scanning, and other security-related tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "socket",
        color: "green-text-gradient",
      },
      {
        name: "shellscript",
        color: "pink-text-gradient",
      },
    ],
    image: hack,
    source_code_link: "https://github.com/vijayan108/Hacking-Tools",
  },
  {
    name: "Blog App",
    description:
      "A web application that allows users to create, read, update, and delete blog posts, providing a platform for them to share their thoughts and ideas with the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/vijayan108/SRS-Blog",
  },
  
  

];

export { services, technologies, experiences, testimonials, projects, hero };
