import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";
import {
  HiClipboardDocumentCheck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { Link } from "react-router";
import { ScrollFadeUp } from "./ScrollFadeUp";

export const Footer = () => {
  const textContact = `Hallo Andrew 👋`;
  const encodedText = encodeURIComponent(textContact);

  const [showPopUp, setShowPopUp] = useState(false);

  const handleCopyText = async () => {
    const textMail = `andrew17288@gmail.com`;

    try {
      await navigator.clipboard.writeText(textMail);
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="border-t border-gray-300/30 relative">
      <div className="absolute -top-32 w-80 left-1/2 sm:w-130 md:w-140 lg:w-165 h-80 xl:w-180 -translate-x-1/2 rounded-full bg-linear-to-tr from-neutral-500 to-stone-300 opacity-[0.1] blur-2xl z-10"></div>
      <div className="pt-27 pb-20 box-border px-5 md:w-6/7 mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:items-center lg:justify-between pb-20 box-border">
          <div className="flex flex-col gap-y-8 lg:w-3/6">
            <ScrollFadeUp>
              <span className="text-gray-200/70 text-[13.5px] tracking-[2.5px] uppercase">
                CONTACT
              </span>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold tracking-tighter block w-3/5 lg:w-full">
                Have a project in mind?
              </span>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <span className="text-[14.5px] lg:text-lg text-gray-300/80 leading-6 sm:w-3/5">
                Looking for a dedicated developer to join your team or
                collaborate on a project? Let’s get in touch!
              </span>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="button-container flex flex-col sm:flex-row sm:gap-x-3 sm:items-center sm:justify-between gap-y-3">
                <div className="w-3/5 ">
                  <button className="bg-white p-3 box-border flex items-center justify-center gap-x-2 rounded-full hover:bg-gray-100/80 cursor-pointer transition duration-500 ease-in-out w-full">
                    <span>Start a Project</span>
                    <FiArrowUpRight className="text-xl" />
                  </button>
                </div>
                <div className="w-3/4">
                  <button
                    className="bg-gray-700/30 border border-gray-300/50 text-white p-3 box-border flex items-center justify-center gap-x-2 rounded-full cursor-pointer transition duration-500 ease-in-out w-full hover:bg-gray-700/50"
                    onClick={handleCopyText}
                  >
                    {showPopUp ? (
                      <HiClipboardDocumentCheck />
                    ) : (
                      <HiOutlineClipboardDocument />
                    )}
                    <span>andrew17288@gmail.com</span>
                  </button>
                </div>
                {showPopUp && (
                  <div className="fixed top-0 z-30 sm:-top-20 left-1/2 -translate-x-1/2 w-50 bg-black border border-gray-300/50 text-white text-[13.5px] p-2 box-border flex items-center gap-x-3 rounded-lg opacity-0 animate-scrollFadeDown">
                    <FaCircleCheck />
                    <span>Email copied to clipboard</span>
                  </div>
                )}
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div className="bg-gray-800/50 border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                  <FaInstagram className="text-gray-200/70 group-hover:text-white" />
                  <span className="text-white font-medium">Instagram</span>
                  <span className="text-sm text-gray-300/80">andrew_1165</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                  <FiLinkedin className="text-gray-200/70 group-hover:text-white" />
                  <span className="text-white font-medium">LinkedIn</span>
                  <span className="text-sm text-gray-300/80">andrew.</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                  <FaWhatsapp className="text-gray-200/70 group-hover:text-white" />
                  <span className="text-white font-medium">Whatsapp</span>
                  <span className="text-sm text-gray-300/80">
                    0822 1099 0298
                  </span>
                </div>
              </div>
            </ScrollFadeUp>
          </div>
          <div className="lg:w-2/5">
            <ScrollFadeUp>
              <form onSubmit={handleSubmit} className="form-container bg-gray-900/80 grayscale border border-gray-500/30 rounded-2xl p-8 box-border">
                <div className="form-heading-container pb-5 box-border">
                  <span className="text-gray-300/50 text-[13.5px] tracking-[3.5px] uppercase">
                    PROJECT INQUIRY
                  </span>
                </div>
                <div className="form-field-container flex flex-col gap-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="block w-full border border-gray-500/30 placeholder:text-gray-100/50 bg-gray-800/50 rounded-2xl p-3 box-border"
                  />
                  <div className="flex flex-col gap-y-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="block w-full border border-gray-500/30 placeholder:text-gray-100/50 bg-gray-800/50 rounded-2xl p-3 box-border focus:placeholder:text-white focus:text-white peer"
                    />
                    <span className="hidden peer-invalid:block peer-invalid:text-pink-500 mt-2 peer-invalid:animate-shake">Email format is not valid</span>
                  </div>
                  <textarea
                    name="projectDesc"
                    id="projectDesc"
                    rows={5}
                    className="block w-full border border-gray-500/30 placeholder:text-gray-100/50 bg-gray-800/50 rounded-2xl p-3 box-border"
                    placeholder="Tell me about your project"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full rounded-full p-3 box-border bg-white text-black hover:bg-gray-100/80 transition duration-500 ease-in-out cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </ScrollFadeUp>
          </div>
        </div>
        <div className="border-t border-gray-300/30 pt-10 box-border">
          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:justify-between">
            <ScrollFadeUp>
              <span className="text-lg font-bold uppercase text-primary">
                ANDREW
              </span>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <nav className="text-gray-300/50">
                <ul className="flex items-center gap-x-3 lg:gap-x-5 xl:gap-x-8">
                  <li>
                    <Link
                      className="hover:text-gray-100/70 transition duration-500 ease-out"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-gray-100/70 transition duration-500 ease-out"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-gray-100/70 transition duration-500 ease-out"
                      to="/projects"
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-gray-100/70 transition duration-500 ease-out"
                      to="/blogs"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-gray-100/70 transition duration-500 ease-out"
                      to={`https://wa.me/6282210990298?text=${encodedText}`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <span className="text-[14.5px] font-medium text-gray-200/50">
                &copy; 2026 Andrew. All Rights Reserved
              </span>
            </ScrollFadeUp>
          </div>
        </div>
      </div>
    </div>
  );
};
