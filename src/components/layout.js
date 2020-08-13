import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import Header from "./header"
import "../styles/site.css"

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
        className="bg-green-900 w-full"
        style={{
          margin: `0 auto`,
          // maxWidth: 1060,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="bg-green-900">{children}</main>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-12 bg-green-900">
        <footer className="container-xl px-8 mx-auto w-full bg-green-900">
          © {new Date().getFullYear()}
          {` `}
          GPH Equestrian{" "}
          <a href="https://www.instagram.com/gphequestrian/" target="_blank">
            {" "}
            <FaInstagram size={28} />
          </a>
          <a href="https://www.facebook.com/gphequine" target="_blank">
            {" "}
            <FaFacebook size={28} />{" "}
          </a>
          <a
            href="https://infallible-franklin-71e6b4.netlify.app"
            target="_blank"
            className="flex float-right"
          >
            Created By DAO
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
