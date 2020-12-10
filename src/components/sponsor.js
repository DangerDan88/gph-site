import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Sponsor = () => {
  const data = useStaticQuery(graphql`
    query {
      sponsor: file(relativePath: { eq: "sponsor1.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 125, maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sponsorPic: file(relativePath: { eq: "sponsor2.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 150, maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sponsor3: file(relativePath: { eq: "sponsor3.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 125, maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="flex items-center">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {" "}
          <li className="rounded-lg">
            <div className="h-auto">
              {" "}
              <Img fluid={data.sponsor.childImageSharp.fluid} alt="sponsor" />
            </div>
          </li>
          <li className="rounded-lg">
            <div className="h-auto">
              {" "}
              <Img
                fluid={data.sponsorPic.childImageSharp.fluid}
                alt="sponsor"
              />
            </div>
          </li>
          <li className="rounded-lg bg-cover bg-center">
            <div className="h-auto">
              {" "}
              <Img fluid={data.sponsor3.childImageSharp.fluid} alt="sponsor" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sponsor
