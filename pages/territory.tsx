import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  People as PeopleIcon, // Use People icon for Clients
  Settings as SettingsIcon,
  BrightnessHigh as BrightnessHighIcon,
} from '@mui/icons-material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';

const mapContainerStyle = { height: '100%', width: '100%' };

const center = { lat: 51.0447, lng: -114.0719 }; // Coordinates for Calgary, Alberta

const mapOptions = {
  mapTypeId: 'satellite',
  mapTypeControl: false,
};

// Lazy load Google Maps only when the component is rendered
const GoogleMapWithOverlay = dynamic(() => import('../components/GoogleMapWithOverlay'), {
  ssr: false, // Ensures that Google Maps is only loaded on the client side
});

const TerritoryPage = () => {
  const [value, setValue] = useState(2); // Set to 2 to show "Territory" by default
  const [showSolar, setShowSolar] = useState(false);
  const [showMap, setShowMap] = useState(false); // Toggle to load map
  const router = useRouter();

  const toggleSolar = () => {
    setShowSolar(!showSolar);
  };

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/stats');
        break;
      case 1:
        router.push('/calendar');
        break;
      case 2:
        setShowMap(true); // Load the map when navigating to the Territory page
        router.push('/territory');
        break;
      case 3:
        router.push('/clients'); // Navigate to Clients page
        break;
      case 4:
        router.push('/settings');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0 }}>
        <Toolbar className="toolbar">
          <div className="logo-section">
            <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={100} height={30} />
          </div>
          <div className="title-section">
            <Typography variant="h6" className="title">
              Territory
            </Typography>
          </div>
          <div className="spacer-section"></div>
        </Toolbar>
      </AppBar>

      <div className="map-container">
        {showMap && (
          <GoogleMapWithOverlay
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
            options={mapOptions}
            showSolar={showSolar}
          />
        )}
      </div>

      <div className="floating-buttons">
        <IconButton
          style={{ backgroundColor: showSolar ? '#00ffd4' : '#CCCCCC' }}
          onClick={toggleSolar}
        >
          <BrightnessHighIcon style={{ color: 'white' }} />
        </IconButton>
      </div>

      <BottomNavigation
        value={value} // Controls which tab is highlighted
        onChange={handleNavigationChange}
        showLabels
        style={{ backgroundColor: '#00ffd4', position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigationAction label="Stats" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="Territory" icon={<PublicIcon />} />
        <BottomNavigationAction label="Clients" icon={<PeopleIcon />} /> {/* Clients tab */}
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
        }

        .logo-section {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .title-section {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .spacer-section {
          flex: 1;
        }

        .title {
          font-weight: bold;
          color: white;
        }

        .map-container {
          position: relative;
          flex-grow: 1;
          background-color: #00ffd4;
        }

        .floating-buttons {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
        }

        .floating-buttons button {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default TerritoryPage;
