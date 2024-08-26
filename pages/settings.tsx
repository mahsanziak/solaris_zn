import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  TextField,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  NotificationsActive as NotificationsActiveIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const SettingsDashboard = () => {
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [appTheme, setAppTheme] = useState('Light');
  const [language, setLanguage] = useState('English');
  const [value, setValue] = useState(4); // Set default to Settings
  const router = useRouter();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/stats'); // Navigate to Stats page
        break;
      case 1:
        router.push('/calendar'); // Navigate to Calendar page
        break;
      case 2:
        router.push('/territory'); // Navigate to Territory page
        break;
      case 3:
        router.push('/activity'); // Navigate to Activity page
        break;
      case 4:
        router.push('/settings'); // Stay on Settings page
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
              Settings
            </Typography>
          </div>
          <div className="spacer-section"></div>
        </Toolbar>
      </AppBar>

      <div className="content-container">
        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h6">Profile Settings</Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={{ marginBottom: '20px' }}
          />
        </Paper>

        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h6">Notification Preferences</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                color="primary"
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
                color="primary"
              />
            }
            label="Push Notifications"
          />
        </Paper>

        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h6">Privacy Settings</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={locationSharing}
                onChange={(e) => setLocationSharing(e.target.checked)}
                color="primary"
              />
            }
            label="Location Sharing"
          />
          <FormControlLabel
            control={
              <Switch
                checked={profileVisibility}
                onChange={(e) => setProfileVisibility(e.target.checked)}
                color="primary"
              />
            }
            label="Profile Visibility"
          />
        </Paper>

        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h6">General Settings</Typography>
          <div style={{ marginBottom: '20px' }}>
            <Typography variant="body1">App Theme</Typography>
            <Select
              value={appTheme}
              onChange={(e) => setAppTheme(e.target.value)}
              fullWidth
            >
              <MenuItem value="Light">Light</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
            </Select>
          </div>
          <div>
            <Typography variant="body1">Language</Typography>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              fullWidth
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </div>
        </Paper>
      </div>

      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        showLabels
        style={{ backgroundColor: '#00ffd4', position: 'fixed', bottom: 0, width: '100%' }}
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
          padding-top: 64px; /* Account for fixed AppBar */
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

        .content-container {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px;
          padding-bottom: 80px; /* Avoid overlap with bottom navigation */
        }
      `}</style>
    </div>
  );
};

export default SettingsDashboard;
