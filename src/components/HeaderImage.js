import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "headergph.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const image = placeholderImage.childImageSharp
  return <Img fluid={image.fluid} />
}
export default HeaderImage
