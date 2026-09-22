import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D4AF37', // Golden Z Accent
      dark: '#B8860B',
      light: '#F5E6ab',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#101828', // Obsidian Slate
      dark: '#0B0F19',
      light: '#1D2939',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#101828',
      secondary: '#475467',
    },
    divider: '#EAECF0',
  },
  typography: {
    fontFamily: '"Google Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '8px 22px',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
          boxShadow: '0 4px 14px rgba(212, 175, 55, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #B8860B 0%, #856404 100%)',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.45)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #EAECF0',
          boxShadow: '0 1px 3px rgba(16, 24, 40, 0.05)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: '#F0E1A8',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 24px -4px rgba(212, 175, 55, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 9999,
        },
      },
    },
  },
});
