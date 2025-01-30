import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
