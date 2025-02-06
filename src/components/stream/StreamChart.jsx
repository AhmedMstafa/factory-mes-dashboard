import { Box, Stack, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

import Stream from './Stream';

export default function StreamChart({
  data,
  show,
  color,
  border,
  title,
  subTitle = '',
}) {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          height: '40px',
          alignItems: 'center',
          ml: '20px',
          borderBottom: '1px solid var(--moonlight-grey)',
        }}
      >
        <CircleIcon sx={{ color: border, width: '9px' }} />
        <Typography
          sx={{
            fontSize: 'var(--fs-4)',
            ml: '15px',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: 'var(--granite-grey)',
            fontSize: 'var(--fs-4)',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          {subTitle}
        </Typography>
      </Stack>
      <Stack direction="row" pt="15px" px="15px" height="115px">
        <Stream data={data} show={show} color={color} border={border} />
      </Stack>
      <Stack
        px="15px"
        pt="15px"
        pb="29px"
        direction="row"
        flexGrow={1}
        justifyContent="space-between"
      >
        <Box>
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-2)' }}>
            Avg.
          </Typography>
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-9)' }}>
            1.0
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MdOutlineKeyboardArrowDown />
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-2)' }}>
            Min.
          </Typography>
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-4)' }}>
            1.0
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MdOutlineKeyboardArrowUp />
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-2)' }}>
            Max.
          </Typography>
          <Typography sx={{ display: 'inline-block', fontSize: 'var(--fs-4)' }}>
            1.0
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
