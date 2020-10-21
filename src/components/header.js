import React from "react"
import Nav from "../components/nav"
import { graphql, StaticQuery } from "gatsby"
import GPH from "../images/gphlogo.jpg"
import BackgroundImage from "gatsby-background-image"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          headerImage: file(relativePath: { eq: "headerImageGph.jpg" }) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
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
          <BackgroundImage
            className=""
            id="mainPic"
            fluid={data.headerImage.childImageSharp.fluid}
          >
            <div className="flex justify-end pt-3">
              <img src={GPH} className="logo" alt="logo" />
            </div>
          </BackgroundImage>
          <Nav />
        </header>
      )}
    />
  )
}
