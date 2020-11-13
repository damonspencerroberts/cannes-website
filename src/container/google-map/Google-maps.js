import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Maps from "./Map/Map";

class Map extends Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    };
  
    render() {
      return (
         <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
          <Maps 
            lat={59.955413} 
            lng={30.337844} 
            text={'Kreyser Avrora'} 
          />
        </GoogleMapReact>
      );
    }
  }

const ExportMap = () => {
    return(
        <div style={{width: '100%', height: '400px'}}>
            <Map/>
        </div>
    );
}

export default ExportMap;
