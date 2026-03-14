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
    date: "Mar 14, 2026",
    title:
      "The Ultimate Beginner's Guide to Starting A HomeLab",
    // image: "./images/blog1.png",
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
    items: ["Node.js", "Express", "Rest APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vite", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "./icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/m-kabir02",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "./icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sadiyak",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "./icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "./icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "./icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "./icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "./icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "./images/gal-1.png",
  },
  {
    id: 2,
    img: "./images/gal-2.png",
  },
  {
    id: 3,
    img: "./images/gal-3.png",
  },
  {
    id: 4,
    img: "./images/gal-4.gif",
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
  id: "root-work",
  type: "work",
  name: "Work",
  icon: "./icons/work.svg",
  kind: "folder",
  children: [
    {
      id: "project-1",
      name: "AI-Powered PDF Chatbot",
      icon: "./images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: "p1-txt",
          name: "Description.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Full-stack RAG pipeline answering natural language questions about PDFs.",
            "Built with Streamlit, Python, OpenAI GPT, FAISS, and LangChain.",
          ],
        },
        {
          id: "p1-url",
          name: "AI Chatbot",
          icon: "./images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://m-kabir02.github.io/AI-CHATBOT/",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: "project-2",
      name: "Dynamic React Website",
      icon: "./images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: "p2-txt",
          name: "Description.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a replica of Apple’s iPhone 15 Pro website",
            "Built with React.js and TailwindCSS, showcasing advanced implementation of GSAP and Three.js to dynamically display iPhone 15 Pro models in different colors and shapes.",
          ],
        },
        {
          id: "p2-url",
          name: "Dynamic React Website",
          icon: "./images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://iphone-doc.vercel.app/",
          position: "top-20 left-20",
        },
      ],
    },
    {
      id: "project-3",
      name: "IT Helpdesk Dashboard",
      icon: "./images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: "p3-txt",
          name: "Dashboard.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Cleaned high-volume helpdesk data using Python to identify resolution trends.",
            "Created Excel PivotTable dashboards to visualize hardware failure rates.",
          ],
        },
        {
          id: "p3-url",
          name: "IT Helpdesk Dashboard",
          icon: "./images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/m-kabir02/IT-Helpdesk-Analytics-Project",
          position: "top-10 right-20",
        },
      ],
    },
  ],
  };

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "./icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "./images/my-image2.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "./images/Mosammad.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "./images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "./images/Mosammad2.jpg",
      description: [
        "Hey! I’m Mosammad SadiyaKabir 👋 and I'm an aspiring Software Engineer who enjoys building code for good causes.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me learning something new, whether it's a new language or musical instrument, while sipping matcha 🍵",
      ],
    }
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "./icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "./images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/Resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "./icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "./images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "./images/trash-2.png",
    },
  ],
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