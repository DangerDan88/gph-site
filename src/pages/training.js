import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const trainingPage = () => (
  <Layout>
    <SEO title="Training" />
    <div id="menu" className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-black">2020 Price List</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center bg-red-900 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h3 className="font-semibold text-black text-3xl">Lessons</h3>
            <p className="text-2xl">Group Jump Lesson</p>
            <p2 className="text-xl">$45</p2>
          </div>
          <div className="col-span-2 sm:col-span-1 xl:col-span-1 italic "></div>

          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h3 className="font-semibold text-black text-3xl">Training</h3>
            <p className="text-2xl">Single Training Ride</p>
            <p2 className="text-xl">$50</p2>
            <p className="text-2xl">
              Part Time Training (no lessons, 2 rides per week)
            </p>
            <p2 className="text-xl">$300</p2>
            <p className="text-xl">
              Full Time Training (no lessons, 4 rides per week)
            </p>
            <p2 className="text-xl">$500</p2>
            <p className="text-2xl">
              Part Time Package (2 lessons per week, 2 training rides per month)
            </p>
            <p2 className="text-xl">$400</p2>
            <p className="text-2xl">
              Full Time Package (3 lessons per week, 4 training rides per month)
            </p>
            <p2 className="text-xl">$550</p2>
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h3 className="font-semibold text-black text-3xl">Other</h3>
            <p className="text-2xl">Cross Country Schooling (group only)</p>
            <p2 className="text-xl">$50</p2>
            <p className="text-2xl">Trailering</p>
            <p2 className="text-xl">50 cents per mile, min($40)</p2>
            <p className="text-2xl">Show Coaching</p>
            <p2 className="text-xl">$50</p2>
            <p className="text-2xl">Buying or Selling Commission</p>
            <p2 className="text-xl">10% of purchase price</p2>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
//look into tailwind multiple classes fix
export default trainingPage
