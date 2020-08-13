import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaPhone } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="bg-red-900 p-4 rounded-lg" id="contact">
      <h1 className="text-white flex justify-center text-4xl"> Contact Us </h1>
      <div className="max-w-3xl bg-green-900 text-white text-2xl rounded-lg mx-auto my-16 p-16 border-solid border-4 border-red-900">
        <div className="flex justify-center py-4">
          <FaPhone size={28} /> 801-822-4011
        </div>
        <div className="flex justify-center">
          {" "}
          <FaEnvelopeSquare size={28} /> gphequestrian@gmail.com
        </div>
      </div>
    </div>
  </Layout>
)

export default contactPage
