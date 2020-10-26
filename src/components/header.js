import React from "react"
import Nav from "../components/nav"
import { graphql, StaticQuery } from "gatsby"
import GPH from "../images/gphlogo.jpg"
//import BackgroundImage from "gatsby-background-image"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          headerImage: file(relativePath: { eq: "laniHome.JPG" }) {
            childImageSharp {
              fluid(maxHeight: 1500, maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          headerLogo: file(relativePath: { eq: "gphlogo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          <div className="flex justify-center bg-black pt-3">
            <img src={GPH} className="logo" alt="logo" />
          </div>
          <Nav />
        </header>
      )}
    />
  )
}

//<BackgroundImage
//className=""
//id="mainPic"
//fluid={data.headerImage.childImageSharp.fluid}
//>
//</BackgroundImage>
//
