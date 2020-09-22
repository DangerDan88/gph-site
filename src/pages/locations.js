import React from "react"
//import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const locationsPage = () => (
  <Layout>
    <SEO title="Locations" />
    <div className="p-16">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        <div className="bg-white overflow-hidden hover:bg-red-900 border border-gray-200 p-3">
          <div className="m-2 text-justify text-sm">
            <h2 className="font-bold text-lg h-2 mb-8">Fox Stables</h2>
            <p className="text-xs"></p>
          </div>
          <div className="w-full text-right mt-4">
            <a
              className="bg-black border-4 border-white py-3 px-6 uppercase  font-bold text-white rounded-full shadow-lg hover:border-red-300"
              href="https://www.google.com/maps/place/5100+Cottonwood+Ln,+Holladay,+UT+84117/@40.6585501,-111.8255576,17z/data=!3m1!4b1!4m5!3m4!1s0x8752623ae8a80fcd:0x88e5babbdd8b88c4!8m2!3d40.6585501!4d-111.8233689"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden hover:bg-red-900 border border-gray-200 p-3">
          <div className="m-2 text-justify text-sm">
            <h2 className="font-bold text-lg h-2 mb-8">The Red Barn </h2>
            <p className="text-xs"></p>
          </div>
          <div className="w-full text-right mt-4">
            <a
              className="bg-black border-4 border-white py-3 px-6 uppercase  font-bold text-white rounded-full shadow-lg hover:border-red-300"
              href="https://www.google.com/mapshttps://www.google.com/maps/place/13976+S+2055+W,+Riverton,+UT+84065/@40.4972938,-111.947591,17z/data=!3m1!4b1!4m5!3m4!1s0x875286aedafb8895:0x32695e9218bd6ac0!8m2!3d40.4972938!4d-111.9454023/place/+Cottonwood+Ln,+Holladay,+UT+84117/@40.6585501,-111.8255576,17z/data=!3m1!4b1!4m5!3m4!1s0x8752623ae8a80fcd:0x88e5babbdd8b88c4!8m2!3d40.6585501!4d-111.8233689"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden hover:bg-red-900 border border-gray-200 p-3">
          <div className="m-2 text-justify text-sm">
            <h2 className="font-bold text-lg h-2 mb-8">Pegasus Farm </h2>
            <p className="text-xs"></p>
          </div>
          <div className="w-full text-right mt-4">
            <a
              href="https://www.google.com/mapshthttps://www.google.com/maps/place/2912+Cedar+Dr,+Eagle+Mountain,+UT+84005/@40.3655093,-111.9904506,17z/data=!3m1!4b1!4m5!3m4!1s0x874d7dad59cef567:0x71419c32e721bb79!8m2!3d40.3655093!4d-111.9882619tps://whttps://www.google.com/maps/place/5879+W+10400+N,+Highland,+UT+84003/@40.4204994,-111.8012734,17z/data=!3m1!4b1!4m5!3m4!1s0x874d80f214547643:0x58ef93b0ba764f1f!8m2!3d40.4204994!4d-111.7990847ww.google.com/maps/place/13976+S+2055+W,+Riverton,+UT+84065/@40.4972938,-111.947591,17z/data=!3m1!4b1!4m5!3m4!1s0x875286aedafb8895:0x32695e9218bd6ac0!8m2!3d40.4972938!4d-111.9454023/place/+Cottonwood+Ln,+Holladay,+UT+84117/@40.6585501,-111.8255576,17z/data=!3m1!4b1!4m5!3m4!1s0x8752623ae8a80fcd:0x88e5babbdd8b88c4!8m2!3d40.6585501!4d-111.8233689"
              className="bg-black border-4 border-white py-3 px-6 uppercase  font-bold text-white rounded-full shadow-lg hover:border-red-300"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden hover:bg-red-900 border border-gray-200 p-3">
          <div className="m-2 text-justify text-sm">
            <h2 className="font-bold text-lg h-2 mb-8">Rydemore Equestrian </h2>
            <p className="text-xs"></p>
          </div>
          <div className="w-full text-right mt-4">
            <a
              href="https://www.google.com/mapshttps://whttps://www.google.com/maps/place/5879+W+10400+N,+Highland,+UT+84003/@40.4204994,-111.8012734,17z/data=!3m1!4b1!4m5!3m4!1s0x874d80f214547643:0x58ef93b0ba764f1f!8m2!3d40.4204994!4d-111.7990847ww.google.com/maps/place/13976+S+2055+W,+Riverton,+UT+84065/@40.4972938,-111.947591,17z/data=!3m1!4b1!4m5!3m4!1s0x875286aedafb8895:0x32695e9218bd6ac0!8m2!3d40.4972938!4d-111.9454023/place/+Cottonwood+Ln,+Holladay,+UT+84117/@40.6585501,-111.8255576,17z/data=!3m1!4b1!4m5!3m4!1s0x8752623ae8a80fcd:0x88e5babbdd8b88c4!8m2!3d40.6585501!4d-111.8233689"
              className="bg-black border-4 border-white py-3 px-6 uppercase  font-bold text-white rounded-full shadow-lg hover:border-red-300"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default locationsPage
