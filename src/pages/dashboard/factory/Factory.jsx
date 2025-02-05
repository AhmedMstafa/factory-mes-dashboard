import { Box, Stack, Typography } from '@mui/material';

import TotalProduction from './TotalProduction';
import Preformance from './Preformance';
import UsageKPI from './UsageKPI';
import StreamTable from '../../../components/stream/StreamTable';
import LossTree from './LossTree';
import TimeLine from './TimeLine';

const data = [
  {
    'cycle time': 14,
    speed: 99,
    uptime: 142,
  },
  {
    'cycle time': 59,
    speed: 74,
    uptime: 100,
  },
  {
    'cycle time': 191,
    speed: 64,
    uptime: 93,
  },
  {
    'cycle time': 141,
    speed: 32,
    uptime: 116,
  },
  {
    'cycle time': 68,
    speed: 185,
    uptime: 50,
  },
  {
    'cycle time': 195,
    speed: 93,
    uptime: 90,
  },
  {
    'cycle time': 18,
    speed: 90,
    uptime: 71,
  },
  {
    'cycle time': 69,
    speed: 180,
    uptime: 48,
  },
  {
    'cycle time': 18,
    speed: 101,
    uptime: 44,
  },
];

export default function Factory() {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'var( --deep-sea-blue)',
          fontSize: 'var(--fs-5)',
          fontWeight: ' bold',
          mb: '22px',
        }}
      >
        Factory Name
      </Typography>
      <Box
        component="article"
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: { xs: 'wrap', lg: 'nowrap' },
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          alignItems="start"
          flexGrow={1}
        >
          <TotalProduction />
          <Preformance />
          <UsageKPI />
          <LossTree />
          <TimeLine />
        </Stack>
        <StreamTable data={data} />
      </Box>
    </>
  );
}
