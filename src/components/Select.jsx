import { Box, MenuItem, TextField } from '@mui/material';

export default function Select({ icon, data, onChangeHandler }) {
  return (
    <Box
      sx={{
        flexGrow: '1',
        maxWidth: data.length === 1 ? '80px' : '214px',
        height: '40px',
        bgcolor: 'var(--ocean-navy)',
        borderRadius: '8px',
        transition: ' 0.5s ',
      }}
    >
      <TextField
        onChange={onChangeHandler}
        name="select"
        id="outlined-select-currency"
        disabled={data.length === 1}
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
        {data.map((option) => (
          <MenuItem
            key={option.name}
            value={option.id}
            sx={{
              fontSize: 'var(--fs-4)',
            }}
          >
            {icon}
            {data.length === 1 ? '' : option.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
