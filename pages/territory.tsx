import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Typography
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  CalendarToday as CalendarTodayIcon,
  Public as PublicIcon,
  Assessment as AssessmentIcon,
  NotificationsActive as NotificationsActiveIcon,
  BrightnessHigh as BrightnessHighIcon,
  Tune as TuneIcon
} from '@mui/icons-material';
import { GoogleMap, LoadScript, GroundOverlay } from '@react-google-maps/api';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import the useRouter hook

const mapContainerStyle = { height: '100%', width: '100%' };

const center = { lat: 51.0447, lng: -114.0719 }; // Coordinates for Calgary, Alberta

const mapOptions = {
  mapTypeId: 'satellite', // Set the map type to satellite
  mapTypeControl: false, // Disable the map type control
};

const TerritoryPage = () => {
  const [value, setValue] = useState(0);
  const [showSolar, setShowSolar] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const toggleSolar = () => {
    setShowSolar(!showSolar);
  };

  // Handle navigation based on the bottom navigation selection
  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1: // Calendar tab clicked
        router.push('/calendar'); // Navigate to the Calendar page
        break;
      case 0: // Stats tab clicked
        router.push('/stats'); // Example for navigating to a Stats page
        break;
      case 2: // Territory tab clicked (you are already on this page)
        break;
      case 3: // Activity tab clicked
        router.push('/activity'); // Example for navigating to an Activity page
        break;
      case 4: // Settings tab clicked
        router.push('/settings'); // Example for navigating to a Settings page
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <AppBar position="static" style={{ backgroundColor: '#00ffd4' }}>
        <Toolbar className="toolbar">
          <div className="logo-container">
            <div className="logo-wrapper">
              <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={30} height={30} />
            </div>
            <Typography variant="h6" className="title">
              Territory
            </Typography>
          </div>
          <div className="icons-container">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <TuneIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className="map-container">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
            options={mapOptions}
          >
            {showSolar && (
              <GroundOverlay
                url="URL_TO_YOUR_SOLAR_OVERLAY_IMAGE"
                bounds={{
                  north: 51.2047,
                  south: 50.8847,
                  east: -113.9119,
                  west: -114.2319
                }}
                opacity={0.6}
              />
            )}
          </GoogleMap>
        </LoadScript>

        <div className="floating-buttons">
          <IconButton
            style={{ backgroundColor: showSolar ? '#00ffd4' : '#CCCCCC' }}
            onClick={toggleSolar}
          >
            <BrightnessHighIcon style={{ color: 'white' }} />
          </IconButton>
        </div>

        <div className="status-bar">
          <IconButton variant="text">NI</IconButton>
          <IconButton variant="text">NH</IconButton>
          <IconButton variant="text">GL</IconButton>
          <IconButton variant="text">CB</IconButton>
          <IconButton variant="text">AP</IconButton>
        </div>
      </div>

      <BottomNavigation
        value={value}
        onChange={handleNavigationChange} // Set the handler to navigate to different pages
        showLabels
        style={{ backgroundColor: '#00ffd4' }}
      >
        <BottomNavigationAction label="Stats" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="Territory" icon={<PublicIcon />} />
        <BottomNavigationAction label="Activity" icon={<NotificationsActiveIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          background-color: #00ffd4;
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

        .status-bar {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 20px;
          padding: 10px;
          display: flex;
          justify-content: space-around;
          width: 90%;
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo-wrapper {
          width: 30px;
          height: 30px;
        }

        .title {
          margin-left: 10px;
          font-weight: bold;
          color: white;
        }

        .icons-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default TerritoryPage;
