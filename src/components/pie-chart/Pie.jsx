import { Box, Typography } from '@mui/material';
import PieChart from './PieChart';
import { useEffect, useState } from 'react';

export default function Pie({
  lable,
  value,
  color,
  background,
  boxSize = '73px',
}) {
  const [valueState, setValueState] = useState(0);
  const data = [
    { id: lable, label: lable, value: valueState, color: color },
    { id: 'OFF', label: 'OFF', value: 100 - value, color: background },
  ];

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <Box sx={{ width: 'fit-content' }}>
      <Box
        sx={{
          width: boxSize,
          height: boxSize,
          position: 'relative',
        }}
      >
        <PieChart data={data} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'var(--fs-4)',
            fontWeight: 'bold',
          }}
        >
          {`${data[0].value}%`}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          fontSize: 'var(--fs-3)',
          textAlign: 'center',
        }}
      >
        {`${data[0].label}`}
      </Typography>
    </Box>
  );
}
