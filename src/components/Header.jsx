import { Box, Container, IconButton, Stack } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IoPlanetOutline } from 'react-icons/io5';
import { LuAudioWaveform } from 'react-icons/lu';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

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

import Select from './Select';
import Date from './Date';
import HeaderButton from './HeaderButton';
import { useState } from 'react';

export default function Header({ open, handleDrawerOpen }) {
  const [isClicked, setIsClicked] = useState(false);

  function lastWeekHanlder() {
    return false;
  }

  function yesterdayHanlder() {
    return false;
  }

  function todayHanlder() {
    return false;
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
            {!open && (
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
            )}
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
              isActive={true}
            />
            <HeaderButton
              text="Yesterday"
              onClickHanlder={yesterdayHanlder}
              isActive={false}
            />
            <HeaderButton
              text="Last Week"
              onClickHanlder={lastWeekHanlder}
              isActive={false}
            />
            <Date />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
