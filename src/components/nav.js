import { Link } from "gatsby"
import React from "react"

const nav = () => (
  <nav className="flex justify-center bg-black text-white">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center"></div>
          <div className=" sm:block sm:ml-6">
            <div className="flex space-x-4 text-white">
              <Link to="/">Home</Link>

              <Link to="/about">About Us </Link>

              <Link to="/contact/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default nav
