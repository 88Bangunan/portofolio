import { useState } from "react";
import { checkEmailFormat } from "../utils/checkEmailFormat";
import { Link } from "react-router";
import { ScrollFadeUp } from "./ScrollFadeUp";
import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";
import { HiClipboardDocumentCheck, HiOutlineClipboardDocument } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const initialProject = {
    name: "",
    email: "",
    description: ""
}

export const Footer = () => {
  const textContact = `Hallo Andrew 👋`;
  const encodedText = encodeURIComponent(textContact);

  const emailTextSubject = `Inquiry: [Nama Proyek/Kolaborasi Baru] — [Nama Anda]`;
   const encodedSubject = encodeURIComponent(emailTextSubject)

   const emailTextBody = `Halo Andrew,\n\nSaya [Nama Anda / Perusahaan Anda] tertarik untuk mendiskusikan sebuah proyek dengan Anda.\n\nBerikut adalah ringkasan singkatnya:\n- Jenis proyek: [Contoh: Website Redesign / Mobile App / Branding]\n- Perkiraan waktu/deadline: [Contoh: 1 bulan ke depan]\n- Deskripsi singkat: [Tuliskan detail kebutuhan Anda di sini]\n\nAnda bisa menghubungi saya kembali melalui email ini atau nomor WhatsApp: [Nomor HP/WA Anda - opsional].\n\nTerima kasih!`;
   const encodedBody = encodeURIComponent(emailTextBody)

  const [showPopUp, setShowPopUp] = useState(false);

  const [projectInquiry, setProjectInquiry] = useState(initialProject)

  const [error, setError] = useState({})

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

  const handleError = () => {
    const newErrors = {}

    if(projectInquiry.name.trim().length <= 0) newErrors.name = "Name can't be empty"

    if(projectInquiry.email.trim().length <= 0) newErrors.email = "Email can't be empty"
    else if(!checkEmailFormat(projectInquiry.email.trim())) newErrors.email = "Email format is not valid"

    if(projectInquiry.description.trim().length <= 0) newErrors.description = "Please fill in project description field"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validate = handleError()
    setError(validate)
    if(Object.keys(validate).length > 0) return

    const encodedText = encodeURIComponent(`Hi Andrew, i'm interested to discuss a project with you. Below is my information\n\nName: ${projectInquiry.name}\n\nEmail: ${projectInquiry.email}\n\nAbout project: ${projectInquiry.description}`)

    window.location.href = `https://wa.me/6282210990298?text=${encodedText}` 
    setProjectInquiry(initialProject)
  }

  const handleChange = (e) => {
    const {name, value} = e.target 

    setError({...error, [name]: ""})

    setProjectInquiry({
        ...projectInquiry,
        [name]: value
    })
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
                <div className="w-3/5">
                  <a
                    href={`mailto:andrew17288@gmail.com?subject=${encodedSubject}&body=${encodedBody}`}
                  >
                    <button className="bg-white p-3 box-border flex items-center justify-center gap-x-2 rounded-full hover:bg-gray-100/80 cursor-pointer transition duration-500 ease-in-out w-full">
                      <span>Start a Project</span>
                      <FiArrowUpRight className="text-xl" />
                    </button>
                  </a>
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
                <a href="https://instagram.com/andrew_1165" target="_blank">
                  <div className="bg-gray-800/50 grayscale border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                    <FaInstagram className="text-gray-200/70 group-hover:text-white" />
                    <span className="text-white font-medium">Instagram</span>
                    <span className="text-sm text-gray-300/80">
                      andrew_1165
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-webdev"
                  target="_blank"
                >
                  <div className="bg-gray-800/50 grayscale border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                    <FiLinkedin className="text-gray-200/70 group-hover:text-white" />
                    <span className="text-white font-medium">LinkedIn</span>
                    <span className="text-sm text-gray-300/80">andrew.</span>
                  </div>
                </a>
                <a
                  href={`https://wa.me/6282210990298?text=${encodedText}`}
                  target="_blank"
                >
                  <div className="bg-gray-800/50 grayscale border border-gray-300/20 rounded-2xl p-5 box-border flex flex-col gap-y-3 group hover:drop-shadow-md hover:drop-shadow-gray-300/80 cursor-pointer transition duration-75 ease-out animate-slideDown hover:animate-slideUp">
                    <FaWhatsapp className="text-gray-200/70 group-hover:text-white" />
                    <span className="text-white font-medium">Whatsapp</span>
                    <span className="text-sm text-gray-300/80">
                      0822 1099 0298
                    </span>
                  </div>
                </a>
              </div>
            </ScrollFadeUp>
          </div>
          <div className="lg:w-2/5">
            <ScrollFadeUp>
              <form
                onSubmit={handleSubmit}
                className="form-container bg-gray-900/80 grayscale border border-gray-500/30 rounded-2xl p-8 box-border"
              >
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
                    value={projectInquiry.name}
                    onChange={handleChange}
                    className="block w-full border border-gray-500/30 placeholder:text-gray-100/50 focus:placeholder:text-white focus:text-white bg-gray-800/50 text-gray-100/70 rounded-2xl p-3 box-border"
                  />
                  {error.name && (
                    <span className="text-gray-100/80 text-[14.5px] animate-shake">
                      {error.name}
                    </span>
                  )}
                  <div className="flex flex-col gap-y-2">
                    <input
                      type="email"
                      name="email"
                      value={projectInquiry.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="block w-full border text-gray-100/70 border-gray-500/30 placeholder:text-gray-100/50 bg-gray-800/50 rounded-2xl p-3 box-border focus:placeholder:text-white focus:text-white peer"
                    />
                    <span className="hidden peer-invalid:block peer-invalid:text-pink-500 mt-2 peer-invalid:animate-shake">
                      Email format is not valid
                    </span>
                    {error.email && (
                      <span className="text-gray-100/80 text-[14.5px] animate-shake">
                        {error.email}
                      </span>
                    )}
                  </div>
                  <textarea
                    name="description"
                    id="description"
                    rows={5}
                    value={projectInquiry.description}
                    onChange={handleChange}
                    className="block w-full border border-gray-500/30 text-gray-100/70 placeholder:text-gray-100/50 focus:placeholder:text-white focus:text-white bg-gray-800/50 rounded-2xl p-3 box-border"
                    placeholder="Tell me about your project"
                  ></textarea>
                  {error.description && (
                    <span className="text-gray-100/80 text-[14.5px] animate-shake">
                      {error.description}
                    </span>
                  )}
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
                      to="/project"
                    >
                      Project
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
