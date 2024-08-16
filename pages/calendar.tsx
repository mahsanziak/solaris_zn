import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  NotificationsActive as NotificationsActiveIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const CalendarPage = () => {
  const [value, setValue] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('');

  const router = useRouter(); // Initialize useRouter

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Handle page navigation for the bottom navigation buttons
  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/stats'); // Navigate to Stats page
        break;
      case 1:
        router.push('/calendar'); // Navigate to Calendar page (current page)
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="container">
        <AppBar position="static" style={{ backgroundColor: '#00ffd4' }}>
          <Toolbar className="toolbar">
            <div className="logo-container">
              <div className="logo-wrapper">
                <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={30} height={30} />
              </div>
              <Typography variant="h6" className="title">
                Calendar
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        <div className="calendar-container">
          <div className="calendar-header">
            <Typography variant="h6" style={{ color: '#ffffff' }}>
              August 2024
            </Typography>
            <Select
              value={filter}
              onChange={handleFilterChange}
              displayEmpty
              style={{ backgroundColor: '#ffffff', color: '#000000', borderRadius: '5px', padding: '5px' }}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: '#ffffff',
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>Filter by: All</em>
              </MenuItem>
              <MenuItem value="Daniel Etches" style={{ color: '#000000' }}>
                Daniel Etches
              </MenuItem>
              <MenuItem value="Other User" style={{ color: '#000000' }}>
                Other User
              </MenuItem>
            </Select>
          </div>

          <DatePicker
            views={['month']}
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <input {...params.inputProps} className="date-input" />}
          />

          <div className="events-list">
            <Typography variant="h6" style={{ color: '#ffffff', marginBottom: '10px' }}>
              Today's Events
            </Typography>
            <div className="event">
              11:00am: Sustainability Liaison training
            </div>
            <div className="event">
              2:00pm: Zeno Renewables: Solar Consultation: 2516 Cherokee Drive NW
            </div>

            <Typography variant="h6" style={{ color: '#ffffff', marginTop: '20px', marginBottom: '10px' }}>
              Reminders
            </Typography>
            <div className="reminder">Submit Report by EOD</div>
            <div className="reminder">Call Project Manager</div>
          </div>
        </div>

        <BottomNavigation
          value={value}
          onChange={handleNavigationChange} // Update the handler to navigate between pages
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
            background-color: #f0f4f7;
          }

          .calendar-container {
            flex-grow: 1;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px;
          }

          .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .events-list {
            margin-top: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .event,
          .reminder {
            background-color: #e0f7fa;
            color: #00796b;
            padding: 10px;
            margin-top: 10px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .date-input {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            margin-top: 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </LocalizationProvider>
  );
};

export default CalendarPage;
