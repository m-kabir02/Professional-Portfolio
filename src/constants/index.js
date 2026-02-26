const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/Professional-Portfolio/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/Professional-Portfolio/icons/search.svg",
  },
  {
    id: 3,
    img: "/Professional-Portfolio/icons/user.svg",
  },
  {
    id: 4,
    img: "/Professional-Portfolio/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 26, 2026",
    title:
      "The Ultimate Beginner's Guide to Starting A HomeLab",
    image: "/images/blog1.png",
    link: "",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["SwiftUI"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/m-kabir02",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sadiyak",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI-Powered PDF Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A conversational AI powered by Retrieval-Augmented Generation (RAG) that answers questions about your documents.",
            "This project is a full-stack, AI-driven application designed to allow users to ask natural language questions about their PDF documents and receive accurate, context-aware answers.",
            "The core of the application is a Retrieval-Augmented Generation (RAG) pipeline, which intelligently combines document retrieval with a Large Language Model (LLM) to provide grounded and reliable responses.",
            "It's built with Streamlit, Python, OpenAI GPT, Hugging Face, FAISS, PyPDF2, and LangChain.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://m-kabir02.github.io/AI-CHATBOT/",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "nike.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-1.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Dynamic Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Dynamic React Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "Dynamic React Website",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://iphone-doc.vercel.app/",
          position: "top-20 left-20",
        },
        // {
        //   id: 4,
        //   name: "ai-resume-analyzer.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 left-80",
        //   imageUrl: "/images/project-2.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "IT Helpdesk Dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "IT Helpdesk Dashboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Programmatically cleaned a high-volume helpdesk dataset using Python to identify trends in ticket resolution times.",
            "Developed an Excel Dashboard using PivotTables to visualize hardware failure rates, aiding in resource allocation.",
          ],
        },
        {
          id: 2,
          name: "IT Helpdesk Dashboard",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/m-kabir02/IT-Helpdesk-Analytics-Project",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "food-delivery-app.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-3.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
//     {
//       id: 1,
//       name: "me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-10 left-5",
//       imageUrl: "/images/my-image.jpeg",
//     },
//     {
//       id: 2,
//       name: "casual-me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-28 right-72",
//       imageUrl: "/images/my-image.jpeg",
//     },
//     {
//       id: 3,
//       name: "conference-me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-52 left-80",
//       imageUrl: "/images/my-image.jpeg",
//     },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Mosammad Kabir 👋, but I go by Sadiya and I'm an aspiring Software Engineer who enjoys building code for good causes.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me learning something new, whether it's a new language or musical instrument, while sipping matcha 🍵",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // for a hosted resume
      // href: "/my/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  // children: [
  //   {
  //     id: 1,
  //     name: "trash1.png",
  //     icon: "/images/image.png",
  //     kind: "file",
  //     fileType: "img",
  //     position: "top-10 left-10",
  //     imageUrl: "/images/trash-1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "trash2.png",
  //     icon: "/images/image.png",
  //     kind: "file",
  //     fileType: "img",
  //     position: "top-40 left-80",
  //     imageUrl: "/images/trash-2.png",
  //   },
  // ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {

  //add Windows here (spotify, facetime,mail)
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };