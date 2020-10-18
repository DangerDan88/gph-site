import React from "react"
import Nav from "../components/nav"
import { graphql, StaticQuery } from "gatsby"
import GPH from "../images/gphlogo.jpg"
//import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          headerImage: file(relativePath: { eq: "headerImageGph.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 550, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          <BackgroundImage
            className=""
            id="mainPic"
            fluid={data.headerImage.childImageSharp.fluid}
          >
            <div className="flex justify-center pt-3">
              <img
                src={GPH}
                alt="logo"
                height="250px"
                width="125px"
                className="rounded-lg"
              />
            </div>
          </BackgroundImage>
          <Nav />
        </header>
      )}
    />
  )
}
