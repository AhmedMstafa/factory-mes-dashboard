import { Box, Container, IconButton, Stack } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IoPlanetOutline } from 'react-icons/io5';
import { LuAudioWaveform } from 'react-icons/lu';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import Select from './Select';
import Date from './Date';
import HeaderButton from './HeaderButton';
import { useState } from 'react';
import dayjs from 'dayjs';

const style = { marginInline: '10px', fontSize: '20px' };

const factoriesList = [
  {
    value: 'All Factories',
    icon: <IoPlanetOutline style={style} />,
  },
];
const linesList = [
  {
    value: 'All Lines',
    icon: <LuAudioWaveform style={style} />,
  },
];

const today = dayjs();
const yasterday = dayjs().subtract(1, 'day');
const lastWeek = dayjs().subtract(7, 'day');

export default function Header({ open, handleDrawerOpen }) {
  const [selectedDay, setSelctedDay] = useState(today);

  function lastWeekHanlder() {
    setSelctedDay(lastWeek);
  }

  function yesterdayHanlder() {
    setSelctedDay(yasterday);
  }

  function todayHanlder() {
    setSelctedDay(today);
  }

  function handleChangeDate(newValue) {
    setSelctedDay(newValue);
  }

  return (
    <Box
      component="nav"
      sx={{
        minHeight: '50px',
        boxShadow: '0 3px 6px #272D3B33 ',
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ height: '100%', display: 'flex', alignItems: 'center' }}
      >
        <Stack
          direction="row"
          flexGrow={1}
          flexWrap="wrap-reverse"
          justifyContent="space-between"
          gap={2}
          sx={{
            my: { xs: 2, md: 0 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            flexGrow={1}
            sx={{
              justifyContent: { xs: 'center', md: 'start' },
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>

            <Select data={factoriesList} />
            <Select data={linesList} />
            <Box
              sx={{
                display: { xs: ' none', md: 'block' },
              }}
            >
              <HiOutlineRocketLaunch style={style} />
            </Box>
          </Stack>
          <Stack
            direction="row"
            gap={1}
            flexGrow={1}
            sx={{
              justifyContent: { xs: 'center', md: 'end' },
            }}
          >
            <HeaderButton
              text="Today"
              onClickHanlder={todayHanlder}
              isActive={!selectedDay.diff(today)}
            />
            <HeaderButton
              text="Yesterday"
              onClickHanlder={yesterdayHanlder}
              isActive={!selectedDay.diff(yasterday)}
            />
            <HeaderButton
              text="Last Week"
              onClickHanlder={lastWeekHanlder}
              isActive={!selectedDay.diff(lastWeek)}
            />
            <Date value={selectedDay} handleChangeDate={handleChangeDate} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
