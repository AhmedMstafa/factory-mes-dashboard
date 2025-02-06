import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import CardFaild from './CardFaild';
import { MdSpeed } from 'react-icons/md';
import { TbSettingsAutomation } from 'react-icons/tb';
import { RxReload } from 'react-icons/rx';
import { MdOutlineShowChart } from 'react-icons/md';
import { SlEqualizer } from 'react-icons/sl';
import { PiMedalLight } from 'react-icons/pi';
import Pie from '../../../components/pie-chart/Pie';

export default function FactoryCart({ factory }) {
  function onClickHandler() {}

  return (
    <Stack
      component="article"
      sx={{
        maxWidth: '350px',
        flexGrow: 1,
      }}
    >
      <Paper
        onClick={onClickHandler}
        sx={{
          width: '100%',
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
        <Button
          sx={{
            height: '50px',
            bgcolor: 'var(--ocean-navy)',
            borderRadius: '8px 8px 0 0',
            textTransform: 'capitalize',
            width: '100%',
            justifyContent: 'start',
            paddingLeft: '30px',
            color: 'var(--pearl-grey)',
            fontSize: 'var(--fs-4)',
          }}
        >
          {factory.factoryName}
        </Button>
        <Box
          sx={{
            p: '23px',
          }}
        >
          <CardFaild
            icon={<MdSpeed fontSize={24} />}
            title="Actual speed"
            value={factory.actualSpeed}
            subValue="L/s"
          />
          <CardFaild
            icon={<TbSettingsAutomation fontSize={24} />}
            title="Actual production"
            value={factory.actualProduction}
            subValue="L"
          />
          <CardFaild
            icon={<RxReload fontSize={24} />}
            title="Last hour cycle time"
            value={factory.cycleTime}
            subValue="s"
          />
          <CardFaild
            icon={<MdOutlineShowChart fontSize={24} />}
            title="Ratio of active lines"
            value={factory.Ratio}
            subValue=""
          />
        </Box>
        <Box
          sx={{
            bgcolor: 'var(--ocean-navy)',
            height: '1px',
            position: 'relative',
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: '10px',
              color: 'var(--ocean-navy)',
              px: '10px',
              position: 'absolute',
              top: '-50%',
              right: '80px',
              bgcolor: 'var(--pure-white)',
              transform: 'translateY(-50%)',
            }}
          >
            Line shift
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center" gap={3} my="23px">
          <Pie
            lable={'OEE'}
            value={factory.oee}
            color={'var( --sunburst-orange)'}
            background={'var(--granite-grey)'}
          />
          <Pie
            lable={'SLE'}
            value={factory.sle}
            color={'var(--electric-cyan)'}
            background={'var(--granite-grey)'}
          />
          <Pie
            lable={'USLE'}
            value={factory.usle}
            color={'var(--blush-pink)'}
            background={'var(--granite-grey)'}
          />
        </Stack>
        <Box
          sx={{
            p: '0 23px 23px 23px',
          }}
        >
          <CardFaild
            icon={<SlEqualizer fontSize={24} />}
            title="Production volume"
            value={factory.valume}
            subValue="L"
          />
          <CardFaild
            icon={<PiMedalLight fontSize={24} />}
            title="Production quality"
            value={factory.quality}
            subValue=""
          />
        </Box>
      </Paper>
    </Stack>
  );
}
