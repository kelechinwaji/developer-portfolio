const header = {
  homepage: "/",
  title: "KelechiNwaji",
};

const about = {
  name: "Kelechi Nwaji",
  role: "Backend Engineer",
  description:
    "I build robust and scalable server-side solutions for seamless user experiences.",
 
  resume:
    "https://drive.google.com/file/d/1lIZRn4euYIZdRIwXIClfIwpmnM2-A6MM/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/kelechukwu-nwaji/",
    github: "https://github.com/kelechinwaji",
  },
};

const projects = [
  {
    name: "Speak Better",
    description:
      "AI-powered grammar checker backed by an automatic speech recognition system trained with over 650,000 hours of multilingual speech data collected from all over the internet",
    stack: ["OpenAi", "JavaScript", "MongoDB"],
    sourceCode: "https://github.com/workshopapps/grammarcheckerai.web/tree/BAC2-77-flutterwave",
    livePreview: "https://speakbetter.fun/",
  },
  {
    name: "AfriBook",
    description:
      "AfriBook is an E-commerce market place for African authors to publish books and readers can buy.",
    stack: ["NodeJs", "TypeScript", "MongoDb"],
    sourceCode: "https://github.com/AfriBooks/Backend_api",
    livePreview: "https://afribook.netlify.app",
  },
  {
    name: "Food Store",
    description:
      "This is a backend food ordering system, built with a Microservice Architecture.",
    stack: ["Postgres", "JavaScript", "Nodejs"],
    sourceCode: "https://github.com/kelechinwaji/foodStore",
    // livePreview: "",
  },
  {
    name: "FORTE MALL",
    description:
      "Built an E-commerce application that has a responsive cart functionality, to take orders dynamically And generate a total invoice",
    stack: ["Javascript","CSS", "HTML"],
    sourceCode: "https://github.com/kelechinwaji/Shopping-Cart",
    livePreview: "https://confident-saha-77f853.netlify.app/",
  },
  {
    name: "Google OAuth",
    description: "This is an authentication system built using google OAuth.",
    stack: ["NestJs", "NodeJs", "Typescript", "Postgresql"],
    sourceCode: "https://github.com/kelechinwaji/Google-Oauth2",
    // livePreview: "",
  },
  {
    name: "Product Api",
    description:
      "An inventory management application built to enable business owners keep track of products.",
    stack: ["NodeJs", "Typescript", "MongoDb"],
    sourceCode: "https://github.com/kelechinwaji/product-api",
    // livePreview: "",
  },
];

const skills = [
  "NodeJs",
  "JavaScript",
  "TypeScript",
  "Postgresql",
  "MongoDb",
  "NestJs",
  "ExpressJs",
  "Git",
];

const contact = {
  email: "casey.nwaji@gmail.com",
};

export { header, about, projects, skills, contact };
