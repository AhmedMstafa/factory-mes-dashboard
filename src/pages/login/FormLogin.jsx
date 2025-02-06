import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function FormLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      navigate('/dashboard/production');
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const email = fd.get('email');
    const password = fd.get('password');
    if (email !== '' && password !== '') {
      localStorage.setItem(
        'auth',
        JSON.stringify({ email: email, password: password })
      );
      navigate('/dashboard/production');
      event.target.reset();
    }
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: '340px', mx: 'auto', px: '20px' }}
    >
      <TextField
        type="email"
        name="email"
        placeholder="Eamil"
        required
        sx={{
          width: '100%',
          height: '60px',
          boxShadow: 'none',
          mb: '40px',
          '& > div': {
            borderRadius: '100px',
            fontSize: { xs: 'var(--fs-4)', md: 'var(--fs-6)' },
            p: '2px 2px',
            border: '1px solid var(--silver-mist)',
          },
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
          '& svg': {
            ml: '15px',
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <MdOutlineMailOutline fontSize={20} />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        autoComplete=""
        required
        sx={{
          width: '100%',
          height: '60px',
          boxShadow: 'none',
          '& > div': {
            borderRadius: '100px',
            fontSize: { xs: 'var(--fs-4)', md: 'var(--fs-6)' },
            p: '2px 2px',
            border: '1px solid var(--silver-mist)',
          },
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
          '& svg': {
            ml: '15px',
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IoLockClosedOutline fontSize={20} />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: '100%',
          height: '60px',
          mt: '50px',
          borderRadius: '100px',
          background: 'linear-gradient(to right, #F40009, #F40009)',
        }}
      >
        <Typography variant="body1">LOGIN</Typography>
      </Button>
    </Box>
  );
}
