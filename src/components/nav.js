import { Link } from "gatsby"
import React from "react"
import ToggleDrop from "../components/toggleDrop"
import { FaBars } from "react-icons/fa"

const nav = ({ data }) => (
  <div className="lg:px-16 px-6 flex justify-center bg-black sm:flex-wrap sm:items-center">
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
      <FaBars className="bg-white cursor-pointer fill-current text-gray-900 w-6 h-6" />
    </label>
    <input id="menu-toggle" type="checkbox" className="hidden" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0 shadow-lg">
          <li>
            {" "}
            <Link
              className="text-white text-2xl border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-red-700 hover:border-red-700 shadow-lg"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              className="text-white text-2xl border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-red-700 hover:border-red-700 shadow-lg"
            >
              About Us{" "}
            </Link>
          </li>
          <ToggleDrop />
          <li>
            {" "}
            <Link
              className="text-white text-2xl border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-red-700 hover:border-red-700"
              to="/contact/"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default nav
