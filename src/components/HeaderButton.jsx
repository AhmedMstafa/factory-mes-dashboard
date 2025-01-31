import { Button } from '@mui/material';

export default function HeaderButton({ text, onClickHanlder, isActive }) {
  return (
    <Button
      onClick={onClickHanlder}
      variant="contained"
      sx={{
        bgcolor: isActive ? 'var(--ocean-navy)' : 'transparent',
        color: isActive ? 'var(--pure-white)' : 'var(--silver-mist)',
        boxShadow: 'none',
        textTransform: 'capitalize',
        fontSize: { xs: 'var(--fs-4)', md: 'var(--fs-6)' },
        height: '40px',
        borderRadius: '8px',
        textWrap: 'nowrap',
      }}
    >
      {text}
    </Button>
  );
}
