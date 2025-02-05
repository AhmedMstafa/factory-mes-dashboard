import { Box, Button, Stack, Typography } from '@mui/material';
import FactoryCart from './FactoryCard';

export default function Production() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        sx={{
          mb: '22px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'var( --deep-sea-blue)',
            fontSize: 'var(--fs-5)',
            fontWeight: ' bold',
          }}
        >
          Dashboard / Production
        </Typography>
        <Box
          sx={{
            bgcolor: 'var(--pure-white)',
            borderRadius: '8px',
            display: 'flex',
            maxWidth: '243px',
            flexGrow: 1,
          }}
        >
          <Button
            sx={{
              color: 'var(--dusky-sky)',
              borderRadius: '8px',
              flexGrow: 3,
            }}
          >
            SKU
          </Button>
          <Button
            sx={{
              color: 'var(--pure-white)',
              bgcolor: 'var(--flame-red)',
              flexGrow: 1,
              borderRadius: '8px',
              textTransform: 'capitalize',
            }}
          >
            Production
          </Button>
        </Box>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        gap={3}
      >
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
        <FactoryCart />
      </Stack>
    </>
  );
}
