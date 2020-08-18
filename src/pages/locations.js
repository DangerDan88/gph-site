import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const mapStyles = {
  width: "50%",
  height: "50%",
  margin: "auto",
  width: "50%",
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Locations" />
        <div className="container">
          <div className="flex justify-center">
            {" "}
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{
                lat: 40.658301,
                lng: -111.823746,
              }}
            >
              <Marker onClick={this.onMarkerClick} name={"Fox Stables"} />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </Layout>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_API_KEY,
})(MapContainer)
