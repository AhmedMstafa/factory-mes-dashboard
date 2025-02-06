import { Box, Paper, Stack, Typography } from '@mui/material';
import VLineChart from '../../../components/line-chart/VLineChart';
import { BsActivity } from 'react-icons/bs';

export default function TimeLine({ name, data }) {
  return (
    <>
      <Paper
        sx={{
          width: '300px',
          minWidth: { md: '100%' },
          height: '140px',
          flex: 2,
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
            Time line
          </Typography>
        </Stack>
        <Box sx={{ height: '100%', paddingLeft: '70px', position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '50px',
              top: '50px',
              transform: 'translate(-50%,-50%)',
              color: 'var(--steel-grey)',
              fontSize: 'var(--fs-2)',
              fontWeight: 'bold',
            }}
          >
            <Typography fontSize="var(--fs-2)">{name}</Typography>
          </Box>
          <VLineChart data={data} />
        </Box>
      </Paper>
    </>
  );
}
