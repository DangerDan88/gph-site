import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import Header from "./header"
import "../styles/site.css"
//TODO add layout to gatsby browser file so i do not need to wrap every page in layout component
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="bg-gray-700 w-full"
        style={{
          margin: `0 auto`,
          // maxWidth: 1060,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="bg-gray-700">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
