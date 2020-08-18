import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const salesPage = () => (
  <Layout>
    <SEO title="Sales" />
    <div className="flex justify-center">
      <h1 className="text-white text-4xl">Sales/Leases</h1>
    </div>
    <div className="flex justify-center">
      {" "}
      <p className="text-white text-xl pt-6">None Currently Available</p>
    </div>
  </Layout>
)

export default salesPage
