import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import CustomMarker from './costomMarker'

export default function Map() {
  return (
    <MapContainer center={[51.0132329, 11.070978892]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker position={[51.0132329, 11.070978892]}>
        <Popup>
          This is a popup
        </Popup>
        </CustomMarker>
    </MapContainer>
  );
}