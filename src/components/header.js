import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GPH from "../images/gphlogo.jpg"
import { FaBars } from "react-icons/fa"
import toggleDrop from "./toggleDrop"

const Header = ({ siteTitle }) => (
  <header className="bg-green-900">
    <div className="lg:px-16 px-6 flex flex-wrap items-center">
      <div className="flex-1 flex justify-between items-center">
        {" "}
        <img
          src={GPH}
          alt="logo"
          height="325px"
          width="200px"
          className="rounded-lg"
        />
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <FaBars className="bg-white cursor-pointer fill-current text-gray-900 w-6 h-6" />
      </label>
      <input id="menu-toggle" type="checkbox" className="hidden" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 shadow-lg">
            <li>
              {" "}
              <Link
                className="text-white border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-700 shadow-lg"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="/about"
                className="text-white border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-700 shadow-lg"
              >
                About Us{" "}
              </Link>
            </li>
            <toggleDrop />
            <li>
              {" "}
              <Link
                className="text-white border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-700"
                to="/contact/"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
