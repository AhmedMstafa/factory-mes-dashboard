import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';
export default function Date() {
  const [value, setValue] = useState(null);
  function handleChangeDate(newValue) {
    setValue(newValue);
    console.log(newValue);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker']}
        sx={{
          width: '40px !important',
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
        <DesktopDatePicker
          value={value}
          onChange={(newValue) => handleChangeDate(newValue)}
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
