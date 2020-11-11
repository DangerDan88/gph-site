import React from "react"
import Nav from "../components/nav"
//import { graphql, StaticQuery } from "gatsby"
import HeaderImage from "./HeaderImage"
import GPH from "../images/gphlogo.jpg"

export default function Header() {
  return (
    <header className="bg-black">
      <div id="imageWrap">
        <HeaderImage />
      </div>
      <div className="flex justify-center">
        {" "}
        <img src={GPH} className="logo" alt="logo" />
      </div>
      <div className="flex justify-center">
        <Nav />
      </div>
    </header>
  )
}
