import { Paper, Stack, Typography } from '@mui/material';
import Pie from '../../../components/pie-chart/Pie';
import { RiEqualizerLine } from 'react-icons/ri';
import Progress from '../../../components/Progress';

export default function Preformance({ data }) {
  return (
    <>
      <Paper
        sx={{
          minWidth: '282px',
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
          <RiEqualizerLine fontSize={22} />
          <Typography
            sx={{
              fontSize: 'var(--fs-4)',
              ml: '10px',
            }}
          >
            Performance Indicator KPI
          </Typography>
        </Stack>
        <Stack direction="row" px="15px" py="29px">
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            borderRight="1px solid var(--moonlight-grey)"
          >
            <Pie
              lable={'OEE'}
              value={data.oee}
              color={'var(--ocean-navy)'}
              background={'var(--granite-grey)'}
            />
            <Pie
              lable={'SLE'}
              value={data.sle}
              color={'var(--electric-cyan)'}
              background={'var(--granite-grey)'}
            />
            <Pie
              lable={'USLE'}
              value={data.usle}
              color={'var(--blush-pink)'}
              background={'var(--granite-grey)'}
            />
          </Stack>
          <Stack
            minWidth="50%"
            flexGrow={1}
            gap={1}
            paddingLeft="15px"
            my="auto"
          >
            <Progress
              title="Preformance"
              width={data.preformancePer}
              bgcolor="var(--steel-grey)"
            />
            <Progress
              title="Quality"
              width={data.qualityPer}
              bgcolor="var(--steel-grey)"
            />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
