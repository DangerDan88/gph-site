import React, { useState } from "react"
import { Link } from "gatsby"
import onClickOutside from "react-onclickoutside"

const ToggleDrop = () => {
  const [toggled, toggle] = useState(false)
  ToggleDrop.handleClickOutside = () => toggle(false)
  return (
    <li>
      {" "}
      <div className="shadow-lg">
        {" "}
        {toggled && (
          <div className="absolute bg-white py-2 rounded-lg shadow-xl mt-16">
            {" "}
            <Link
              to="/sales"
              className="block text-xl px-4 py-2 hover:bg-gray-300"
            >
              {" "}
              Sales/Lease{" "}
            </Link>{" "}
            <Link
              to="/locations"
              className="block text-xl px-4  py-2 hover:bg-green-700"
            >
              Locations
            </Link>
            <Link
              to="/training"
              className="block text-xl px-4 py-2 hover:bg-green-700"
            >
              Training/Services
            </Link>
            <Link
              to="/events"
              className="block text-xl px-4 py-2 hover:bg-green-700"
            >
              Events
            </Link>{" "}
          </div>
        )}{" "}
        <button
          onClick={() => toggle(toggled => !toggled)}
          className="block h-8 w-8"
          to="/services"
          className="text-white text-2xl lg:p-4 py-3 px-0 block hover:bg-green-700"
        >
          {" "}
          Services{" "}
        </button>{" "}
      </div>{" "}
    </li>
  )
}

ToggleDrop.prototype = {}

const clickOutsideConfig = {
  handleClickOutside: () => ToggleDrop.handleClickOutside,
}

export default onClickOutside(ToggleDrop, clickOutsideConfig)
