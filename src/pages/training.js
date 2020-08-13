import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const trainingPage = () => (
  <Layout>
    <SEO title="Training" />
    <div className="flex flex-col justify-center items-center bg-red-900">
      <h1 className="text-white flex justify-center text-4xl">
        2020 Price List
      </h1>
      <hr />
      <div>
        <h2 className="text-white text-3xl pt-12">Lessons</h2>
        <hr />
        <p className="text-white text-xl">45 Minute Lesson - $50</p>
        <br />
        <p className="text-white text-xl"> Group Jump Lesson - $45</p>
      </div>
      <div className="text-white text-3xl pt-12">
        <h2>Training</h2>
        <hr />
        <p className="text-white text-xl">Single Training Ride - $50</p>
        <br />
        <p className="text-white text-xl">
          Part Time Training (no lessons, 2 rides per week) - $300
        </p>
        <br />
        <p className="text-white text-xl">
          Full Time Training (no lessons, 4 rides per week) - $500
        </p>
        <br />
        <p className="text-white text-xl">
          Part Time Package (2 lessons per week, 2 training rides per month) -
          $400
        </p>
        <br />
        <p className="text-white text-xl">
          Full Time Package (3 lessons per week, 4 training rides per month) -
          $550
        </p>
      </div>
      <div className="text-white text-3xl pt-12">
        <h2>Other</h2>
        <hr />
        <p className="text-white text-xl">
          Cross Country Schooling (group only) - $50
        </p>
        <p className="text-white text-xl pt-12">
          Trailering - 50 cents per mile, min($40)
        </p>
        <p className="text-white text-xl pt-12">Show Coaching - $50 per day</p>
        <p className="text-white text-xl pt-12 pb-32">
          Buying or Selling Commission - 10% of purchase price{" "}
        </p>
      </div>
    </div>
  </Layout>
)

export default trainingPage
