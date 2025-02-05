import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { Stack } from '@mui/material';

export default function Home() {
  const [open, toggleOpen] = useState(true);

  const toggleDrawerOpen = () => {
    toggleOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'column',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <SideBar {...{ open, handleDrawerOpen: toggleDrawerOpen }} />
      <Stack flexGrow={1}>
        <Header {...{ handleDrawerOpen: toggleDrawerOpen, open }} />
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
