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

export default function Header({ handleDrawerOpen, open }) {
  const [selectedDay, setSelctedDay] = useState(today);

  function handleChangeDate(newValue) {
    setSelctedDay(newValue);
  }

  return (
    <Box
      component="nav"
      sx={{
        boxShadow: '0 3px 6px #272D3B33 ',
        minHeight: '50px',
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
          sx={{
            my: { xs: 2, lg: 0 },
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            flexGrow={1}
            sx={{
              justifyContent: { xs: 'center', lg: 'start' },
              gap: { xs: 0.5, sm: 1, md: 1 },
            }}
          >
            {!open && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            )}

            <Select data={factoriesList} />
            <Select data={linesList} />
            <Box
              sx={{
                display: { xs: ' none', lg: 'block' },
              }}
            >
              <HiOutlineRocketLaunch style={style} />
            </Box>
          </Stack>
          <Stack
            direction="row"
            flexGrow={1}
            sx={{
              justifyContent: { xs: 'center', lg: 'end' },
              gap: { xs: 0.5, sm: 1, md: 1 },
            }}
          >
            <HeaderButton
              text="Today"
              onClickHanlder={() => handleChangeDate(today)}
              isActive={!selectedDay.diff(today)}
            />
            <HeaderButton
              text="Yesterday"
              onClickHanlder={() => handleChangeDate(yasterday)}
              isActive={!selectedDay.diff(yasterday)}
            />
            <HeaderButton
              text="Last Week"
              onClickHanlder={() => handleChangeDate(lastWeek)}
              isActive={!selectedDay.diff(lastWeek)}
            />
            <Date value={selectedDay} handleChangeDate={handleChangeDate} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
