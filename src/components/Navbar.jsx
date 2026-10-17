import { useState } from "react"
import { NavLink } from "react-router"
import {RxHamburgerMenu} from "react-icons/rx"

export const Navbar = () => {
    const textContact = `Hallo Andrew 👋`
    const encodedText = encodeURIComponent(textContact)

    const [responsiveNav, setResponsiveNav] = useState(false)

    return (
      <div className="fixed top-0 left-0 right-0 z-20 bg-black text-white p-8 box-border">
        <div className="w-10/11 mx-auto flex justify-between items-center">
          <div className="navbar-title-container font-bold">
            <span className="text-primary text-2xl selection:bg-primary selection:text-white">
              ANDREW.
            </span>
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
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                  >
                    Blog
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
        {responsiveNav && (
          <div className="navbar-menu-container w-10/11 mx-auto py-5">
            <nav>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
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
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-primary text-primary font-bold underline-offset-5"
                        : "font-semibold hover:text-primary transition duration-500 ease-in-out bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent"
                    }
                  >
                    Blog
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
        )}
      </div>
    );
}