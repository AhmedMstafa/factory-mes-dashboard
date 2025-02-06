import { Box, Stack, Typography } from '@mui/material';
import LineTotalProduction from './LineTotalProduction';
import LinePreformance from './LinePerformance';
import PowerKPI from './PowerKPI';
import StreamTable from '../../../components/stream/StreamTable';
import CurrentActivity from './CurrentActivity';
import TimeLine from '../factory/TimeLine';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';

export default function Line() {
  const { lineId } = useParams();
  const { factoryId } = useParams();
  const lineData = data[+factoryId - 1].lines[+lineId - 1];
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
        {lineData.lineName}
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
          <LineTotalProduction data={lineData.yeild} />
          <LinePreformance data={lineData.preformance} />
          <PowerKPI data={lineData.power} />
          <CurrentActivity data={lineData.activity} />
          <TimeLine name={lineData.lineName} data={lineData.timeLine} />
        </Stack>
        <StreamTable data={lineData.stream} />
      </Box>
    </>
  );
}
