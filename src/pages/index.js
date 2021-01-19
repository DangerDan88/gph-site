import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import Img from "gatsby-image"
import {
  FaPhone,
  FaFacebook,
  FaEnvelopeSquare,
  FaInstagram,
} from "react-icons/fa"

const indexPage = ({ data }) => (
  <Layout>
    <div className="p-4 bg-gray-700 rounded-lg">
      <main className="flex flex-col-reverse sm:flex-row justify-between items-center py-12">
        <div className="bg-gray-700 sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="uppercase text-6xl text-white font-bold leading-none tracking-wide mb-2">
            GPH
          </h1>
          <h2 className="uppercase text-4xl font-bold text-white tracking-widest mb-6">
            Equestrian
          </h2>
          <p className="text-white text-2xl leading-relaxed mb-12">
            Lani Taylor, the founder of GPH Equestrian, is actively committed to
            riding, training, coaching, and competing horses in Hunter/Jumpers,
            Eventing, and Dressage. Lani enjoys teaching and training horses as
            well as riders of all levels, from pleasure riders to advanced
            competitors both children and adults.
          </p>
          <Link
            to="/about"
            className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-white hover:border-blue-500 rounded"
          >
            Learn more
          </Link>
        </div>
        <div className="mb-16 lg:max-w-lg lg:pr-20 lg:h-full sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:max-w-sm sm:pl-12">
          {" "}
          <Img
            fluid={data.mainjumpGatsbyImage.childImageSharp.fluid}
            alt="main jump picture"
          />
        </div>
      </main>
      <div className="max-w-3xl bg-black text-white text-2xl rounded-lg mx-auto my-16 p-16">
        <div className="flex justify-center py-4 rounded-lg shadow-lg">
          <FaPhone size={28} /> 801-822-4011
        </div>
        <div className="flex justify-center py-4">
          {" "}
          <FaEnvelopeSquare size={28} /> gphequestrian@gmail.com
        </div>
        <div className="flex justify-center py-4">
          <a href="https://www.instagram.com/gphequestrian/">
            {" "}
            <FaInstagram size={32} />
          </a>
        </div>
        <div className="flex justify-center py-4">
          {" "}
          <a href="https://www.facebook.com/gphequine">
            {" "}
            <FaFacebook size={32} />{" "}
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

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
