import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({ children, ...props }:{children:any}) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBMQE4eM11BGEzzztszxAIYTv57anp1714",
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </div>
  )
}

export default Map