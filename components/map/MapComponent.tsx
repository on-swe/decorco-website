'use client';
import React from 'react';

interface MapEmbedComponentProps {
  address?: string;
  coordinates?: { lat: number; lng: number };
  width?: string;
  height?: string;
  zoom?: number;
  mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
  className?: string;
}

const MapComponent: React.FC<MapEmbedComponentProps> = ({
  address,
  coordinates = { lat: 30.039006093769316, lng: 31.431469510114844 },
  width = "100%",
  height = "400px",
  zoom = 12,
  mapType = 'roadmap',
  className = ""
}) => {
  // Build the embed URL
  const baseUrl = 'https://www.google.com/maps/embed/v1/place';
  
  let embedUrl: string;
  
  if (address) {
    embedUrl = `${baseUrl}?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  } else {
    // For coordinates without API key, use the basic embed
    embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.2!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(coordinates.lat + ',' + coordinates.lng)}!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg&z=${zoom}`;
  }

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Maps"
      />
    </div>
  );
};

export default MapComponent;