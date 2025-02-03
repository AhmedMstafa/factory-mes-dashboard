import { Box, Button, Container, Stack, Typography } from '@mui/material';
import FactoryCart from './FactoryCard';

export default function Production() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: '102px',
        mb: '50px',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
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
            width: '243px',
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
    </Container>
  );
}
