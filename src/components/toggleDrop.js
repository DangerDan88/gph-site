import React, { useState } from "react"
import { Link } from "gatsby"
import onClickOutside from "react-onclickoutside"

const ToggleDrop = () => {
  const [toggled, toggle] = useState(false)

  ToggleDrop.handleClickOutside = () => toggle(false)

  return (
    <li>
      <div className="shadow-lg">
        {toggled && (
          <div className="absolute bg-white py-2 rounded-lg shadow-xl mt-16">
            <Link
              to="/sales"
              className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
            >
              Sales/Lease
            </Link>
            <Link
              to="/locations"
              className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
            >
              Locations
            </Link>
            <Link
              to="/training"
              className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
            >
              Training/Services
            </Link>
            <Link
              to="/events"
              className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
            >
              Events
            </Link>
          </div>
        )}{" "}
        <button
          onClick={() => toggle(toggled => !toggled)}
          className="block h-8 w-8"
          to="/services"
          className="text-white border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-700"
        >
          Services
        </button>
      </div>
    </li>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => ToggleDrop.handleClickOutside,
}

export default onClickOutside(ToggleDrop, clickOutsideConfig)
