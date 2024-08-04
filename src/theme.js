// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff5722',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
