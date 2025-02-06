import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { Stack } from '@mui/material';

export default function Home() {
  const [open, toggleOpen] = useState(true);
  const navigate = useNavigate();

  function handleDrawerOpen(openOrClose) {
    toggleOpen(openOrClose);
  }

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/login');
      return;
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'column',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <SideBar {...{ handleDrawerOpen, open }} />
      <Stack flexGrow={1}>
        <Header {...{ handleDrawerOpen, open }} />
        <Box
          component="main"
          sx={{
            bgcolor: 'var(--frost-blue)',
            height: '100vh',
            overflowX: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}
