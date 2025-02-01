import { Box, Stack, Typography } from '@mui/material';

function Line({ isLoginPage, gradient }) {
  const color = isLoginPage
    ? 'var(--flame-red)'
    : gradient === 1
    ? 'var(--pure-white)'
    : gradient === 2
    ? 'rgb(255 255 255 / 70%);'
    : 'rgb(255 255 255 / 50%);';
  return (
    <Box
      component="span"
      sx={{
        width: '10px',
        height: '40px',
        position: 'relative',
        bgcolor: color,
        overflow: 'hidden',
      }}
    >
      <Box
        component="span"
        sx={{
          position: 'absolute',
          left: '-50px',
          width: '100px',
          height: '20px',
          background: 'red',
          transform: 'rotate(-45deg)',
        }}
      ></Box>
    </Box>
  );
}

export default function Logo({ isLoginPage = false }) {
  const color = isLoginPage ? 'var(--flame-red)' : 'var(--pure-white)';
  return (
    <Stack direction="row" alignItems="end" justifyContent="center" gap={2}>
      <Stack gap={0.3} flexDirection="row">
        <Line isLoginPage={isLoginPage} gradient={3} />
        <Line isLoginPage={isLoginPage} gradient={2} />
        <Line isLoginPage={isLoginPage} gradient={1} />
      </Stack>
      <Typography
        variant="h5"
        sx={{
          color: color,
          lineHeight: '1',
        }}
      >
        MES
      </Typography>
    </Stack>
  );
}
