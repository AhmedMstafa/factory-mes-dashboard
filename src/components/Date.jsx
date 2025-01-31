import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function Date() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker']}
        sx={{
          width: '50px !important',
          mt: 'auto',
          mb: 'auto',
          overflow: 'hidden',
          padding: '0',
          boxShadow: 'none',
          '& div': {
            width: 'inherit',
          },
        }}
      >
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            '& div': {
              border: 'none !important',
              padding: '0',
              margin: '0',
            },
            '& div input': {
              display: 'none',
            },
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            },
            '& svg': {
              color: 'var(--silver-mist)',
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
