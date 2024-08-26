import { GoogleMap, LoadScript, GroundOverlay } from '@react-google-maps/api';

const GoogleMapWithOverlay = ({ mapContainerStyle, center, zoom, options, showSolar }) => {
  console.log('Google Map Loaded'); // Debugging

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
      >
        {showSolar && (
          <GroundOverlay
            url="URL_TO_YOUR_SOLAR_OVERLAY_IMAGE"
            bounds={{
              north: 51.2047,
              south: 50.8847,
              east: -113.9119,
              west: -114.2319,
            }}
            opacity={0.6}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapWithOverlay;
