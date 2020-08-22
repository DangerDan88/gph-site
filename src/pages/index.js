import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import mainJump from "../images/mainjump.jpg"

const indexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="p-4 bg-red-900 rounded-lg">
      <main class="flex flex-col-reverse sm:flex-row justify-between items-center py-12">
        <div class="bg-red-900 sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 class="uppercase text-6xl text-white font-bold leading-none tracking-wide mb-2">
            GPH
          </h1>
          <h2 class="uppercase text-4xl text-white text-secondary tracking-widest mb-6">
            Equestrian
          </h2>
          <p class="text-white text-2xl leading-relaxed mb-12">
            Lani Taylor, the founder of GPH Equestrian, is actively committed to
            riding, training, coaching, and competing horses in Hunter/Jumpers,
            Eventing, and Dressage. Lani enjoys teaching and training horses as
            well as riders of all levels, from pleasure riders to advanced
            competitors both children and adults.
          </p>
          <Link
            to="/about"
            className="bg-black border-4 border-white py-3 px-6 uppercase text-lg font-bold text-white rounded-full shadow-lg hover:border-red-300"
          >
            Learn more
          </Link>
        </div>
        <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:max-w-sm sm:pl-12">
          {" "}
          <img
            className="w-full h-64 mx-auto rounded-lg"
            src={mainJump}
            alt="logo"
          />
        </div>
      </main>
    </div>
  </Layout>
)

export default indexPage
