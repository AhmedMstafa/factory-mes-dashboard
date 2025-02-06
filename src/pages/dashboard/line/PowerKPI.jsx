import { Box, Paper, Stack, Typography } from '@mui/material';
import { HiOutlineLightningBolt } from 'react-icons/hi';

export default function PowerKPI({ data }) {
  return (
    <Paper
      sx={{
        minWidth: '282px',
        flex: 1,
        borderRadius: '8px',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0px 8px 12px #0000001A',
        transition: ' 0.3s linear',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 16px 24px #0000001A',
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: '40px',
          alignItems: 'center',
          ml: '20px',
          borderBottom: '1px solid var(--moonlight-grey)',
        }}
      >
        <HiOutlineLightningBolt fontSize={22} />
        <Typography
          sx={{
            fontSize: 'var(--fs-4)',
            ml: '10px',
          }}
        >
          Power KPI
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" px="29px" pt="29px">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize="var(--fs-8)">{data.energy}</Typography>
            <Typography
              sx={{
                fontSize: 'var(--fs-3)',
                ml: '4px',
              }}
            >
              KWH
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: 'var(--fs-1)', color: 'var(--granite-grey)' }}
          >
            Energy Used
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography fontSize="var(--fs-8)">{data.production}</Typography>
          <Typography
            sx={{ fontSize: 'var(--fs-1)', color: 'var(--granite-grey)' }}
          >
            Actual Production
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: '29px',
          py: '29px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="var(--fs-8)">{data.energy}</Typography>
          <Typography
            sx={{
              fontSize: 'var(--fs-3)',
              ml: '4px',
            }}
          >
            KWH
          </Typography>
        </Box>
        <Typography
          sx={{ fontSize: 'var(--fs-1)', color: 'var(--granite-grey)' }}
        >
          Energy Used
        </Typography>
      </Box>
    </Paper>
  );
}
