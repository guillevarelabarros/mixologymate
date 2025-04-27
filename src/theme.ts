// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // Blue
    secondary: { main: '#dc004e' }, // Pink
    error: { main: red.A400 },
    warning: { main: orange.A400 },
    background: {
      default: '#f5f5f5',
      paper: '#ffffaff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: { fontWeight: 700, marginBottom: '1rem' },
    h5: { fontWeight: 500 },
    body1: { lineHeight: 1.6 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1976d2',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },
    // ... other component overrides remain unchanged
  },
});

theme = responsiveFontSizes(theme);

export default theme;
