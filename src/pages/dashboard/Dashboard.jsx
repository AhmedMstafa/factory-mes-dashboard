import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Box component="section">
      <Container
        maxWidth="xl"
        sx={{
          mt: '102px',
          mb: '50px',
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
