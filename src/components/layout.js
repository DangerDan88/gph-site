import React from "react"
import Footer from "../components/footer"
import Header from "./header"
import "../styles/site.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-700 w-full">
        <main className="bg-gray-700">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
