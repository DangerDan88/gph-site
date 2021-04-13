import { Link } from "gatsby"
import React from "react"

const nav = () => (
  <nav
    id="nav"
    className="flex text-white text-xl justify-center items-center sm:w-full"
  >
    <div className="px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="sm:block">
            <div className="flex space-x-4 text-white">
              <Link
                activeStyle={{
                  color: "gray",
                  fontWeight: 700,
                }}
                to="/"
              >
                Home
              </Link>

              <Link
                activeStyle={{
                  color: "gray",
                  fontWeight: 700,
                }}
                to="/about"
              >
                About Us
              </Link>

              <Link
                activeStyle={{
                  color: "gray",
                  fontWeight: 700,
                }}
                to="/contact/"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default nav
