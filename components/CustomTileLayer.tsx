// components/CustomTileLayer.tsx
import { useEffect } from 'react';
import { useGoogleMap } from '@react-google-maps/api';

interface CustomTileLayerProps {
  url: string;
  opacity?: number;
}

const CustomTileLayer: React.FC<CustomTileLayerProps> = ({ url, opacity = 1 }) => {
  const map = useGoogleMap();

  useEffect(() => {
    if (map) {
      const tileLayer = new google.maps.ImageMapType({
        getTileUrl: (coord, zoom) => {
          return url
            .replace('{x}', coord.x.toString())
            .replace('{y}', coord.y.toString())
            .replace('{z}', zoom.toString());
        },
        tileSize: new google.maps.Size(256, 256),
        opacity: opacity,
      });

      map.overlayMapTypes.insertAt(0, tileLayer);

      return () => {
        map.overlayMapTypes.removeAt(0);
      };
    }
  }, [map, url, opacity]);

  return null;
};

export default CustomTileLayer;
