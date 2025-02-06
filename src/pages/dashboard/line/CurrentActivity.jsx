import { Paper, Stack, Typography } from '@mui/material';
import LineStream from '../../../components/stream/LineStream';
import { BsActivity } from 'react-icons/bs';

const data = [
  {
    activity: 22,
  },
  {
    activity: 24,
  },
  {
    activity: 77,
  },
  {
    activity: 113,
  },
  {
    activity: 10,
  },
  {
    activity: 83,
  },
  {
    activity: 155,
  },
  {
    activity: 76,
  },
  {
    activity: 172,
  },
];

export default function CurrentActivity() {
  return (
    <>
      <Paper
        sx={{
          width: '300px',
          minWidth: { md: '500px' },
          flex: 1,
          height: '400px',
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
          <BsActivity fontSize={22} />
          <Typography
            sx={{
              fontSize: 'var(--fs-4)',
              ml: '10px',
            }}
          >
            Current Activity
          </Typography>
        </Stack>
        <LineStream data={data} />
      </Paper>
    </>
  );
}
