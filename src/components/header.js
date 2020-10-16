import React from "react"
import Nav from "../components/nav"
import { graphql, StaticQuery } from "gatsby"
import GPH from "../images/gphlogo.jpg"
import Img from "gatsby-image"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          headerImage: file(relativePath: { eq: "headerImageGph.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1450, maxHeight: 600, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          <div className="bg-black">
            {" "}
            <Img Tag="section" fluid={data.headerImage.childImageSharp.fluid} />
            <div className="h-32 flex justify-center">
              <img
                src={GPH}
                alt="logo"
                height="250px"
                width="125px"
                className="rounded-lg"
              />
            </div>
          </div>
          <Nav />
        </header>
      )}
    />
  )
}
