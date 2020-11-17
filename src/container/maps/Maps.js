import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 43.552713,
    lng: 7.002396
};

export default class Maps extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
            <Marker 
                position = {center}
            />
        </GoogleMap>
      </LoadScript>
    )
  }
}

