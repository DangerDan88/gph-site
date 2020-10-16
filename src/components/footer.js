import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      jumperGatsbyImage: file(relativePath: { eq: "main.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer>
      <div className="bg-gray-700">
        {" "}
        <a href="https://www.instagram.com/gphequestrian/">
          {" "}
          <FaInstagram size={28} />
        </a>
        <a href="https://www.facebook.com/gphequine">
          {" "}
          <FaFacebook size={28} />{" "}
        </a>
        <Img
          fluid={data.jumperGatsbyImage.childImageSharp.fluid}
          alt="footer jump"
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