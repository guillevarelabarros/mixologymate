// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul
    },
    secondary: {
      main: '#dc004e', // Rosa
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: orange.A400,
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
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
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          textTransform: 'none',
          borderRadius: 8,
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.05)',
          },
        },
        outlined: {
          borderRadius: 8,
          textTransform: 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
            borderColor: '#1976d2',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: '1.5rem',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          top: '1rem',
          right: '1rem',
          left: 'auto',
          bottom: 'auto',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingRight: '2.5rem',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
