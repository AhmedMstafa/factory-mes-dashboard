import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Box component="section">
      <Outlet />
    </Box>
  );
}
