import { CiShop } from "react-icons/ci";
import { ScrollFadeUp } from "../../components/ScrollFadeUp";
import { PiCoffeeLight } from "react-icons/pi";
import { IoMusicalNoteOutline, IoWalkOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

function AboutPage() {
  return (
    <>
      <div className="hero-container flex flex-col gap-y-5 md:pb-20 text-white box-border">
        <div className="md:flex md:justify-between md:items-start md:h-130 lg:h-140 md:gap-x-15 lg:gap-x-30">
          <div className="hero-heading flex flex-col md:justify-between gap-y-3 md:w-1/2 xl:w-2/3">
            <ScrollFadeUp>
              <span className="text-gray-200/70 tracking-[3.5px] text-[11.5px] uppercase pb-5 box-border">
                ABOUT
              </span>
            </ScrollFadeUp>
            <div className="flex flex-col gap-y-10">
              <ScrollFadeUp>
                <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-shadow-2xs text-shadow-violet-500 leading-[0.9] lg:leading-[1.1] block">
                  A developer who thinks in systems and designs with purpose.
                </span>
              </ScrollFadeUp>
              <ScrollFadeUp>
                <div className="font-medium flex flex-col text-gray-300/70 text-[15.5px] xl:text-lg leading-normal">
                  <p>
                    Hi, I'm ANDREW — a versatile Full Stack Web Developer
                    dedicated to bridging the gap between stunning visual
                    interfaces and robust data architecture.
                  </p>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp>
                <div className="font-medium flex text-xl xl:text-2xl leading-[1.05] p-3 border-l-2 border-gray-200/70">
                  <span className="text-gray-100/90 italic">
                    "Great design catches the eye; flawless data execution
                    powers the experience."
                  </span>
                </div>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="hero-image pt-13 pb-25 box-border md:p-0 md:h-full flex flex-col gap-y-5 md:w-1/2 animate-zoomIn">
            <div className="image-outer-container border border-gray-500/30 md:h-full rounded-4xl shadow-xl p-4 box-border grayscale contrast-120 bg-gray-700/50">
              <img
                src="/profile-andrew.jpeg"
                className="w-full aspect-4/5 object-cover h-full contrast-120 rounded-4xl drop-shadow-xl drop-shadow-gray-500/50"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 py-27 box-border relative">
        <div className="absolute w-70 sm:w-120 md:w-140 lg:w-150 xl:w-160 -top-20 rounded-full blur-2xl z-20 left-1/2 -translate-x-1/2 bg-white/10 h-50 md:h-80 bg-linear-to-tr from-neutral-500 to-stone-300 opacity-[0.1]"></div>
        <div className="grouping-container flex flex-col gap-y-10 md:flex-row md:items-center md:gap-x-15 lg:gap-x-30">
          <div className="my-philosophy-container flex flex-col gap-y-7 md:w-1/2 xl:w-2/3">
            <div className="my-philosophy-heading flex flex-col gap-y-5">
              <ScrollFadeUp>
                <span className="text-gray-200/70 text-[11.5px] tracking-[3.5px] uppercase">
                  My Philosophy (The Bridge)
                </span>
              </ScrollFadeUp>
              <ScrollFadeUp>
                <span className="text-white text-4xl font-bold tracking-tighter capitalize">
                  Bridging visual experience with data intelligence
                </span>
              </ScrollFadeUp>
            </div>
            <div className="my-philosophy-content text-gray-100/70 leading-6 text-justify">
              <ScrollFadeUp>
                <p>
                  To me, full-stack web development isn't about working on two
                  different sides—it’s about building one seamless ecosystem. A
                  beautiful user interface catches the eye, but a robust backend
                  architecture is what keeps the application alive. I don't just
                  write code; I design how information flows. I make sure that
                  every interaction on the screen triggers a fast, secure, and
                  smart exchange of data under the hood. For me, a website is
                  truly successful when the client-side visuals and the internal
                  server logic work together in perfect harmony.
                </p>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="core-competencies-container flex flex-col gap-y-5 md:w-1/2">
            <div className="core-competencies-heading">
              <ScrollFadeUp>
                <span className="text-gray-200/70 text-[11.5px] tracking-[3.5px] uppercase">
                  Core Competencies
                </span>
              </ScrollFadeUp>
            </div>
            <ScrollFadeUp>
              <div className="crafting-intuitive-container flex flex-col gap-y-3 grayscale bg-gray-900/80 p-5 rounded-2xl box-border border border-gray-200/10">
                <span className="text-white text-2xl font-bold tracking-tighter capitalize">
                  Crafting Intuitive & Responsive Experiences (Client-Side)
                </span>
                <div className="crafting-intuitive-content text-gray-100/70 leading-6 text-justify">
                  <p>
                    The frontend is where your brand meets the user. I
                    specialize in turning design concepts into pixel-perfect,
                    highly interactive, and responsive web interfaces. My focus
                    is always on user psychology, web performance, and modern
                    aesthetics, ensuring that every button, animation, and
                    layout provides a seamless and engaging experience across
                    all devices.
                  </p>
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="architecting-container flex flex-col gap-y-5 grayscale bg-gray-900/80 p-5 rounded-2xl box-border border border-gray-200/10">
                <span className="text-white text-2xl font-bold tracking-tighter capitalize">
                  Architecting Robust & Secure Data Flows (Server-Side)
                </span>
                <div className="architecting-content text-gray-100/70 leading-6 text-justify">
                  <p>
                    A beautiful interface is nothing without a powerful engine.
                    I thrive on managing the internal complexity of web
                    applications—from designing efficient database schemas to
                    building secure, scalable RESTful APIs. I ensure that client
                    requests are processed smoothly, internal server
                    communication runs without lag, and data is rendered back to
                    the user fast and securely.
                  </p>
                </div>
              </div>
            </ScrollFadeUp>
          </div>
        </div>
      </div>
      <div className="tech-stack-container flex flex-col gap-y-7 py-27 box-border">
        <div className="tech-stack-heading flex flex-col gap-y-5">
          <ScrollFadeUp>
            <span className="text-gray-200/70 text-[11.5px] tracking-[3.5px] uppercase">
              Current Tech Stack
            </span>
          </ScrollFadeUp>
          <div className="intro-text-container flex flex-col gap-y-3">
            <ScrollFadeUp>
              <span className="text-white font-bold text-4xl xl:text-5xl tracking-tighter capitalize">
                The Tools & Technologies I use to bring ideas to life
              </span>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <p className="text-gray-100/80 leading-6 text-justify text-[15.5px] xl:text-lg xl:w-3/4">
                To build seamless web applications, I leverage a modern stack
                focused on performance, scalability, and security. Here are the
                core technologies and tools I actively use to develop from front
                to back:
              </p>
            </ScrollFadeUp>
          </div>
        </div>
        <ScrollFadeUp>
          <div className="tech-stack-categorization grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-300/10 rounded-2xl p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-5 animate-slideDown hover:border-gray-100/30 hover:bg-gray-600/30 hover:animate-slideUp">
              <div className="flex flex-col gap-y-2">
                <span className="text-white text-lg tracking-tight font-semibold capitalize">
                  Frontend Development
                </span>
                <span className="text-[13.5px] text-gray-200/70">
                  Crafting responsive, dynamic, and visually stunning user
                  interfaces.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    HTML5
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    CSS3
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Javascript (ES6+)
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    React JSX
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-gray-300/10 rounded-2xl p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-5 animate-slideDown hover:border-gray-100/30 hover:bg-gray-600/30 hover:animate-slideUp">
              <div className="flex flex-col gap-y-2">
                <span className="text-white text-lg tracking-tight font-semibold capitalize">
                  Backend Development
                </span>
                <span className="text-[13.5px] text-gray-200/70">
                  Engineering secure, fast, and scalable server-side systems and
                  databases.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    PHP
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Nodejs
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Express
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    RESTful APIs
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    MongoDB
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    PostgreSQL
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-100/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-gray-300/10 rounded-2xl p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-5 animate-slideDown hover:border-gray-100/30 hover:bg-gray-600/30 hover:animate-slideUp">
              <div className="flex flex-col gap-y-2">
                <span className="text-white text-lg tracking-tight font-semibold capitalize">
                  Tools & Ecosystem
                </span>
                <span className="text-[13.5px] text-gray-200/70">
                  Ensuring smooth workflows, version control, and efficient
                  development
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl p-3 box-border border border-gray-200/10  hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Git & GitHub
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-200/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Postman
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-200/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    Figma
                  </span>
                </div>
                <div className="rounded-3xl p-3 box-border border border-gray-200/10 hover:border-gray-100/30 hover:bg-gray-600/30 transition duration-500 ease-out bg-gray-800/80 grayscale-50 flex items-center justify-center">
                  <span className="text-white text-[13.5px] capitalize">
                    XAMPP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
      <div className="my-journey-container flex flex-col gap-y-5 py-27 box-border">
        <div className="my-journey-heading flex flex-col gap-y-5 lg:pb-5 xl:pb-10 box-border">
          <ScrollFadeUp>
            <span className="text-gray-200/70 text-[11.5px] tracking-[3.5px] uppercase">
              My Journey
            </span>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <span className="text-white font-bold text-4xl xl:text-5xl tracking-tighter capitalize">
              From Pixels to Pipelines | My Full-Stack Evolution
            </span>
          </ScrollFadeUp>
        </div>
        <div className="my-journey-content flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-15 lg:gap-x-25">
            <div className="md:w-1/2 xl:w-2/3">
              <ScrollFadeUp>
                <div className="p-3 box-border border border-gray-200/10 rounded-2xl grayscale bg-gray-900/80">
                  <img
                    src="/Andrew-Journey/journey-paragraph1.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </ScrollFadeUp>
            </div>
            <div className="md:w-1/2">
              <ScrollFadeUp>
                <p className="text-gray-200/70 text-[13.5px] sm:text-[14.5px] xl:text-lg leading-6 xl:leading-7 text-end">
                  My entry into the digital world began when I was managing
                  online storefronts on major marketplaces like Shopee and
                  Tokopedia to expand my parents' business. However, as
                  marketplace administration and service fees kept rising, I
                  realized that relying solely on third-party platforms was
                  unsustainable and created too much dependency. To solve this,
                  I set out to build our own independent e-commerce website—a
                  move to secure our brand’s digital longevity and eliminate
                  heavy commission cuts. That strategic pivot was my gateway
                  into the world of web development.
                </p>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-15 lg:gap-x-25">
            <div className="md:w-1/2 md:order-2 xl:w-2/3">
              <ScrollFadeUp>
                <div className="p-3 box-border border border-gray-200/10 rounded-2xl grayscale bg-gray-900/80">
                  <img
                    src="/Andrew-Journey/journey-paragraph2.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </ScrollFadeUp>
            </div>
            <div className="md:w-1/2">
              <ScrollFadeUp>
                <p className="text-gray-200/70 text-[13.5px] sm:text-[14.5px] xl:text-lg leading-6 xl:leading-7">
                  My fascination with the web began with visuals. I loved seeing
                  how clean lines, thoughtful layouts, and great typography
                  could transform a blank screen into an engaging digital space.
                  However, as I built more frontend interfaces, I found myself
                  constantly asking: “What happens behind the scenes when a user
                  clicks this button?”
                </p>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-15 lg:gap-x-25">
            <div className="md:w-1/2 xl:w-2/3">
              <ScrollFadeUp>
                <div className="p-3 box-border border border-gray-200/10 rounded-2xl grayscale bg-gray-900/80">
                  <img
                    src="/Andrew-Journey/journey-paragraph3.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </ScrollFadeUp>
            </div>
            <div className="md:w-1/2">
              <ScrollFadeUp>
                <p className="text-gray-200/70 text-[13.5px] sm:text-[14.5px] xl:text-lg xl:leading-7 leading-6 text-end">
                  That curiosity pushed me deeper into the world of backend
                  engineering. I realized that a truly great website isn't just
                  about beautiful pixels; it’s about the silent engine that
                  powers it. I fell in love with the logic of data—designing
                  databases, managing server states, and ensuring secure
                  communication between the client and internal systems.
                </p>
              </ScrollFadeUp>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-15 lg:gap-x-25">
            <div className="md:w-1/2 md:order-2 xl:w-2/3">
              <ScrollFadeUp>
                <div className="p-3 box-border border border-gray-200/10 rounded-2xl grayscale bg-gray-900/80">
                  <img
                    src="/Andrew-Journey/journey-paragraph4.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </ScrollFadeUp>
            </div>
            <div className="md:w-1/2">
              <ScrollFadeUp>
                <p className="text-gray-200/70 text-[13.5px] sm:text-[14.5px] leading-6 xl:text-lg xl:leading-7">
                  Today, I focus entirely on mastering Full Stack Web
                  Development. I thrive on the challenge of taking a project
                  from an empty canvas, building its visual frontend,
                  engineering its data pipelines, and delivering a complete,
                  high-performing web application.
                </p>
              </ScrollFadeUp>
            </div>
          </div>
        </div>
      </div>
      <div className="beyond-code-container flex flex-col gap-y-5 pt-27 pb-10 box-border">
        <div className="beyond-code-heading flex flex-col gap-y-5">
          <ScrollFadeUp>
            <span className="text-gray-200/70 text-[11.5px] tracking-[3.5px] uppercase">
              Beyond the code
            </span>
          </ScrollFadeUp>
        </div>
        <div className="intro-text-container flex flex-col gap-y-3 pb-5 box-border">
          <ScrollFadeUp>
            <span className="text-white font-bold text-4xl xl:text-5xl tracking-tighter capitalize">
              When I’m Not Staring at a Code Editor...
            </span>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <p className="text-gray-100/80 leading-6 text-justify text-[15.5px] xl:text-lg xl:w-3/4">
              I believe that a great developer is shaped by their experiences
              outside of technology. When I am not writing functions or
              optimization queries, you can usually find me:
            </p>
          </ScrollFadeUp>
        </div>
        <ScrollFadeUp>
          <div className="beyond-code-content grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-3 xl:gap-5">
            <div className="border border-gray-200/10 rounded-2xl p-3 sm:p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-3">
              <CiShop className="text-3xl text-gray-100/80 mx-auto" />
              <span className="text-white font-semibold text-[16.5px] tracking-tighter">
                E-Commerce Optimization
              </span>
              <p className="text-gray-200/70 text-[13.5px] xl:text-[15px]">
                Actively managing Shopee and Tokopedia stores to maintain brand
                credibility and sales.
              </p>
            </div>
            <div className="border border-gray-200/10 rounded-2xl p-3 sm:p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-3">
              <PiCoffeeLight className="text-3xl text-gray-100/80 mx-auto" />
              <span className="text-white font-semibold text-[16.5px] tracking-tighter">
                Coffee Brewing
              </span>
              <p className="text-gray-200/70 text-[13.5px] xl:text-[15px]">
                Exploring specialty coffee beans and brewing methods to
                kickstart my daily brainstorming.
              </p>
            </div>
            <div className="border border-gray-200/10 rounded-2xl p-3 sm:p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-3">
              <IoMusicalNoteOutline className="text-3xl text-gray-100/80 mx-auto" />
              <span className="text-white font-semibold text-[16.5px] tracking-tighter">
                Music Curation
              </span>
              <p className="text-gray-200/70 text-[13.5px] xl:text-[15px]">
                Getting lost in synthwave and lo-fi beats to stay focused while
                coding.
              </p>
            </div>
            <div className="border border-gray-200/10 rounded-2xl p-3 sm:p-5 box-border bg-gray-900/80 grayscale flex flex-col gap-y-3">
              <IoWalkOutline className="text-3xl text-gray-100/80 mx-auto" />
              <span className="text-white font-semibold text-[16.5px] tracking-tighter">
                Staying Active
              </span>
              <p className="text-gray-200/70 text-[13.5px] xl:text-[15px]">
                Unplugging with quick outdoor walks or light workouts to
                recharge my mental battery.
              </p>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
      <ScrollFadeUp>
        <div className="cta-button-container pb-20 box-border">
          <div className="cta-content p-5 lg:p-8 box-border border border-gray-200/10 bg-gray-900/80 grayscale rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-y-5">
            <div className="flex flex-col gap-y-5 md:w-1/2 lg:w-3/6">
              <span className="text-3xl text-white tracking-tight font-bold">
                Like how this reads?
              </span>
              <span className="text-gray-200/70 text-[14.5px] lg:text-[15.5px] xl:text-lg">
                The next case study could be yours.{" "}
                <a
                  className="text-gray-100/90 underline underline-offset-2"
                  href="mailto:andrew17288@gmail.com"
                  target="_blank"
                >
                  andrew17288@gmail.com
                </a>
              </span>
            </div>
            <a href="/contact" className="md:w-1/2 md:flex md:justify-end">
              <button className="bg-white text-black hover:bg-gray-200/80 p-4 box-border rounded-full flex items-center justify-center gap-x-5 w-full md:w-3/5 cursor-pointer transition duration-300 ease-out lg:w-2/4 xl:w-3/8">
                Start a Project
                <FiArrowUpRight />
              </button>
            </a>
          </div>
        </div>
      </ScrollFadeUp>
    </>
  );
}

export default AboutPage;
