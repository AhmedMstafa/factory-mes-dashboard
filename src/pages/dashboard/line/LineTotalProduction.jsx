import { BiPackage } from 'react-icons/bi';

import { Box, Paper, Stack, Typography } from '@mui/material';
import Progress from '../../../components/Progress';

export default function LineTotalProduction({ data }) {
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
        <BiPackage fontSize={22} />
        <Typography
          sx={{
            fontSize: 'var(--fs-4)',
            ml: '10px',
          }}
        >
          Total Production
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
            <Typography fontSize="var(--fs-8)">5,000</Typography>
            <Typography
              sx={{
                fontSize: 'var(--fs-3)',
                ml: '4px',
              }}
            >
              bph
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: 'var(--fs-1)', color: 'var(--granite-grey)' }}
          >
            7,000
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize="var(--fs-8)">5,000</Typography>
            <Typography
              sx={{
                fontSize: 'var(--fs-3)',
                ml: '4px',
              }}
            >
              KM
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: 'var(--fs-1)', color: 'var(--granite-grey)' }}
          >
            Actual Production
          </Typography>
        </Box>
      </Stack>
      <Box px="29px" py="29px">
        <Progress
          title="Production Yield"
          width={data}
          bgcolor="var(--bright-orange)"
        />
      </Box>
    </Paper>
  );
}
