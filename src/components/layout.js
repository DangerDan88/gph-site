import React from "react"
import Footer from "../components/footer"
import Header from "./header"
import "../styles/site.css"
//TODO add layout to gatsby browser file so i do not need to wrap every page in layout component
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-gray-700 w-full">
        <main className="bg-gray-700">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
