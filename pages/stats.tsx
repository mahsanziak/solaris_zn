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
  Paper
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  NotificationsActive as NotificationsActiveIcon,
  Settings as SettingsIcon
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
        router.push('/stats'); // Stay on the Stats page
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
        router.push('/settings'); // Navigate to Settings page
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0 }}>
        <Toolbar className="toolbar">
          <div className="logo-container">
            <div className="logo-wrapper">
              <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={30} height={30} />
            </div>
            <Typography variant="h6" className="title">
              Leaderboards
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        style={{ backgroundColor: '#00ffd4', color: '#ffffff', position: 'fixed', top: '64px', width: '100%' }} // Adjust position
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
            style={{ backgroundColor: '#ffffff', color: '#000000', borderRadius: '5px', padding: '5px' }}
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
            <TableContainer component={Paper} style={{ margin: '20px', borderRadius: '10px' }}>
              <Table>
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
                    { name: 'Garret Mazur', sets: 2 },
                    { name: 'Daniel Etches', sets: 2 },
                    { name: 'Andrew', sets: 2 },
                    { name: 'Holden B', sets: 2 },
                    { name: 'Liam', sets: 2 },
                    { name: 'Matt', sets: 2 },
                    { name: 'Haris', sets: 2 },
                    { name: 'Soomro', sets: 1 },
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
            <TableContainer component={Paper} style={{ margin: '20px', borderRadius: '10px' }}>
              <Table>
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
                    { name: 'Garret Mazur', kw: 'xx', closes: 2 },
                    { name: 'Daniel Etches', kw: 'xx', closes: 2 },
                    { name: 'Andrew', kw: 'xx', closes: 2 },
                    { name: 'Holden B', kw: 'xx', closes: 2 },
                    { name: 'Liam', kw: 'xx', closes: 2 },
                    { name: 'Matt', kw: 'xx', closes: 2 },
                    { name: 'Haris', kw: 'xx', closes: 2 },
                    { name: 'Soomro', kw: 'xx', closes: 1 },
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
        <BottomNavigationAction label="Activity" icon={<NotificationsActiveIcon />} />
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

        .content-container {
          margin-top: 112px; /* Adjusted to account for both the header and tabs */
          flex-grow: 1;
          overflow-y: auto; /* Enable scrolling if content overflows */
          padding-bottom: 80px; /* Avoid overlap with bottom navigation */
        }

        .filter-container {
          display: flex;
          justify-content: flex-end;
          padding: 20px;
          margin-right: 20px;
        }

        .table-container {
          padding-bottom: 80px; /* Prevent the table from overlapping with the bottom navigation */
        }
      `}</style>
    </div>
  );
};

export default StatsPage;
