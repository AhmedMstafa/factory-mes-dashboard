import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Machines from './pages/machines/Machines.jsx';
import Planning from './pages/planning/Planning.jsx';
import Reports from './pages/reports/Reports.jsx';
import Settings from './pages/settings/Settings.jsx';
import Login from './pages/login/Login.jsx';
import { getCustomTheme } from './Theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'machines', element: <Machines /> },
          { path: 'planning', element: <Planning /> },
          { path: 'reports', element: <Reports /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default function App() {
  // @ts-ignore
  const currentTheme = useSelector((state) => state.theme.value);
  const myTheme = useMemo(
    () => createTheme(getCustomTheme(currentTheme)),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
