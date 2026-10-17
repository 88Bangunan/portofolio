import { createContext, useState } from "react";

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {

    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "88Bangunan SEO Optimization",
        slug: "88bangunan-seo-optimization",
        image: "/Andrew-Projects/e-commerce-specialist.png",
        category: "E-COMMERCE STRATEGY",
        role: "Digital Strategist / E-Commerce Specialist",
        description: [
          {
            subtitle: "Project Overview",
            text: "88Bangunan SEO Optimization is a digital commerce initiative focused on strengthening the online presence of a building materials distributor. The project aims to expand the business beyond its physical store by utilizing online marketplaces and local search platforms to reach a broader audience. \n\nBy combining marketplace management with Google Business Profile optimization, the initiative connects customers who are searching for building materials online with the business's available products and physical store location. This approach helps establish a more consistent digital presence across multiple customer touchpoints.",
          },
          {
            subtitle: "Digital Strategy and Implementation",
            text: "The strategy focuses on improving product discoverability, strengthening store visibility, and maintaining a consistent brand presence across Shopee, Tokopedia, and Google Business Profile. Each platform serves a different purpose: marketplaces support product discovery and online transactions, while Google Business Profile helps potential customers find and evaluate the physical business. \n\nAnother important aspect is managing customer reviews and ratings to build credibility. By paying attention to customer feedback and the store's digital reputation, the initiative supports customer confidence and helps potential buyers make more informed purchasing decisions.",
          },
          {
            subtitle: "Business Impact and Value",
            text: "This initiative demonstrates how digital channels can complement a traditional building materials business rather than operate independently. By connecting marketplace activity with local business visibility, 88Bangunan can serve customers who prefer online shopping as well as those who want to visit or contact the physical store directly.\n\nThe project also provides a foundation for future digital growth, including broader market reach, stronger brand recognition, and improved customer trust. It reflects a practical approach to digital strategy by aligning online visibility with the business's existing operations and long-term expansion goals.",
          },
        ],
        year: "2024",
        tools: [
          "Shopee Seller Centre",
          "Tokopedia Seller",
          "Google Business Profile",
        ],
      },
      {
        id: 2,
        title: "88Bangunan Web Design",
        slug: "88bangunan-web-design",
        image: "/Andrew-Projects/88bangunan-web-design.png",
        category: "WEB DEVELOPMENT",
        role: "Front-End Web Developer",
        description: [
          {
            subtitle: "Project Overview",
            text: "The 88Bangunan Web Design project focuses on developing a responsive product catalog website for a building materials distributor. The primary objective is to establish an independent digital presence beyond third-party marketplaces and provide customers with a dedicated platform to explore the business's products.\n\nPreviously, customers primarily relied on marketplace listings and other existing communication channels to discover products. The website introduces another touchpoint where customers can learn about the business, browse its product offerings, and become more familiar with the 88Bangunan brand.",
          },
          {
            subtitle: "Design and Development Approach",
            text: "The website was developed using React JSX to structure the user interface into reusable components and Tailwind CSS to implement styling and responsive layouts. This combination supports a maintainable front-end architecture while allowing the interface to adapt to different screen sizes.\n\nParticular attention was given to presenting product information clearly and maintaining a consistent visual experience across desktop and mobile devices. The design prioritizes accessibility of information, straightforward navigation, and a professional appearance to help customers explore the catalog without unnecessary complexity.",
          },
          {
            subtitle: "Outcome and Future Potential",
            text: "The project resulted in a deployed, publicly accessible front-end catalog website that strengthens 88Bangunan's digital identity and extends its online presence beyond marketplace platforms. It provides a dedicated destination for customers who want to learn more about the business and its product offerings.\n\nBeyond its immediate purpose, the website serves as a foundation for future e-commerce development. Potential enhancements include product search and filtering, customer accounts, inventory integration, online ordering, and order tracking. These opportunities illustrate how a simple product catalog can evolve into a more comprehensive digital commerce platform as business requirements grow.",
          },
        ],
        year: "2025",
        tools: ["React JSX", "Tailwind CSS"],
      },
      {
        id: 3,
        title: "FiCo Mobile App Design",
        slug: "fico-mobile-app-design",
        image: "/Andrew-Projects/FiCo-mobile-app-design.png",
        category: "UI/UX",
        role: "UI Design",
        description: [
          {
            subtitle: "Project Overview",
            text: "FiCo is a mobile application design project centered on helping users discover competitions and access relevant information in one convenient place. The concept addresses the challenge of finding competition opportunities and understanding their details without having to search across multiple sources.\n\nThe application is designed to provide a structured experience where users can explore competition listings, review essential information, and identify opportunities that match their interests. By bringing these elements together, FiCo aims to make competition discovery more accessible and organized."
          },
          {
            subtitle: "User Interface and Core Features",
            text: "The high-fidelity prototype was designed in Figma with an emphasis on clear information hierarchy, intuitive navigation, and a consistent mobile interface. The competition discovery experience allows users to browse available competitions and access information relevant to their participation decisions.\n\nThe concept also incorporates a posting feature that enables users to share their competition experiences and explore experiences shared by others. In addition, the competition menu and registration-related interface are intended to help users navigate opportunities and proceed toward participation with greater convenience."
          },
          {
            subtitle: "Design Goals and User Experience",
            text: "The main design goal was to create a centralized and user-friendly experience that supports both information discovery and community interaction. Rather than treating competition listings as isolated information, FiCo connects opportunity discovery with the experiences of other participants.\n\nThis project demonstrates the application of high-fidelity prototyping to communicate a digital product concept before development. It also highlights the importance of organizing information around user needs, designing clear navigation paths, and considering how discovery, social sharing, and registration can work together within a single mobile experience."
          }
        ],
        year: "2024",
        tools: ["Figma"],
      },
      {
        id: 4,
        title: "FIELDIFY Web Design",
        slug: "fieldify-web-design",
        image: "/Andrew-Projects/FIELDIFY-web-design.png",
        category: "WEB DEVELOPMENT",
        role: "Front-End Web Developer",
        description: [
          {
            subtitle: "Project Overview",
            text: "FIELDIFY is a sports field discovery and booking web application designed to simplify how users find suitable sports facilities. The project addresses the inconvenience of searching for field information across different sources by presenting key details in a centralized digital catalog.\n\nUsers can explore available fields and review information such as location, pricing, ratings, and sport type before deciding which facility best fits their needs. The application is designed to make the discovery process more efficient and provide a convenient starting point for submitting booking requests."
          },
          {
            subtitle: "Front-End Development and Features",
            text: "The application was developed using React JSX and Tailwind CSS, with a focus on reusable UI components, responsive layouts, and interactive functionality. A real-time search feature helps users locate fields by name, while sport-type filtering narrows the displayed results according to their preferences.\n\nFIELDIFY also incorporates a field details and booking request experience, allowing users to move from browsing to selecting a facility. Additional features include dark mode and client-side form validation, which helps identify incomplete or invalid input before a form is submitted. These features work together to create a more convenient and consistent experience across desktop and mobile devices."
          },
          {
            subtitle: "State Management and User Experience",
            text: "An important technical aspect of the project is the use of React's local state management and Context API for global state management. Local state supports interface-specific interactions, such as search input and filtering, while shared context allows relevant application data to be accessed across components when needed.\n\nThe project demonstrates how front-end architecture and user experience design can work together to support a multi-page application. By combining interactive catalog features, structured navigation, and form validation, FIELDIFY provides a practical example of building a responsive React application that addresses a real-world facility discovery and booking scenario."
          }
        ],
        year: "2026",
        tools: ["React JSX", "Tailwind CSS"],
      },
      {
        id: 5,
        title: "Sedot WC Koh Liu Web Design",
        slug: "sedot-wc-koh-liu-web-design",
        image: "/Andrew-Projects/sedot-wc-koh-liu-web-design.png",
        category: "WEB DEVELOPMENT",
        role: "Front-End Web Developer",
        description: [
          {
            subtitle: "Project Overview",
            text: "The Sedot WC Koh Liu website is a service-oriented web development project created to help customers find information about septic tank cleaning services more easily. When dealing with sanitation issues, customers often need to identify a suitable service provider and determine how to contact them without unnecessary confusion.\n\nThe website aims to provide a clear digital touchpoint where visitors can understand the service offering and find relevant contact information. By presenting essential information in a dedicated website, the project helps reduce friction between customers looking for a service and the business providing it."
          },
          {
            subtitle: "Responsive Design and Implementation",
            text: "The website was developed using React JSX and Tailwind CSS, with an emphasis on reusable components and responsive layouts. The interface was designed to remain readable and functional across mobile and desktop screen sizes, recognizing that customers may need to access service information from different devices.\n\nReact's component-based approach was used to organize the interface into manageable sections, supporting code readability and maintainability. Tailwind CSS responsive breakpoints helped adapt the layout to different viewport sizes while maintaining a consistent visual presentation."
          },
          {
            subtitle: "Technical Approach and Practical Value",
            text: "Beyond the visual interface, the project applies React Context for global state management where shared application data is needed across components. This approach helps separate shared state from individual interface elements and provides a foundation for keeping the codebase organized as the application evolves.\n\nThe project demonstrates the importance of building digital experiences around practical user needs. By combining clear service information, responsive design, and a maintainable front-end structure, the website provides a foundation for improving the business's online visibility and making its services easier for potential customers to discover."
          },
        ],
        year: "2026",
        tools: ["React JSX", "Tailwind CSS"],
      },
      {
        id: 6,
        title: "MyStyle Mobile App Design",
        slug: "mystle-mobile-app-design",
        image: "/Andrew-Projects/MyStyle-mobile-app-design.png",
        category: "UI/UX",
        role: "UI Design",
        description: [
          {
            subtitle: "Project Overview",
            text: "MyStyle is a mobile shopping application design concept created to make clothing discovery and online shopping more convenient. The project focuses on helping users browse fashion products, explore available clothing options, and find items that suit their individual preferences through a streamlined mobile experience.\n\nThe concept brings product discovery and shopping-related interactions together in one interface. Instead of simply displaying clothing items, MyStyle aims to support a more engaging shopping journey in which users can explore products, manage their selections, and learn from the experiences of other shoppers."
          },
          {
            subtitle: "User Interface and Shopping Features",
            text: "The high-fidelity mobile prototype was designed in Figma to demonstrate the application's interface, navigation, and core shopping interactions. The shopping flow incorporates product browsing and a cart feature, allowing users to collect their preferred items and review their selections as part of the purchasing journey.\n\nThe design also includes a review feature where users can share feedback about their shopping experiences and the clothing they purchase. In addition, the concept explores personalized clothing discovery to help users identify fashion items that align with their tastes and preferences."
          },
          {
            subtitle: "User-Centered Design Approach",
            text: "The design emphasizes a shopping experience that is straightforward, engaging, and centered on individual user preferences. By combining product discovery, cart interactions, customer reviews, and personalized recommendations, MyStyle explores how multiple shopping activities can be integrated into a cohesive mobile interface.\n\nThis project demonstrates the use of high-fidelity prototyping to translate a product concept into a visual and interactive design. It highlights the importance of organizing shopping flows, presenting product information clearly, and considering how user feedback and personalization can contribute to a more relevant fashion shopping experience."
          }
        ],
        year: "2024",
        tools: ["Figma"],
      },
    ]);

  return <ProjectContext value={{projects, setProjects}}>{children}</ProjectContext>;
};
