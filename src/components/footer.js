import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//import Sponsor from "../components/sponsor"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
//TODO fix sponsor images they are fuzzy on render time rip out unused template from default gatsby template

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      jumperGatsbyImage: file(relativePath: { eq: "main.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sponsor: file(relativePath: { eq: "sponsor1.jpg" }) {
        childImageSharp {
          fixed(height: 150, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sponsorPic: file(relativePath: { eq: "sponsor2.jpg" }) {
        childImageSharp {
          fixed(height: 150, width: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sponsor3: file(relativePath: { eq: "sponsor3.jpg" }) {
        childImageSharp {
          fixed(height: 450, width: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer className="bg-gray-700">
      <div className="bg-gray-700">
        {" "}
        <a href="https://www.instagram.com/gphequestrian/">
          <FaInstagram size={28} />
        </a>
        <a href="https://www.facebook.com/gphequine">
          {" "}
          <FaFacebook size={28} />{" "}
        </a>
        <Img
          fluid={data.jumperGatsbyImage.childImageSharp.fluid}
          alt="footer jump"
          style={{ height: "65vh" }}
        />
        © {new Date().getFullYear()}
        {` `}
        GPH Equestrian{" "}
        <a
          href="https://infallible-franklin-71e6b4.netlify.app"
          className="flex float-right"
        >
          Created By DAO
        </a>
      </div>
    </footer>
  )
}

export default Footer
