import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Box component="section">
      <h1>Dashboard Page Will Be Here</h1>
      <Outlet />
    </Box>
  );
}
