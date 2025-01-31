import { Box, MenuItem, TextField } from '@mui/material';

export default function Select({ data }) {
  return (
    <Box
      sx={{
        flexGrow: '1',
        maxWidth: '214px',
        height: '40px',
        bgcolor: 'var(--ocean-navy)',
        borderRadius: '8px',
      }}
    >
      <TextField
        id="outlined-select-currency"
        defaultValue={0}
        select
        sx={{
          width: '100%',
          height: '100%',
          boxShadow: 'none',
          '& div': {
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: 'var(--fs-4)', md: 'var(--fs-6)' },
            p: '2px 2px',
            height: '100%',
            border: 'none !important',
            color: 'var(--pure-white)',
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
            color: 'var(--pure-white)',
          },
        }}
      >
        {data.map((option, index) => (
          <MenuItem
            key={option.value}
            value={index}
            sx={{
              fontSize: 'var(--fs-4)',
            }}
          >
            {option.icon}
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
