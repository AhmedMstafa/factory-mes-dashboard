import { Box, Stack, Typography } from '@mui/material';

export default function Progress({ title, width }) {
  return (
    <>
      <Stack
        alignItems="center"
        gap={2}
        position="relative"
        pb="10px"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            bgcolor: 'var(--foggy-silver)',
            borderRadius: '5px',
            height: '8px',
            flexGrow: '1',
            width: '100%',
          }}
        >
          <Box
            sx={{
              borderRadius: '5px',
              bgcolor: 'var(--steel-grey)',
              width: `${width}%`,
            }}
          ></Box>
        </Box>
        <Typography
          sx={{
            color: 'var(--steel-grey)',
            fontSize: 'var(--fs-7)',
            fontWeight: 'bold',
          }}
        >
          {width}%
        </Typography>
        <Typography
          sx={{
            color: 'var(--steel-grey)',
            fontSize: 'var(--fs-1)',
            position: 'absolute',
            bottom: '0',
          }}
        >
          {title}
        </Typography>
      </Stack>
    </>
  );
}
