import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, Button, Paper } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Sample credentials for login
  const correctEmail = 'test@example.com';
  const correctPassword = 'password123';

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      router.push('/settingsdashboard'); // Navigate to the settings dashboard page
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleSettingsClick = () => {
    router.push('/settings'); // Navigate to the settings page
  };

  return (
    <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0 }}>
        <Toolbar className="toolbar">
          <Typography variant="h6" className="title">
            Login
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleSettingsClick}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="content-container">
        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
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
          <Button variant="contained" color="primary" onClick={handleLogin} style={{ backgroundColor: '#00ffd4', color: '#000000' }} fullWidth>
            Login
          </Button>
        </Paper>
      </div>

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

        .title {
          font-weight: bold;
          color: white;
        }

        .content-container {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;