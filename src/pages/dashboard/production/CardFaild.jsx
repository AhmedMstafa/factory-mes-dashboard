import { Box, Stack, Typography } from '@mui/material';

export default function CardFaild({ icon, title, value, subValue }) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        mb: '14px',
      }}
    >
      {icon}
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: 'var(--fs-2)',
          fontWeight: 'bold',
          ml: '10px',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          ml: 'auto',
          color: 'var(--granite-grey)',
          minWidth: '90px',
        }}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{
            fontSize: 'var(--fs-8)',
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          component="small"
          sx={{
            ml: '5px',
            fontSize: 'var(--fs-2',
          }}
        >
          {subValue}
        </Typography>
      </Box>
    </Stack>
  );
}
