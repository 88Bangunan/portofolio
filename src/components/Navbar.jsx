import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router"
import {RxHamburgerMenu} from "react-icons/rx"

export const Navbar = () => {
    const textContact = `Hallo Andrew 👋`
    const encodedText = encodeURIComponent(textContact)
    const ref = useRef(null)

    const [responsiveNav, setResponsiveNav] = useState(false)

    useEffect(() => {
      if(responsiveNav) {
        ref.current.classList.remove('hidden')
        if(ref.current.className.includes('animate-slideUpHidden')) ref.current.classList.remove('animate-slideUpHidden')
        ref.current.classList.add('animate-slideDownShow')
      }
      
      if(!responsiveNav && ref.current.className.includes("animate-slideDownShow")) {
        ref.current.classList.remove('hidden')
        ref.current.classList.remove('animate-slideDownShow')
        ref.current.classList.add('animate-slideUpHidden')
      }

    }, [responsiveNav])

    return (
      <div className="fixed top-0 left-0 right-0 z-40 bg-black text-white p-8 box-border">
        <div className="w-10/11 mx-auto flex justify-between items-center">
          <div className="navbar-title-container font-bold">
            <a href="/">
              <span className="text-primary text-2xl selection:bg-primary selection:text-white">
                ANDREW.
              </span>
            </a>
          </div>
          <div className="navbar-menu-container hidden md:block">
            <nav>
              <ul className="flex items-center gap-x-8">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <a
                    href={`https://wa.me/6282210990298?text=${encodedText}`}
                    target="_blank"
                  >
                    <button className="bg-transparent border border-primary rounded-sm p-2 box-border text-primary font-semibold cursor-pointer hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary transition duration-500 ease-in-out">
                      Contact Me
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <RxHamburgerMenu
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setResponsiveNav(!responsiveNav)}
          />
        </div>
        
          <div ref={ref} className={`navbar-menu-container h-screen absolute top-15 left-0 right-0 bg-black opacity-0 hidden text-3xl mx-auto py-30 px-8 box-border`}>
            <nav>
              <ul className="flex flex-col gap-y-5">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                    reloadDocument
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <a
                    href={`https://wa.me/6282210990298?text=${encodedText}`}
                    target="_blank"
                  >
                    <button className="bg-transparent border border-primary rounded-sm p-2 box-border text-primary font-semibold cursor-pointer hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary transition duration-500 ease-in-out">
                      Contact Me
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        
      </div>
    );
}