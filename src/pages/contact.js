import React from "react"
import { FaPhone } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"
//TODO on click of email send to default email form for user
const contactPage = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg" id="contact">
      <h1 className="text-white flex justify-center text-4xl font-bold">
        Contact Us
      </h1>
      <div className="max-w-3xl bg-black text-white text-2xl rounded-lg shadow-lg mx-auto my-16 p-16">
        <div className="flex justify-center py-4">
          <FaPhone size={28} /> 801-822-4011
        </div>
        <div className="flex justify-center">
          <FaEnvelopeSquare size={28} />{" "}
          <a href="mailto:gphequestrian@gmail.com">gphequestrian@gmail.com</a>
        </div>
        <div className="flex justify-center py-4">By Appointment Only</div>
      </div>
    </div>
  )
}

export default contactPage
