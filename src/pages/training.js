import React from "react"

const trainingPage = () => {
  return (
    <div className="w-1/2">
      <h1 className="text-white flex justify-center text-4xl pt-3 font-bold">
        Training/Services
      </h1>
      <div className="w-1/2 min-h-screen flex items-center">
        <div className="flex-1 max-w-4xl mx-auto p-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Group Jump Lesson
                <br />
                <p className="text-lg">$45</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Private Lesson
                <br />
                <p className="text-lg">$50 (45min)</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Single Training Ride
                <br />
                <p className="text-lg">$50</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Part Time Training (no lessons, 2 rides per week) <br />
                <p className="text-lg">$300</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Full Time Training (no lessons, 4 rides per week) <br />
                <p className="text-lg">$500</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Part Time Package (2 lessons per week, 2 training rides per
                month)
                <br />
                <p className="text-lg">$400</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Full Time Package (3 lessons per week, 4 training rides per
                month) <br />
                <p className="text-lg">$550</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Cross Country Schooling (group only) <br />
                <p className="text-lg">$50</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Trailering <br />
                <p className="text-lg">50 cents per mile, min($40)</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Show Coaching <br />
                <p className="text-lg">$50</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Buying or Selling <br />
                <p className="text-lg">10% of purchase price</p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-xl">
              <div className="h-32 text-center text-xl">
                Stud Finder <br />
                <p className="text-lg">Price is tentative</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default trainingPage
