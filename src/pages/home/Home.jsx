import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header {...{ handleDrawerOpen, open }} />
      <SideBar {...{ handleDrawerClose, open }} />
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
}
