import { Box, Container, IconButton, Stack } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IoPlanetOutline } from 'react-icons/io5';
import { LuAudioWaveform } from 'react-icons/lu';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import Select from './Select';
import Date from './Date';
import HeaderButton from './HeaderButton';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
const style = { marginInline: '10px', fontSize: '20px' };

const today = dayjs();
const yasterday = dayjs().subtract(1, 'day');
const lastWeek = dayjs().subtract(7, 'day');

export default function Header({ handleDrawerOpen, open }) {
  const [selectedDay, setSelctedDay] = useState(today);
  const [selectedDashboard, setSelectedDashboard] = useState({
    factory: 0,
    line: 0,
    day: selectedDay,
  });

  const navigate = useNavigate();

  function handleChangeSelect(event, type) {
    const value = event.target.value;
    setSelectedDashboard((prev) => ({
      ...prev,
      [type]: value,
      line: type === 'factory' ? 0 : value,
    }));
  }

  function handleChangeDate(newValue) {
    setSelctedDay(newValue);
    setSelectedDashboard((prev) => ({ ...prev, day: newValue }));
  }

  useEffect(() => {
    function showContent() {
      if (!selectedDashboard.factory && !selectedDashboard.line) {
        navigate('/dashboard/production');

        return;
      }

      if (selectedDashboard.line === 0) {
        navigate(`/dashboard/factory/${selectedDashboard.factory}`);
        return;
      }

      navigate(
        `/dashboard/factory/${selectedDashboard.factory}/line/${selectedDashboard.line}`
      );
    }

    showContent();
  }, [selectedDay, selectedDashboard, navigate]);

  return (
    <Box
      component="nav"
      sx={{
        boxShadow: '0 3px 6px #272D3B33 ',
        minHeight: { xs: '120px', md: '50px' },
        zIndex: 1,
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
                onClick={() => handleDrawerOpen(true)}
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            )}

            <Select
              data={data}
              icon={<IoPlanetOutline style={style} />}
              onChangeHandler={(data) => handleChangeSelect(data, 'factory')}
            />
            <Select
              data={data[selectedDashboard.factory].lines}
              icon={<LuAudioWaveform style={style} />}
              onChangeHandler={(data) => handleChangeSelect(data, 'line')}
            />
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
