import { Paper, Stack, Typography } from '@mui/material';
import { AiOutlineArrowDown } from 'react-icons/ai';
import BarChart from '../../../components/bar/BarChart';

const data = [
  {
    'Loss Tree': 'Idle',
    Idle: 5,
    IdleColor: '#ff4e50',
    'Cleansing process': 92,
    'Cleansing processColor': '#97e5a1',
    'Break-down': 156,
    'Break-downColor': '#3e6db5',
    'Speed Loss': 108,
    'Speed LossColor': '#6eac85',
    'Quality Loss': 74,
    'Quality LossColor': '#81c0e9',
  },
  {
    'Loss Tree': 'Quality Loss',
    Idle: 160,
    IdleColor: '#ff7380',
    'Cleansing process': 12,
    'Cleansing processColor': '#6fcf53',
    'Break-down': 2,
    'Break-downColor': '#907ad6',
    'Speed Loss': 53,
    'Speed LossColor': '#d45faa',
    'Quality Loss': 54,
    'Quality LossColor': '#5ae6b3',
  },
  {
    'Loss Tree': 'Cleansing process',
    Idle: 90,
    IdleColor: '#7f9fed',
    'Cleansing process': 149,
    'Cleansing processColor': '#c166ed',
    'Break-down': 195,
    'Break-downColor': '#86d67c',
    'Speed Loss': 125,
    'Speed LossColor': '#e66585',
    'Quality Loss': 125,
    'Quality LossColor': '#ed9823',
  },
  {
    'Loss Tree': 'Break-down',
    Idle: 133,
    IdleColor: '#8135ed',
    'Cleansing process': 23,
    'Cleansing processColor': '#6c90c9',
    'Break-down': 195,
    'Break-downColor': '#af63c4',
    'Speed Loss': 47,
    'Speed LossColor': '#fbaf45',
    'Quality Loss': 56,
    'Quality LossColor': '#9dca32',
  },
  {
    'Loss Tree': 'Speed Loss',
    Idle: 69,
    IdleColor: '#bfa334',
    'Cleansing process': 65,
    'Cleansing processColor': '#ee8b69',
    'Break-down': 182,
    'Break-downColor': '#d98745',
    'Speed Loss': 73,
    'Speed LossColor': '#bf812a',
    'Quality Loss': 18,
    'Quality LossColor': '#5ea871',
  },
  {
    'Loss Tree': 'Minor stops',
    Idle: 79,
    IdleColor: '#ad34cc',
    'Cleansing process': 94,
    'Cleansing processColor': '#c359ed',
    'Break-down': 145,
    'Break-downColor': '#71c4d9',
    'Speed Loss': 135,
    'Speed LossColor': '#72ab6f',
    'Quality Loss': 82,
    'Quality LossColor': '#be43c5',
  },
  {
    'Loss Tree': 'Break-down',
    Idle: 91,
    IdleColor: '#59b1ff',
    'Cleansing process': 34,
    'Cleansing processColor': '#74e56b',
    'Break-down': 129,
    'Break-downColor': '#ffe033',
    'Speed Loss': 40,
    'Speed LossColor': '#ff6633',
    'Quality Loss': 34,
    'Quality LossColor': '#758dea',
  },
];

export default function LossTree() {
  return (
    <>
      <Paper
        sx={{
          width: '300px',
          minWidth: { md: '500px' },
          flex: 1,
          height: '400px',
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
          <AiOutlineArrowDown fontSize={22} />
          <Typography
            sx={{
              fontSize: 'var(--fs-4)',
              ml: '10px',
            }}
          >
            Loss Tree
          </Typography>
        </Stack>
        <BarChart data={data} />
      </Paper>
    </>
  );
}
