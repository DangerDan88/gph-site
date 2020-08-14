import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const mapStyles = {
  width: "75%",
  height: "75%",
}

export class MapContainer extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Locations" />
        <div className="flex justify-center">
          {" "}
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: -1.2884,
              lng: 36.8233,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: APIKEY,
})(MapContainer)
