import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  People as PeopleIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ClientsPage = () => {
  const [clients] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Chris Lee' },
    { id: 6, name: 'Jessica Brown' },
    { id: 7, name: 'David Wilson' },
    { id: 8, name: 'Amanda Clark' },
    { id: 9, name: 'Brian Martinez' },
    { id: 10, name: 'Samantha Miller' }
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [value, setValue] = useState(3); // Set default to Clients
  const router = useRouter();

  const handleMenuClick = (event, client) => {
    setAnchorEl(event.currentTarget);
    setSelectedClient(client);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedClient(null);
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
        router.push('/territory');
        break;
      case 3:
        router.push('/clients');
        break;
      case 4:
        router.push('/settings');
        break;
      default:
        break;
    }
  };

  const handleClientClick = (clientId) => {
    router.push(`/clients/${clientId}`);
  };

  return (
    <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0, width: '100%' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px' }}>
          <div style={{ position: 'absolute', left: 16 }}>
            <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={40} height={40} />
          </div>
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            Clients
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="content-container">
        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h6" style={{ marginBottom: '20px' }}>Client List</Typography>
          <List>
            {clients.map((client) => (
              <ListItem button key={client.id} onClick={() => handleClientClick(client.id)}>
                <ListItemText primary={client.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={(e) => handleMenuClick(e, client)}>
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>

      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        showLabels
        style={{ backgroundColor: '#00ffd4', position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigationAction label="Stats" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="Territory" icon={<PublicIcon />} />
        <BottomNavigationAction label="Clients" icon={<PeopleIcon />} />
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

export default ClientsPage;
