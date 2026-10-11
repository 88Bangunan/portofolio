import { IoDocumentText } from "react-icons/io5";
import {FaArrowRight, FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa"
import Marquee from "react-fast-marquee"
import { OfferCarousel } from "./OfferCarousel";

function HomePage() {

    return (
      <>
        <div className="hero-container flex flex-col gap-y-5 text-white box-border">
          <div className="md:flex md:justify-between xl:h-160 md:gap-x-15 lg:gap-x-30">
            <div className="hero-heading flex flex-col md:justify-between gap-y-3 md:w-1/2 xl:w-2/3">
              <div className="flex flex-col gap-y-1">
                <span className="text-4xl lg:text-7xl xl:text-8xl font-bold text-shadow-2xs text-shadow-violet-500 leading-[0.9]">
                  ANDREW
                </span>
                <div className="font-medium flex flex-col text-gray-300 text-xl leading-[1.05]">
                  <span className="leading">Full Stack</span>
                  <span>Web Developer</span>
                </div>
              </div>
              <div className="md:flex flex-col gap-y-5">
                <span className="hidden md:block md:text-[10px] lg:text-[11px] xl:text-[12px] uppercase text-gray-300/80 tracking-widest">
                  Front End Web Developer • Back End Web Developer • Full Stack
                  Developer
                </span>
                <div className="hidden md:flex profile-overview-description py-3 box-border flex-col gap-y-2">
                  <div className="flex items-center justify-between text-center gap-x-3">
                    <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                    <div className="flex flex-col text-gray-40/80 text-md italic text-base/6">
                      <span className="capitalize">More than just looks</span>
                      <span className="capitalize">
                        I build living web systems
                      </span>
                    </div>
                    <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                  </div>
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
                </div>
                <div className="hidden md:flex hero-cta-btn flex-col gap-y-5 py-5 box-border">
                  <button className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-4/5 xl:w-6/7 bg-gray-500/20 grayscale border rounded-sm border-gray-100/20 p-3 box-border flex justify-center items-center gap-x-3 font-semibold hover:bg-gray-500/30 cursor-pointer transition duration-500 ease-in-out shadow-xl shadow-gray-500/20 hover:shadow-gray-500/30">
                    View Projects
                    <FaArrowRight />
                  </button>
                  <a
                    href="https://flowcv.com/resume/oescwq9ki922"
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
              </div>
            </div>
            <div className="hero-image pt-5 box-border md:pt-0 flex flex-col gap-y-5 md:w-1/2">
              <div className="image-outer-container border border-gray-500/30 md:h-full rounded-4xl shadow-xl p-4 box-border grayscale contrast-120 bg-gray-700/50">
                <img
                  src="/profile-andrew.jpeg"
                  className="w-full aspect-4/5 object-cover h-full contrast-120 rounded-4xl drop-shadow-xl drop-shadow-gray-500/50"
                  alt=""
                />
              </div>
              <span className="text-sm uppercase line-clamp-2 text-gray-300/80 md:hidden">
                Full Stack Web Developer • E-commerce specialist • Database
                Administrator
              </span>
              <div className="profile-overview-description py-3 box-border flex flex-col gap-y-2 md:hidden">
                <div className="flex items-center justify-between text-center gap-x-3">
                  <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                  <div className="flex flex-col text-gray-40/80 text-md italic text-base/6">
                    <span className="capitalize">More than just looks</span>
                    <span className="capitalize">
                      I build living web systems
                    </span>
                  </div>
                  <hr className="w-1/6 rounded-xl border-2 border-gray-400" />
                </div>
                <p className="text-gray-50/80 text-base/6">
                  I'm a person who has a keen interest in building / developing
                  an application specifically in a web application. I think
                  delivering a great web application requires an intuitive user
                  interface and a robust backend system. That is why i enjoy the
                  process of being a Full Stack Web Developer by designing
                  engaging UI/UX while simultaneously architecting how data
                  flows seamlessly between the client and the database
                </p>
              </div>
            </div>
          </div>
          <div className="hero-cta-btn flex flex-col gap-y-5 py-5 box-border md:hidden">
            <button className="w-3/4 sm:w-1/2 bg-gray-500/20 grayscale border rounded-sm border-gray-100/20 p-3 box-border flex justify-center items-center gap-x-3 font-semibold hover:bg-gray-500/30 cursor-pointer transition duration-500 ease-in-out shadow-xl shadow-gray-500/20 hover:shadow-gray-500/30">
              View Projects
              <FaArrowRight />
            </button>
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
              className="border-t border-gray-300/30 border-b p-0 text-gray-300/30 uppercase py-5 flex items-center gap-x-3 box-border text-xl"
              pauseOnClick={true}
              speed={30}
              gradient={true}
              gradientWidth={20}
              gradientColor={"black"}
            >
              Front End Web Developer • Back End Web Developer • Full Stack Web
              Developer • E-Commerce Specialist • Database Administrator •
            </Marquee>
          </div>
        </div>
        <OfferCarousel />
      </>
    );
}

export default HomePage