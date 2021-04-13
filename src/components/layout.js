import React from "react"
import Nav from "./nav"
import "../styles/site.css"

//todo figure out nav bar error.

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
