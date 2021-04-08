import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import { FaFacebook, FaEnvelopeSquare, FaInstagram } from "react-icons/fa"

const indexPage = ({ data }) => {
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="flex w-full bg-no-repeat bg-cover items-center bg-black"
        id="main"
      >
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            <span className="text-red-800">G</span>
            <span className="text-green-700">P</span>
            <span className="text-red-800 pr-2">H</span>
            Equestrian
          </h1>
          <p className="text-2xl my-4">
            Lani Taylor, the founder of GPH Equestrian, is actively committed to
            riding, training, coaching, and competing horses in Hunter/Jumpers,
            Eventing, and Dressage.
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            <a href="https://www.facebook.com/gphequine">
              <FaFacebook size={32} />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/gphequestrian/">
              <FaInstagram size={32} />
            </a>
          </span>
          <span>
            {" "}
            <FaEnvelopeSquare size={28} />
          </span>
        </div>
      </div>
    </section>
  )
}

export default indexPage

export const query = graphql`
  query {
    mainjumpGatsbyImage: file(relativePath: { eq: "mainjump.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
