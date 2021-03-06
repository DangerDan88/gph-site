import React from "react"
import {
  FaFacebook,
  FaEnvelopeSquare,
  FaInstagram,
  FaPhone,
} from "react-icons/fa"
import { Link } from "gatsby"

//todo get rid of whitespace and make mobile

const indexPage = ({ data }) => {
  return (
    <div className="bg-gray-900">
      <main className="max-w-xs md:max-w-4xl xl:max-w-6xl mx-auto py-4 flex flex-col min-h-screen text-white">
        <div
          className="flex flex-col justify-between items-center bg-gray-900 sm:w-full"
          id="main"
        >
          <div className="pt-16 z-10 md:max-w-4xl">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              <span className="text-red-800">G</span>
              <span className="text-green-700">P</span>
              <span className="text-red-800 pr-2">H</span>
              Equestrian
            </h1>
            <p className="text-2xl">
              Lani Taylor, the founder of GPH Equestrian, is actively committed
              to riding, training, coaching, and competing horses in
              Hunter/Jumpers, Eventing, and Dressage.
            </p>
            <div className="pt-12">
              <Link
                to="/about"
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="bottom-0 absolute text-center right-0 left-0 flex justify-center space-x-4">
            <span className="pt-48">
              <a href="https://www.facebook.com/gphequine">
                <FaFacebook size={32} />
              </a>
            </span>
            <span className="pt-48">
              <a href="https://www.instagram.com/gphequestrian/">
                <FaInstagram size={32} />
              </a>
            </span>
            <span className="pt-48">
              <FaEnvelopeSquare size={28} />
            </span>
          </div>
        </div>
      </main>
      <div className="flex justify-center md:pr-5 bg-white ">
        <h1 className="text-4xl font-bold text-black ">Training/Services</h1>
      </div>
      <div className="w-full bg-white px-5 py-10 text-gray-600 md:max-w-full">
        <div className="max-w-full md:flex">
          <div className="md:w-1/4 md:flex md:flex-col"></div>
          <div>
            <div className="max-w-3xl md:flex">
              <div className="w-full bg-white md:px-10 md:py-10 mb-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Group Jump Lesson
                  </h2>
                  <h3 className="text-center font-bold text-4xl mb-5">
                    $35<span className="text-sm">/per</span>
                  </h3>
                </div>
              </div>
              <div className="w-full bg-white  md:px-10 py-8 md:py-10 mb-3 md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Private Lesson
                  </h2>
                  <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                    $50<span className="text-sm">/45min</span>
                  </h3>
                </div>
              </div>
              <div className="w-full bg-white  md:px-10 py-8 md:py-10 mb-3 md:my-2 rounded-md shadow-lg shadow-gray-600">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Single Training Ride
                  </h2>
                  <h3 className="text-center font-bold text-4xl mb-5">
                    $50<span className="text-sm">/per</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-3xl md:flex">
              <div className="w-full bg-white md:px-10 md:py-10 mb-3 rounded-md shadow-lg shadow-gray-600 md:flex">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Group Jump Lesson
                  </h2>
                  <h3 className="text-center font-bold text-4xl mb-5">
                    $35<span className="text-sm">/per</span>
                  </h3>
                </div>
              </div>
              <div className="w-full bg-white  md:px-10 py-8 md:py-10 mb-3 md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Private Lesson
                  </h2>
                  <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                    $50<span className="text-sm">/45min</span>
                  </h3>
                </div>
              </div>
              <div className="w-full bg-white  md:px-10 py-8 md:py-10 mb-3 md:my-2 rounded-md shadow-lg shadow-gray-600">
                <div className="w-full flex-grow">
                  <h2 className="text-center font-bold uppercase mb-4">
                    Single Training Ride
                  </h2>
                  <h3 className="text-center font-bold text-4xl mb-5">
                    $50<span className="text-sm">/per</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-2xl rounded-lg shadow-lg p-16">
        <div className="flex justify-center py-4">
          <FaPhone size={28} /> 801-822-4011
        </div>
        <div className="flex justify-center">
          <FaEnvelopeSquare size={28} />
          <a href="mailto:gphequestrian@gmail.com">gphequestrian@gmail.com</a>
        </div>
        <div className="flex justify-center py-4">By Appointment Only</div>
      </div>
    </div>
  )
}

export default indexPage
