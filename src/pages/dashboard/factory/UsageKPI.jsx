import { Box, Paper, Stack, Typography } from '@mui/material';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { IoWaterOutline } from 'react-icons/io5';
import { PiArrowsDownUp } from 'react-icons/pi';

export default function UsageKPI({ data }) {
  return (
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
        <PiArrowsDownUp fontSize={22} />
        <Typography
          sx={{
            fontSize: 'var(--fs-4)',
            ml: '10px',
          }}
        >
          Usage KPI
        </Typography>
      </Stack>
      <Stack p="29px" gap={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack flexDirection="row" mr="auto">
            <HiOutlineLightningBolt fontSize={22} />
            <Typography
              sx={{
                ml: '10px',
                fontSize: 'var(--fs-2)',
                color: 'var(--steel-grey)',
                fontWeight: 'bold',
              }}
            >
              Energy
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: 'var(--ocean-navy)',
                display: 'inlie-block',
                fontSize: 'var(--fs-1)',
                fontWeight: 'bold',
                padding: '0',
                textAlign: 'center',
              }}
            >
              Per Liter
            </Typography>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  color: 'var(--granite-grey)',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ color: 'var(--granite-grey)', fontSize: 'var(--fs-6)' }}
                >
                  {data.energy.perLiter}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--fs-3)',
                    ml: '5px',
                  }}
                >
                  J
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: 'var(--ocean-navy)',
                display: 'inlie-block',
                fontSize: 'var(--fs-1)',
                fontWeight: 'bold',
                padding: '0',
                textAlign: 'center',
              }}
            >
              Per Bottle
            </Typography>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  color: 'var(--granite-grey)',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ color: 'var(--granite-grey)', fontSize: 'var(--fs-6)' }}
                >
                  {data.energy.perBottle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--fs-3)',
                    ml: '5px',
                  }}
                >
                  J
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack flexDirection="row" mr="auto">
            <IoWaterOutline fontSize={22} />
            <Typography
              sx={{
                ml: '10px',
                fontSize: 'var(--fs-2)',
                color: 'var(--steel-grey)',
                fontWeight: 'bold',
              }}
            >
              Water
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: 'var(--ocean-navy)',
                display: 'inlie-block',
                fontSize: 'var(--fs-1)',
                fontWeight: 'bold',
                padding: '0',
                textAlign: 'center',
              }}
            >
              Per Liter
            </Typography>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  color: 'var(--granite-grey)',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ color: 'var(--granite-grey)', fontSize: 'var(--fs-6)' }}
                >
                  {data.water.perLiter}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--fs-3)',
                    ml: '5px',
                  }}
                >
                  J
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: 'var(--ocean-navy)',
                display: 'inlie-block',
                fontSize: 'var(--fs-1)',
                fontWeight: 'bold',
                padding: '0',
                textAlign: 'center',
              }}
            >
              Per Bottle
            </Typography>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  color: 'var(--granite-grey)',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ color: 'var(--granite-grey)', fontSize: 'var(--fs-6)' }}
                >
                  {data.water.perLiter}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--fs-3)',
                    ml: '5px',
                  }}
                >
                  J
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
