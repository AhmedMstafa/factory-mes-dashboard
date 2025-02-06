import { Box, Stack, Typography } from '@mui/material';
import TotalProduction from './TotalProduction';
import Preformance from './Preformance';
import UsageKPI from './UsageKPI';
import StreamTable from '../../../components/stream/StreamTable';
import LossTree from './LossTree';
import TimeLine from './TimeLine';
import { useParams } from 'react-router-dom';
import data1 from '../../../data.json';

export default function Factory() {
  const { factoryId } = useParams();
  const factoryData = data1[+factoryId - 1];
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
        {factoryData.factoryName}
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
          <TotalProduction data={factoryData} />
          <Preformance data={factoryData} />
          <UsageKPI data={factoryData} />
          <LossTree data={factoryData.lossTree} />
          <TimeLine name="All lines" data={factoryData.timeLine} />
        </Stack>
        <StreamTable data={factoryData.stream} />
      </Box>
    </>
  );
}
