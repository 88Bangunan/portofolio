import { IoDocumentText, IoLogoFigma, IoThumbsUp } from "react-icons/io5";
import { FaArrowRight, FaCss3Alt, FaGithub, FaHtml5, FaInstagram, FaJsSquare, FaLinkedinIn, FaNodeJs, FaPhp, FaReact, FaWhatsapp} from "react-icons/fa"
import Marquee from "react-fast-marquee"
import { OfferCarousel } from "./OfferCarousel";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { Link } from "react-router";
import {IoMdMail} from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { ScrollFadeUp } from "../../components/ScrollFadeUp";
import { GrOracle } from "react-icons/gr";
import { SiExpress, SiMysql, SiXampp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { BsTypescript } from "react-icons/bs";
import { AchievementContext } from "../../context/AchievementContext";

const advantages = [
  {
    id: 1, 
    icon: <MdWorkHistory />,
    title: "Workaholic",
    description: "I'm a kind of person who can't just stand around and doing nothing. I have a tendency to do something productive."
  },
  {
    id: 2,
    icon: <IoChatbubbleEllipses />,
    title: "Communicative",
    description: "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver."
  },
  {
    id: 3,
    icon: <IoThumbsUp />,
    title: "Cooperative",
    description: "Behind the successful project, there's a great team. I can build a good cooperation and remain consistent with the goal."
  },
  {
    id: 4,
    icon: <VscVerifiedFilled />,
    title: "Perfectionist",
    description: "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result."
  }
]

function HomePage() {

    const {projects, setProjects} = useContext(ProjectContext)
    const { achievements } = useContext(AchievementContext);
    
    const [categoryFilter, setCategoryFilter] = useState("")
    const [projectsCategoryFiltered, setProjectsCategoryFiltered] = useState([])

    useEffect(() => {
      if(categoryFilter.trim().length <= 0) {
        return setProjectsCategoryFiltered([])
      }

      setProjectsCategoryFiltered(projects.filter(project => project.category === categoryFilter))
      
    }, [categoryFilter])
    
    return (
      <>
        <div className="hero-container flex flex-col gap-y-5 text-white box-border">
          <div className="md:flex md:justify-between xl:h-160 md:gap-x-15 lg:gap-x-30">
            <div className="hero-heading flex flex-col md:justify-between gap-y-3 md:w-1/2 xl:w-2/3">
              <div className="flex flex-col gap-y-1">
                <ScrollFadeUp>
                  <span className="text-4xl lg:text-7xl xl:text-8xl font-bold text-shadow-2xs text-shadow-violet-500 leading-[0.9]">
                    ANDREW
                  </span>
                </ScrollFadeUp>
                <ScrollFadeUp>
                  <div className="font-medium flex flex-col text-gray-300 text-xl leading-[1.05]">
                    <span className="leading">Full Stack</span>
                    <span>Web Developer</span>
                  </div>
                </ScrollFadeUp>
              </div>
              <div className="md:flex flex-col gap-y-5">
                <ScrollFadeUp>
                  <span className="hidden md:block md:text-[10px] lg:text-[11px] xl:text-[12px] uppercase text-gray-300/80 tracking-widest">
                    Front End Web Developer • Back End Web Developer • Full
                    Stack Developer
                  </span>
                </ScrollFadeUp>
                <div className="hidden md:flex profile-overview-description py-3 box-border flex-col gap-y-2">
                  <div className="flex items-center justify-between text-center gap-x-3">
                    <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                    <ScrollFadeUp>
                      <div className="flex flex-col text-gray-40/80 text-md italic text-base/6">
                        <span className="capitalize">More than just looks</span>
                        <span className="capitalize">
                          I build living web systems
                        </span>
                      </div>
                    </ScrollFadeUp>
                    <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                  </div>
                  <ScrollFadeUp>
                    <p className="text-gray-50/80 text-base/6">
                      I'm a person who has a keen interest in building /
                      developing an application specifically in a web
                      application. I think delivering a great web application
                      requires an intuitive user interface and a robust backend
                      system. That is why i enjoy the process of being a Full
                      Stack Web Developer by designing engaging UI/UX while
                      simultaneously architecting how data flows seamlessly
                      between the client and the database.
                    </p>
                  </ScrollFadeUp>
                </div>
                <div className="hidden md:flex hero-cta-btn flex-col gap-y-5 py-5 box-border">
                  <Link to="/project" reloadDocument viewTransition>
                    <button className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-4/5 xl:w-6/7 bg-gray-500/20 grayscale border rounded-sm border-gray-100/20 p-3 box-border flex justify-center items-center gap-x-3 font-semibold hover:bg-gray-500/30 cursor-pointer transition duration-500 ease-in-out shadow-xl shadow-gray-500/20 hover:shadow-gray-500/30">
                      View Projects
                      <FaArrowRight />
                    </button>
                  </Link>
                  <a
                    href="https://flowcv.com/resume/oescwq9ki922"
                    target="_blank"
                    download={"Andrew_CV.pdf"}
                  >
                    <button className="bg-secondary text-white rounded-sm p-3 hover:bg-primary cursor-pointer transition duration-500 ease-in-out box-border flex justify-center items-center gap-x-3 font-semibold sm:w-1/3 md:w-3/5 lg:w-3/5 xl:W-5/7">
                      <IoDocumentText />
                      Download CV
                    </button>
                  </a>
                </div>
                <div className="hidden md:flex items-center gap-x-3">
                  <span className="capitalize font-semibold text-gray-200/80">
                    Find me on
                  </span>
                  <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border cursor-pointer hover:bg-primary/30 transition duration-500 ease-in-out">
                    <FaInstagram />
                  </span>
                  <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border cursor-pointer hover:bg-primary/30 transition duration-500 ease-in-out">
                    <FaWhatsapp />
                  </span>
                  <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border cursor-pointer hover:bg-primary/30 transition duration-500 ease-in-out">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-image pt-5 box-border md:pt-0 flex flex-col gap-y-5 md:w-1/2 animate-zoomIn">
              <div className="image-outer-container border border-gray-500/30 md:h-full rounded-4xl shadow-xl p-4 box-border grayscale contrast-120 bg-gray-700/50">
                <img
                  src="/profile-andrew.jpeg"
                  className="w-full aspect-4/5 object-cover h-full contrast-120 rounded-4xl drop-shadow-xl drop-shadow-gray-500/50"
                  alt=""
                />
              </div>
              <ScrollFadeUp>
                <span className="text-sm uppercase line-clamp-2 text-gray-300/80 md:hidden">
                  Full Stack Web Developer • E-commerce specialist • Database
                  Administrator
                </span>
              </ScrollFadeUp>
              <div className="profile-overview-description py-3 box-border flex flex-col gap-y-2 md:hidden">
                <div className="flex items-center justify-between text-center gap-x-3">
                  <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                  <ScrollFadeUp>
                    <div className="flex flex-col text-gray-40/80 text-md italic text-base/6">
                      <span className="capitalize">More than just looks</span>
                      <span className="capitalize">
                        I build living web systems
                      </span>
                    </div>
                  </ScrollFadeUp>
                  <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                </div>
                <ScrollFadeUp>
                  <p className="text-gray-50/80 text-base/6">
                    I'm a person who has a keen interest in building /
                    developing an application specifically in a web application.
                    I think delivering a great web application requires an
                    intuitive user interface and a robust backend system. That
                    is why i enjoy the process of being a Full Stack Web
                    Developer by designing engaging UI/UX while simultaneously
                    architecting how data flows seamlessly between the client
                    and the database
                  </p>
                </ScrollFadeUp>
              </div>
            </div>
          </div>
          <div className="hero-cta-btn flex flex-col gap-y-5 py-5 box-border md:hidden">
            <Link to="/project" reloadDocument>
              <button className="w-3/4 sm:w-1/2 bg-gray-500/20 grayscale border rounded-sm border-gray-100/20 p-3 box-border flex justify-center items-center gap-x-3 font-semibold hover:bg-gray-500/30 cursor-pointer transition duration-500 ease-in-out shadow-xl shadow-gray-500/20 hover:shadow-gray-500/30">
                View Projects
                <FaArrowRight />
              </button>
            </Link>
            <a
              href="https://flowcv.com/resume/oescwq9ki922"
              download={"Andrew_CV.pdf"}
            >
              <button className="bg-secondary text-white rounded-sm p-3 hover:bg-primary cursor-pointer transition duration-500 ease-in-out box-border flex justify-center items-center gap-x-3 font-semibold sm:w-1/3">
                <IoDocumentText />
                Download CV
              </button>
            </a>
          </div>
          <div className="flex items-center gap-x-3 md:hidden">
            <span className="capitalize font-semibold text-gray-200/80">
              Find me on
            </span>
            <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border">
              <FaInstagram />
            </span>
            <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border">
              <FaWhatsapp />
            </span>
            <span className="bg-primary/50 text-secondary text-lg rounded-full p-2 box-border">
              <FaLinkedinIn />
            </span>
          </div>
          <div className="pt-7 box-border">
            <Marquee
              pauseOnClick={true}
              speed={30}
              gradient={true}
              gradientWidth={20}
              gradientColor={"black"}
              autoFill={true}
            >
              <div className="border-t border-gray-300/30 border-b p-0 text-gray-300/30 uppercase py-5 px-1 flex items-center space-x-3 box-border text-xl">
                <span>
                  Front End Web Developer • Back End Web Developer • Full Stack
                  Web Developer • E-Commerce Specialist • Database Administrator
                  •
                </span>
              </div>
            </Marquee>
          </div>
        </div>
        <OfferCarousel />
        <div className="projects-container flex flex-col gap-y-10 py-27 box-border">
          <ScrollFadeUp>
            <div className="project-heading flex flex-col gap-y-5">
              <span className="text-[11px] text-gray-400/50 tracking-widest">
                SELECTED PROJECTS
              </span>
              <div className="md:flex md:items-center md:justify-between block w-1/2 md:w-full">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                  Projects with a pulse
                </span>
                <Link to="/project" reloadDocument>
                  <span className="hidden md:flex text-[14.5px] text-gray-300/80 items-center gap-x-3">
                    View all projects
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
              <div className="filter-container flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:w-12/13 lg:w-7/8 xl:w-3/4">
                  {["E-COMMERCE STRATEGY", "WEB DEVELOPMENT", "UI/UX"].map(
                    (category, index) => (
                      <div
                        key={category.id}
                        className={`rounded-full p-3 box-border flex justify-center items-center text-center hover:bg-gray-300/50 cursor-pointer transition duration-500 ease-in-out ${categoryFilter === category ? "bg-gray-300/50" : "bg-gray-300/80"}`}
                        onClick={() => setCategoryFilter(category)}
                      >
                        <span className="text-white tracking-widest text-[13.5px]">
                          {category}
                        </span>
                      </div>
                    ),
                  )}
                </div>
                <div className="reset-category-button w-3/8 mx-auto md:w-2/10 lg:w-2/13 xl:w-2/15">
                  <button
                    className="bg-white text-black rounded-full p-3 box-border cursor-pointer hover:bg-gray-100/90 font-medium transition duration-300 ease-in-out w-full"
                    onClick={() => setCategoryFilter("")}
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <div className="project-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 lg:gap-8">
              {projectsCategoryFiltered.length > 0 ? (
                <>
                  {projectsCategoryFiltered
                    .slice(0, projectsCategoryFiltered.length)
                    .map((project) => (
                      <a
                        key={`project-${project.id}`}
                        href={`/projects/${project.slug}`}
                      >
                        <div className="rounded-lg relative overflow-hidden group">
                          <img
                            className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition duration-500 ease-in-out hover:cursor-pointer"
                            src={project.image}
                            alt=""
                          />
                          <div className="absolute bg-black/90 blur-lg sm:blur-xl top-3/4 md:top-2/3 lg:top-3/4 left-0 right-0 bottom-0"></div>
                          <div className="top-information-section absolute top-5 md:top-3 left-5 right-5">
                            <div className="flex items-center justify-between text-[10.5px]">
                              <div className="bg-gray-500 grayscale p-2 box-border rounded-full border border-gray-300/30 text-white">
                                <span className="tracking-widest uppercase">
                                  {project.category}
                                </span>
                              </div>
                              <div className="bg-gray-500 grayscale py-1 px-3 box-border rounded-full border border-gray-300/30 text-white">
                                <span>{project.year}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bottom-information-section absolute top-3/4 md:top-2/3 lg:top-3/4 left-5 right-5">
                            <div className="flex flex-col gap-y-3">
                              <span className="text-white font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl xl:text-[26px]">
                                {project.title}
                              </span>
                              <span className="animate-slideDownHidden group-hover:animate-slideUpShow transition duration-500 ease-out text-gray-100/80 text-[14px]">
                                {project.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                </>
              ) : (
                <>
                  {projects.length > 0 &&
                    projects.slice(0, 4).map((project) => (
                      <a
                        key={`project-${project.id}`}
                        href={`/projects/${project.slug}`}
                      >
                        <div className="rounded-lg relative overflow-hidden group">
                          <img
                            className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition duration-500 ease-in-out hover:cursor-pointer"
                            src={project.image}
                            alt=""
                          />
                          <div className="absolute bg-black/90 blur-lg sm:blur-xl top-3/4 md:top-2/3 lg:top-3/4 left-0 right-0 bottom-0"></div>
                          <div className="top-information-section absolute top-5 md:top-3 left-5 right-5">
                            <div className="flex items-center justify-between text-[10.5px]">
                              <div className="bg-gray-500 grayscale p-2 box-border rounded-full border border-gray-300/30 text-white">
                                <span className="tracking-widest uppercase">
                                  {project.category}
                                </span>
                              </div>
                              <div className="bg-gray-500 grayscale py-1 px-3 box-border rounded-full border border-gray-300/30 text-white">
                                <span>{project.year}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bottom-information-section absolute top-3/4 md:top-2/3 lg:top-3/4 left-5 right-5">
                            <div className="flex flex-col gap-y-3">
                              <span className="text-white font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl xl:text-[26px]">
                                {project.title}
                              </span>
                              <span className="animate-slideDownHidden group-hover:animate-slideUpShow transition duration-500 ease-out text-gray-100/80 text-[14px]">
                                {project.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                </>
              )}
            </div>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <div className="project-bottom flex flex-col gap-y-10">
              <Link to="/project" reloadDocument>
                <span className="text-lg flex items-center gap-x-3 text-white md:bg-white md:text-black md:p-3 md:box-border md:font-medium md:rounded-full md:w-2/7 lg:w-2/10 md:hover:bg-gray-100/90 xl:w-2/13 md:mx-auto md:text-[15px] md:justify-center transition duration-300 ease-in-out w-full">
                  View all projects
                  <FaArrowRight />
                </span>
              </Link>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-5 bg-gray-500/30 p-5 box-border rounded-xl">
                <div className="description-container flex flex-col gap-y-3 md:w-1/2 lg:w-2/3 xl:w-3/4">
                  <h3 className="text-xl font-semibold tracking-wide text-white">
                    Have any project in mind?
                  </h3>
                  <span className="text-gray-300/50 text-[13.5px]">
                    I'm available for freelancing
                  </span>
                </div>
                <div className="cta-button flex items-center gap-x-5 md:gap-x-3 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <div className="w-1/2">
                    <Link to="/project" reloadDocument>
                      <button className="bg-transparent border rounded-lg p-2 box-border w-full text-white font-medium hover:bg-gray-500/40 cursor-pointer transition duration-500 ease-in-out">
                        More Projects
                      </button>
                    </Link>
                  </div>

                  <div className="w-1/2">
                    <Link to="mailto:andrew17288@gmail.com">
                      <button className="bg-primary text-white font-semibold flex items-center justify-center gap-x-3 w-full rounded-lg p-2 box-border hover:bg-blue-900 transition duration-500 ease-in-out cursor-pointer hover:shadow-xl">
                        <IoMdMail />
                        <span>Email Me</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeUp>
        </div>
        <div className="why-hire-me-container flex flex-col gap-y-10 py-27 box-border">
          <div className="why-hire-me-heading">
            <ScrollFadeUp>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                Why Hire Me
              </span>
            </ScrollFadeUp>
          </div>

          <div className="why-hire-me-content grid grid-cols-1 md:grid-cols-2 md:text-center lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10">
            {advantages.map((advantage) => (
              <ScrollFadeUp key={`advantage-${advantage.id}`}>
                <div>
                  <div className="advantage-icon-container pb-5 box-border w-2/10 text-2xl sm:w-2/18 md:w-2/7 md:mx-auto md:text-3xl lg:w-5/8 lg:text-4xl xl:w-4/8 2xl:w-5/11">
                    <div className="border rounded-full border-gray-300/50 bg-gray-100/15 p-2 box-border">
                      <div className="border border-primary bg-blue-900 rounded-full p-3 md:p-5 lg:p-8 xl:p-10 box-border flex justify-center items-center">
                        <span className="text-primary">{advantage.icon}</span>
                      </div>
                    </div>
                  </div>
                  <div className="advantage-information-container flex flex-col gap-y-3">
                    <span className="text-white text-xl font-medium sm:text-2xl lg:text-3xl">
                      {advantage.title}
                    </span>
                    <p className="text-gray-300/50 leading-5 text-justify line-clamp-3">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
        <div className="achievements-certificates-container flex flex-col gap-y-10 py-27 box-border">
          <div className="achievements-certificates-heading">
            <div className="flex items-center justify-between">
              <ScrollFadeUp>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                  Certificates & Achievements
                </span>
              </ScrollFadeUp>
              <ScrollFadeUp>
                <Link to="/achievements">
                  <span className="hidden md:flex text-[14.5px] text-gray-300/80 items-center gap-x-3">
                    View all achievements
                    <FaArrowRight />
                  </span>
                </Link>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="achievements-content grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements
              .slice(0, achievements.length - 1)
              .map((achievement) => (
                <Link key={achievement.id} to={`/achievement/${achievement.slug}`} reloadDocument>
                  <div className="border border-gray-300/50 rounded-2xl overflow-hidden animate-slideDown hover:animate-slideUp transition duraton-500 ease-in-out cursor-pointer">
                    <div className="relative">
                      <iframe
                        className="w-full h-73.5 xl:h-84.5 border-0 rounded-t-2xl"
                        src={achievement.source}
                        title={achievement.title}
                        allow="fullscreen"
                        allowFullScreen
                        scrolling="no"
                      ></iframe>
                      <a href={achievement.source} target="_blank">
                        <div className="w-5 h-5 absolute top-6/7 right-5 bg-gray-500 cursor-pointer">
                          <div className="flex justify-center items-center h-5">
                            <div className="w-3 h-3 border border-gray-300"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="certificates-achievements-information-container py-3 px-5 box-border flex flex-col gap-y-3">
                      <span className="category text-[13.5px] text-gray-400/80 font-medium tracking-[3.5px]">
                        {achievement.category}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-lg tracking-tighter">
                          {achievement.title}
                        </span>
                        <span className="text-[13.5px] text-gray-400/80 font-medium tracking-wide">
                          {achievement.year}
                        </span>
                      </div>
                      <div className="text-gray-200/50 font-medium leading-6 line-clamp-3">
                        {achievement.description[0].text}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="tools-container flex flex-col gap-y-10 py-27 box-border">
          <div className="tools-heading-container">
            <ScrollFadeUp>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                Tools and Skills
              </span>
            </ScrollFadeUp>
          </div>
          <ScrollFadeUp>
            <div className="tools-content flex flex-col gap-y-5">
              <Marquee
                speed={30}
                pauseOnHover={true}
                gradient={true}
                gradientColor={"black"}
                gradientWidth={50}
                autoFill={true}
              >
                <div className="xl:px-5 flex items-center space-x-5 xl:space-x-10">
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-purple-500">
                      <IoLogoFigma />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white animate-scrollFadeUp font-semibold opacity-0">
                          Figma
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-orange-500">
                      <FaHtml5 />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          HTML
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-400">
                      <FaCss3Alt />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          CSS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-yellow-500">
                      <FaJsSquare />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          JavaScript
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-oracle">
                      <GrOracle />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          Oracle APEX
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-400">
                      <SiMysql />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          MySQL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-purple-300">
                      <FaPhp />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          PHP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-orange-500">
                      <SiXampp />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          XAMPP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Marquee>
              <Marquee
                speed={30}
                autoFill={true}
                pauseOnHover={true}
                gradient={true}
                gradientColor={"black"}
                gradientWidth={50}
                direction={"right"}
              >
                <div className="xl:px-5 flex items-center space-x-5 xl:space-x-10">
                  <div className="sm:hidden border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-400">
                      <SiMysql />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          MySQL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="xl:hidden border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-purple-300">
                      <FaPhp />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          PHP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="xl:hidden border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-orange-500">
                      <SiXampp />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          XAMPP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-500">
                      <FaReact />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          React
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-500">
                      <RiTailwindCssFill />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          TailwindCSS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-green-800">
                      <FaNodeJs />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          Nodejs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-white">
                      <SiExpress />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          Express js
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-green-600">
                      <DiMongodb />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          MongoDB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-blue-300">
                      <DiPostgresql />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-white">
                      <FaGithub />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          GitHub
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block border border-gray-300/50 rounded-xl p-5 box-border relative group">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-primary">
                      <BsTypescript />
                    </span>
                    <div className="hidden group-hover:block bg-black/80 z-10 absolute top-3/4 left-0 right-0">
                      <div className="flex justify-center items-center">
                        <span className="text-xl text-white font-semibold animate-scrollFadeUp opacity-0">
                          TypeScript
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>
          </ScrollFadeUp>
        </div>
      </>
    );
}

export default HomePage