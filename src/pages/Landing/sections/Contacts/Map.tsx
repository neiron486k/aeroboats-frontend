import { LatLngExpression } from 'leaflet';
import React, { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './Map.css';

const position: LatLngExpression = [60.026297, 32.304855];

const Map: FC = () => {
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '100%' }}
      attributionControl={false}
    >
      <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Производство аэролодок</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
