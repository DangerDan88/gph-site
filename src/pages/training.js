import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const trainingPage = () => (
  <Layout>
    <SEO title="Training" />
    <h1 className="text-white flex justify-center text-4xl pt-3">
      Training/Lessons
    </h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {" "}
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Group Jump Lesson
            </div>
            <div className="title-post font-medium pt-2">$45</div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Private Lesson
            </div>
            <div className="title-post font-medium pt-2">$50 (45 min)</div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Single Training Ride
            </div>
            <div className="title-post font-medium pt-2">$50</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Part Time Training (no lessons, 2 rides per week)
            </div>
            <div className="title-post font-medium pt-2">$300</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Full Time Training (no lessons, 4 rides per week){" "}
            </div>
            <div className="title-post font-medium pt-2">$500</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Part Time Package (2 lessons per week, 2 training rides per month)
            </div>
            <div className="title-post font-medium pt-2">$400</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Full Time Package (3 lessons per week, 4 training rides per month)
            </div>
            <div className="title-post font-medium pt-2">$550</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Cross Country Schooling (group only)
            </div>
            <div className="title-post font-medium pt-2">$50</div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">Trailering</div>
            <div className="title-post font-medium pt-2">
              50 cents per mile, min($40)
            </div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Show Coaching
            </div>
            <div className="title-post font-medium pt-2">$50 </div>
          </div>
        </div>
        <div className="pt-3 p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          {" "}
          <div className=" w-70 bg-white mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex text-xl">
              Buying or Selling Commission
            </div>
            <div className="title-post font-medium pt-2">
              10% of purchase price
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default trainingPage
