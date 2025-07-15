'use client';
import React from 'react';
import { LoadScript } from '@react-google-maps/api';

interface MapProviderProps {
  children: React.ReactNode;
}

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={['places']} // Add libraries you need
    >
      {children}
    </LoadScript>
  );
};

export default MapProvider;