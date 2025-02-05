import { Paper } from '@mui/material';
import StreamChart from './StreamChart';

export default function StreamTable({ data }) {
  return (
    <Paper
      sx={{
        width: '282px',
        flex: '1',
        alignSelf: 'start',
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
      <StreamChart
        data={data}
        show={'cycle time'}
        color={'var(--pale-sunburst)'}
        border={'var(--sunburst-orange)'}
        title={'cycle time'}
        subTitle={'[seconds]'}
      />
      <StreamChart
        data={data}
        show={'speed'}
        color={'var( --tangerine-dream)'}
        border={'var( --bright-orange)'}
        title={'speed'}
        subTitle={'[pbh]'}
      />
      <StreamChart
        data={data}
        show={'uptime'}
        color={'var(--misty-aqua)'}
        border={'var( --aqua-teal)'}
        title={'uptime'}
        subTitle={'[bottle]'}
      />
    </Paper>
  );
}
