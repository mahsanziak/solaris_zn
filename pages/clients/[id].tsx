import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Image from 'next/image';

const clients = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678' },
  { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: '555-9012' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', phone: '555-3456' },
  { id: 5, name: 'Chris Lee', email: 'chris.lee@example.com', phone: '555-7890' },
  { id: 6, name: 'Jessica Brown', email: 'jessica.brown@example.com', phone: '555-2345' },
  { id: 7, name: 'David Wilson', email: 'david.wilson@example.com', phone: '555-6789' },
  { id: 8, name: 'Amanda Clark', email: 'amanda.clark@example.com', phone: '555-3456' },
  { id: 9, name: 'Brian Martinez', email: 'brian.martinez@example.com', phone: '555-9876' },
  { id: 10, name: 'Samantha Miller', email: 'samantha.miller@example.com', phone: '555-5432' },
];

const ClientDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the client based on the ID from the URL
  const client = clients.find((client) => client.id === parseInt(id as string, 10));

  if (!client) {
    return (
      <div className="container">
        <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0, width: '100%' }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px' }}>
            <div style={{ position: 'absolute', left: 16 }}>
              <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={40} height={40} />
            </div>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Client Not Found
            </Typography>
            <div style={{ width: 40 }} />
          </Toolbar>
        </AppBar>

        <div className="content-container">
          <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <Typography variant="h6">Client not found.</Typography>
            <Button variant="contained" color="primary" onClick={() => router.push('/clients')}>
              Back to Clients
            </Button>
          </Paper>
        </div>

        <BottomNavigation
          value={3}
          showLabels
          style={{ backgroundColor: '#00ffd4', position: 'fixed', bottom: 0, width: '100%' }}
        >
          <BottomNavigationAction label="Stats" icon={<AssessmentIcon />} onClick={() => router.push('/stats')} />
          <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} onClick={() => router.push('/calendar')} />
          <BottomNavigationAction label="Territory" icon={<PublicIcon />} onClick={() => router.push('/territory')} />
          <BottomNavigationAction label="Clients" icon={<PeopleIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} onClick={() => router.push('/settings')} />
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
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#00ffd4', top: 0, width: '100%' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px' }}>
          <div style={{ position: 'absolute', left: 16 }}>
            <Image src="/images/logo.png" alt="ZENO Logo" layout="fixed" width={40} height={40} />
          </div>
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            {client.name}
          </Typography>
          <div style={{ width: 40 }} />
        </Toolbar>
      </AppBar>

      <div className="content-container">
        <Paper style={{ margin: '20px', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <Typography variant="h6">Client Details</Typography>
          <Typography variant="body1"><strong>Name:</strong> {client.name}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {client.email}</Typography>
          <Typography variant="body1"><strong>Phone:</strong> {client.phone}</Typography>
        </Paper>
      </div>

      <BottomNavigation
        value={3} // Clients tab active
        showLabels
        style={{ backgroundColor: '#00ffd4', position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigationAction label="Stats" icon={<AssessmentIcon />} onClick={() => router.push('/stats')} />
        <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} onClick={() => router.push('/calendar')} />
        <BottomNavigationAction label="Territory" icon={<PublicIcon />} onClick={() => router.push('/territory')} />
        <BottomNavigationAction label="Clients" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} onClick={() => router.push('/settings')} />
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
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ClientDetailPage;
