import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Tab,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const StatsPage = () => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filter, setFilter] = useState('');
  const router = useRouter();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
        router.push('/clients'); // Changed to navigate to Clients page
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
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0, width: '100%' }}>
        <Toolbar className="toolbar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px' }}>
            <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={100} height={30} />
          </div>
          <Typography variant="h6" className="title" style={{ flexGrow: 1, textAlign: 'center' }}>
            Leaderboards
          </Typography>
          <div className="logo-placeholder" style={{ width: '100px' }}></div> {/* Placeholder for symmetry */}
        </Toolbar>
      </AppBar>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        style={{ backgroundColor: '#00ffd4', color: '#ffffff', position: 'fixed', top: '64px', width: '100%' }}
      >
        <Tab label="Setters" />
        <Tab label="Closers" />
      </Tabs>

      <div className="content-container">
        <div className="filter-container">
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '5px',
              padding: '5px',
              width: '100%',
              maxWidth: '200px',
              margin: '20px auto 0', // Add space between tabs and filter
            }}
          >
            <MenuItem value="">
              <em>Filter by: All</em>
            </MenuItem>
            <MenuItem value="Week">This Week</MenuItem>
            <MenuItem value="Month">This Month</MenuItem>
            <MenuItem value="Year">This Year</MenuItem>
          </Select>
        </div>

        <div className="table-container">
          {selectedTab === 0 && (
            <TableContainer component={Paper} style={{ margin: '20px auto', borderRadius: '10px', width: '100%', maxWidth: '800px' }}>
              <Table style={{ tableLayout: 'fixed', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Setter</TableCell>
                    <TableCell align="right">Sets</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { name: 'Bryce Whittingham', sets: 5 },
                    { name: 'Rayyan Adnan', sets: 4 },
                    { name: 'Ahsan Zia', sets: 4 },
                    { name: 'Idris De Silva', sets: 3 },
                    { name: 'William Eva', sets: 3 },
                  ].map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>{`${index + 1}. ${row.name}`}</TableCell>
                      <TableCell align="right">{row.sets}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {selectedTab === 1 && (
            <TableContainer component={Paper} style={{ margin: '20px auto', borderRadius: '10px', width: '100%', maxWidth: '800px' }}>
              <Table style={{ tableLayout: 'fixed', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Closer</TableCell>
                    <TableCell align="right">Kw</TableCell>
                    <TableCell align="right">Closes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { name: 'Bryce Whittingham', kw: 'xx', closes: 5 },
                    { name: 'Rayyan Adnan', kw: 'xx', closes: 4 },
                    { name: 'Ahsan Zia', kw: 'xx', closes: 4 },
                    { name: 'Idris De Silva', kw: 'xx', closes: 3 },
                    { name: 'William Eva', kw: 'xx', closes: 3 },
                  ].map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>{`${index + 1}. ${row.name}`}</TableCell>
                      <TableCell align="right">{row.kw}</TableCell>
                      <TableCell align="right">{row.closes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
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
        <BottomNavigationAction label="Clients" icon={<PeopleIcon />} /> {/* Changed from Activity to Clients */}
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        .toolbar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          width: 100%;
        }

        .title-section {
          flex-grow: 1;
          text-align: center;
        }

        .content-container {
          margin-top: 128px; /* Adjust for both AppBar and Tabs */
          flex-grow: 1;
          overflow-y: auto;
          padding-bottom: 80px; /* Avoid overlap with bottom navigation */
        }

        .filter-container {
          text-align: center;
          margin-bottom: 20px; /* Add margin to separate from the table */
        }

        .table-container {
          width: 100%;
          max-width: 100%; /* Ensure full-width usage on small screens */
          overflow-x: auto;
        }

        @media (max-width: 768px) {
          .content-container {
            margin-top: 96px; /* Slightly reduce margin on smaller screens */
          }

          .toolbar {
            padding: 0 8px; /* Reduce padding on smaller screens */
          }

          .filter-container {
            width: 100%;
            justify-content: center;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default StatsPage;
