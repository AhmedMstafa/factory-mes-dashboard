import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { IoGridOutline } from 'react-icons/io5';
import { TbTool } from 'react-icons/tb';
import { GrSync } from 'react-icons/gr';
import { TbReportAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const style = {
  color: 'var(--pure-white)',
  fontSize: '24px',
  marginInline: 'auto',
};

const pages = [
  {
    title: 'Dashboard',
    icon: <IoGridOutline style={style} />,
    path: '/dashboard/production',
  },
  { title: 'Machines', icon: <TbTool style={style} />, path: '/machines' },
  { title: 'Planning', icon: <GrSync style={style} />, path: '/planning' },
  {
    title: 'Reports',
    icon: <TbReportAnalytics style={style} />,
    path: '/reports',
  },
  {
    title: 'Settings',
    icon: <IoSettingsOutline style={style} />,
    path: '/settings',
  },
  { title: 'Logout', icon: <TbLogout style={style} />, path: '/login' },
];

export default function SideBar({ handleDrawerOpen, open }) {
  const location = useLocation();

  function pageHandler(path) {
    if (path === '/login') {
      localStorage.removeItem('auth');
      return;
    }
  }

  return (
    <Box
      component="aside"
      sx={{
        bgcolor: 'var(--flame-red) ',
        width: open ? '261px' : '0',
        transition: ' 0.3s linear',
        transform: open ? 'translateX(0)' : 'translateX(-261px)',
        height: '100vh',
        zIndex: 9999,
      }}
    >
      {open && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleDrawerOpen(false)}
          sx={{
            display: { xs: 'flex', lg: 'none' },
            marginLeft: 'auto',
            color: 'var(--pure-white)',
          }}
        >
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>
      )}
      <Box
        sx={{
          mt: '50px',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ mt: '153px' }}>
        <List>
          {pages.map((page, index) => {
            const isCurrentPage = location.pathname.startsWith(`${page.path}`);
            return (
              <Link
                to={page.path}
                key={page.title}
                onClick={() => pageHandler(page.path)}
              >
                <ListItem
                  key={page.title}
                  disablePadding
                  sx={{
                    marginTop: index === 4 ? '150px' : '0',
                    marginBottom: '20px',
                    color: 'var(--pure-white)',
                    opacity: isCurrentPage ? '1' : '0.8',
                    background: isCurrentPage
                      ? 'var(--twilight-black)'
                      : 'none',
                    '& div': {
                      minWidth: { xs: '0', md: '55px' },
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        marginInline: 'auto',
                      }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={page.title}
                      sx={{
                        ml: '22px',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
