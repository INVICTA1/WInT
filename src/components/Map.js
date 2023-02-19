import React from 'react'
import { MapContainer, TileLayer, ZoomControl, Marker, Popup  } from 'react-leaflet'
import MainPageRequest from "../components/MainPageRequest"
import L from 'leaflet';
import marker from '../icons/marker.png';
import markerShadow from '../icons/markershadow.png';

function Map({itemData}){
    const myIcon = new L.Icon({
        iconUrl: marker,
        shadowUrl: markerShadow,
      
        iconSize:     [38, 57], // size of the icon
        shadowSize:   [42, 50], // size of the shadow
        iconAnchor:   [22, 55], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 50],  // the same for the shadow
        popupAnchor:  [-3, -56]     
      });
  return (
    <div style={{height: "85vh", width: "100%"}}>
      <MapContainer 
        center={[53.904397, 27.555946]} 
        zoom={11} 
        zoomControl={false} 
        style={{ height: '85vh', width: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {itemData.workData.map((item) =>
            <Marker position={item.position} icon={myIcon}>
              <Popup maxWidth="400">
                <MainPageRequest item={item} style={{width:"100%"}}/>
              </Popup>
            </Marker>
          )}
        <ZoomControl position='bottomleft'/>
      </MapContainer>
    </div>
  )
}

export default Map