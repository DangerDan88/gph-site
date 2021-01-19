import React from "react"
//import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const locationsPage = () => {
  return (
    <div>
      <h1 className="flex justify-center pt-3 text-4xl text-white font-bold">
        Locations
      </h1>
      <div className="bg-gray-700">
        <div className="max-w-3xl bg-gray-700 text-white text-2xl rounded-lg mx-auto my-16">
          <div className="flex justify-center py-4 bg-black">
            <div className="m-2 text-justify text-2xl font-bold">
              Fox Stables
            </div>
          </div>
          <div className="flex justify-center bg-black">
            <a
              href="https://www.google.com/maps/place/5124+Cottonwood+Ln,+Salt+Lake+City,+UT+84117/@40.6581022,-111.8259355,17z/data=!3m1!4b1!4m5!3m4!1s0x8752623afc8f4695:0xc508f13e93b3ab5a!8m2!3d40.6580982!4d-111.8237415"
              target="_blank"
              rel="noreferrer"
              className="bg-green-900 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded"
            >
              Directions
            </a>
          </div>
          <div className="flex justify-center py-4 bg-black">
            <h2 className="font-bold text-2xl h-2 mb-8">Rydemore</h2>
          </div>
          <div className="flex justify-center bg-black">
            <a
              href="https://goo.gl/maps/yPg7BvyoS4MPhenH7"
              target="_blank"
              rel="noreferrer"
              className="bg-green-900 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded"
            >
              Directions
            </a>
          </div>
          <div className="flex justify-center py-4 bg-black">
            <h2 className="font-bold text-2xl h-2 mb-8">The Red Barn </h2>
            <p className="text-xs"></p>
          </div>
          <div className="flex justify-center bg-black pb-3">
            <a
              href="https://goo.gl/maps/v8r8iN1PRk6ahasj9"
              target="_blank"
              rel="noreferrer"
              className="bg-green-900 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default locationsPage
