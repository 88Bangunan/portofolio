import { createContext, useState } from "react";

export const AchievementContext = createContext(null);

export const AchievementProvider = ({ children }) => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Dean's List Awardee",
      slug: "deans-list-awardee",
      source: "/Andrew-Certificates/ANDREW.pdf",
      year: 2025,
      issuer: "Bina Nusantara University",
      description: [
        {
          subtitle: "Achievement Recognition & Criteria",
          text: "The Dean’s List Award is a prestigious academic recognition bestowed by Bina Nusantara University upon students who demonstrate exceptional scholastic excellence throughout the semester. To qualify for this honor, a student must maintain a high Grade Point Average (GPA) of 3.50 or above while carrying a full academic course load. Receiving this award in 2025 serves as an official testament to my disciplined approach to higher education and my ability to consistently meet rigorous academic standards.",
        },
        {
          subtitle: "Dedication & Core Skills Developed",
          text: "Earning a spot on the Dean’s List required more than just attending lectures; it demanded rigorous time management, critical thinking, and a profound commitment to mastering complex subjects. Balancing intense project deadlines, group assignments, and examinations taught me how to perform under pressure and manage tasks efficiently. This milestone reflects my strong analytical skills, adaptability to diverse learning modules, and a persistent drive to go beyond the baseline requirements of the curriculum.",
        },
        {
          subtitle: "Professional Impact & Future Application",
          text: "In a professional context, this academic distinction highlights my strong work ethic, reliability, and intrinsic motivation to succeed. It proves to prospective employers and collaborators that I approach my responsibilities with a high level of dedication and thoroughness. Moving forward, I plan to carry this same standard of excellence into the tech industry, utilizing the solid theoretical and practical foundation built during my time at BINUS to solve complex, real-world problems.",
        },
      ],
      category: "Achievements",
    },
    {
      id: 2,
      title: "Rapid Mendix Developer",
      slug: "rapid-mendix-developer",
      source: "/Andrew-Certificates/Mendix_Certificate.pdf",
      year: 2026,
      issuer: "Mendix",
      description: [
        {
          subtitle: "Technical Scope & Certification Overview",
          text: "The Mendix Developer Certification validates professional proficiency in low-code application development using the enterprise-grade Mendix platform. This credential certifies my comprehensive understanding of rapid application development, visual modeling, and agile project methodologies. Achieving this in 2026 demonstrates my capability to accelerate digital transformation by bridging the gap between business requirements and technical execution through efficient application building.",
        },
        {
          subtitle: "Skills Acquired & Application Architecture",
          text: "Throughout the preparation and evaluation for this certification, I mastered core concepts such as domain modeling, microflows, page design, and security configurations within Mendix. I gained hands-on experience in configuring relational databases, implementing complex business logic, and creating responsive user interfaces that enhance user experience. Furthermore, the certification process honed my skills in agile delivery, enabling me to collaborate effectively within cross-functional teams to deploy scalable enterprise applications rapidly.",
        },
        {
          subtitle: "Strategic Value & Career Readiness",
          text: "Holding this certification positions me as an agile problem-solver capable of delivering functional software prototypes and full-scale applications at an accelerated pace. In an industry where speed-to-market is critical, my expertise in Mendix allows organizations to cut down development costs and iterate quickly based on user feedback. I am fully prepared to leverage this knowledge to help businesses modernize their workflows and deliver high-impact digital solutions.",
        },
      ],
      category: "Technical Certifications",
    },
    {
      id: 3,
      title: "Self-Paced Azure AI Basic Fundamental",
      slug: "self-paced-azure-ai-basic-fundamental",
      source: "/Andrew-Certificates/Certificate-of-Completion-AI-GreatNusa.pdf",
      year: 2025,
      issuer: "GreatNusa",
      description: [
        {
          subtitle: "Course Context & Core Fundamentals",
          text: "The 'Self-Paced Azure AI Basic Fundamental' course, completed through the GreatNusa platform in 2025, provided a comprehensive introduction to cloud-based artificial intelligence solutions. This intensive digital learning program covers the baseline concepts of artificial intelligence and machine learning within the Microsoft Azure ecosystem. By engaging with this curriculum, I established a clear understanding of how cloud infrastructure enables the deployment of smart applications at scale.",
        },
        {
          subtitle: "Specialized AI Knowledge Areas",
          text: "The course modules guided me through essential AI workloads, including Computer Vision, Natural Language Processing (NLP), and Conversational AI. I explored how pre-built Azure AI services can be integrated into existing software architectures to automate tasks, analyze unstructured data, and enhance user engagement. Additionally, the training emphasized the principles of Responsible AI, teaching me the ethical considerations regarding fairness, reliability, privacy, and inclusivity when building intelligent systems.",
        },
        {
          subtitle: "Analytical Mindset & Innovation Readiness",
          text: "Completing this fundamental course has equipped me with the vocabulary and framework necessary to contribute to AI-driven projects. It has transformed the way I approach software design, prompting me to look for opportunities where machine learning can optimize user workflows. As AI continues to reshape the technology landscape, the insights gained from this GreatNusa course empower me to participate intelligently in cloud-native AI implementations and strategies.",
        },
      ],
      category: "Courses & Training",
    },
    {
      id: 4,
      title: "Menyelesaikan Kelas Belajar AJAX & WEB API",
      slug: "menyelesaikan-kelas-belajar-ajax-web-api",
      source: "/Andrew-Certificates/Certificate-14-CODEPOLITAN.pdf",
      year: 2025,
      issuer: "CODEPOLITAN",
      description: [
        {
          subtitle: "Web Development Context & Purpose",
          text: "The 'Belajar AJAX & WEB API' course from CODEPOLITAN, completed in 2025, focused on mastering asynchronous JavaScript technologies and web service integrations. This practical programming course addresses the core mechanisms that enable modern web applications to communicate dynamically with servers without requiring full-page reloads. Acquiring this skill set marks an essential step in my transition from static web page design to building highly dynamic, interactive web applications.",
        },
        {
          subtitle: "Practical Technical Stack & Implementation",
          text: "During this training, I delved deeply into the asynchronous nature of web browsers, working directly with AJAX, the Fetch API, and handling JSON data structures. I learned how to consume data from external RESTful Web APIs, manage asynchronous requests and responses, and dynamically update the Document Object Model (DOM) based on server inputs. The course also provided hands-on experience in debugging network requests and handling potential API communication errors gracefully to ensure a seamless user experience.",
        },
        {
          subtitle: "Frontend Capability & Full-Stack Foundation",
          text: "Mastering AJAX and Web APIs greatly enhances my capability to develop user-centric front-end interfaces that feel fast, responsive, and reliable. This competence bridges the gap between client-side interfaces and backend databases, establishing a sturdy foundation for full-stack development methodologies. With these skills, I am fully equipped to build modern web interfaces that integrate smoothly with diverse backend services, providing end-users with optimal performance.",
        },
      ],
      category: "Courses & Training",
    },
  ]);

  return <AchievementContext value={{achievements, setAchievements}}>{children}</AchievementContext>;
};
