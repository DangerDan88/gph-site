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
          fluid(maxWidth: 1300, maxHeight: 600) {
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
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-cover bg-center">
              <Img fixed={data.sponsor.childImageSharp.fixed} alt="sponsor" />
            </div>
          </div>
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-cover bg-center">
              <Img
                fixed={data.sponsorPic.childImageSharp.fixed}
                alt="sponsor"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-cover bg-center">
              <Img fixed={data.sponsor3.childImageSharp.fixed} alt="sponsor" />
            </div>
          </div>
        </div>
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
