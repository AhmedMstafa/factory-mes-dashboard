import { BiPackage } from 'react-icons/bi';

import { TbBottle } from 'react-icons/tb';
import { GoPackage } from 'react-icons/go';
import { CiPalette } from 'react-icons/ci';
import { Paper, Stack, Typography } from '@mui/material';

export default function TotalProduction() {
  return (
    <>
      <Paper
        sx={{
          minWidth: '282px',
          flex: 1,
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
          <BiPackage fontSize={22} />
          <Typography
            sx={{
              fontSize: 'var(--fs-4)',
              ml: '10px',
            }}
          >
            Total Production
          </Typography>
        </Stack>
        <Stack direction="column" gap={2} px="29px" py="15px">
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <TbBottle fontSize={22} />
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 'var(--fs-2)',
                color: 'var(--steel-grey)',
                marginLeft: '10px',
              }}
            >
              Bottle
            </Typography>
            <Typography
              sx={{
                color: 'var(--mist-blue-grey)',
                fontSize: 'var(--fs-8) ',
                ml: 'auto',
              }}
            >
              500K
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <GoPackage fontSize={22} />
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 'var(--fs-2)',
                color: 'var(--steel-grey)',
                marginLeft: '10px',
              }}
            >
              Pack
            </Typography>
            <Typography
              sx={{
                color: 'var(--mist-blue-grey)',
                fontSize: 'var(--fs-8) ',
                ml: 'auto',
              }}
            >
              50K
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <CiPalette fontSize={22} />
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 'var(--fs-2)',
                color: 'var(--steel-grey)',
                marginLeft: '10px',
              }}
            >
              Pallete
            </Typography>
            <Typography
              sx={{
                color: 'var(--mist-blue-grey)',
                fontSize: 'var(--fs-8) ',
                ml: 'auto',
              }}
            >
              10K
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
