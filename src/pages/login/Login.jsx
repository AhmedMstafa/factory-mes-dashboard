import { Box, Stack } from '@mui/material';
import Logo from '../../components/Logo';
import FormLogin from './FormLogin';
export default function Login() {
  return (
    <Stack direction="row" height="100vh" flexGrow={1}>
      <Box
        sx={{
          flex: 2,
          display: { xs: 'none', md: 'block' },
          background: 'linear-gradient(to right, #F40009, #F40009)',
        }}
      ></Box>
      <Stack direction="column" flex={1} gap={5} justifyContent="center">
        <Box sx={{ mb: '100px' }}>
          <Logo isLoginPage />
        </Box>

        <FormLogin />
      </Stack>
    </Stack>
  );
}
