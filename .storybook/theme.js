export default {
  colors: {

    main: {
      white: '#FFFFFF',
      lightest: '#e5f5f9',
      light: 'rgba(0,156,194,.1)',
      default: '#2c97ad',
      dark: '#00596f',
      darker: '#003540',
      darkest: '',
      gray: '#e9eced',
      black: '#000000',
    },

    positive: {
      idle: '#c4ecbb',
      active: '#99de89',
    },

    negative: {
      idle: '#f7c1b5',
      active: '#f1907b',
    },

    warning: {
      idle: '#f9e1a9',
      active: '#f5cd6e',
    },
  },
  // typography import has extra double quotes which cancels font
  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Source Sans Pro, sans-serif",
  },
  buttons: {
    primary: {
      color: `main.white`,
      bg: `main.default`,

    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    gray: {
      color: 'background',
      bg: 'gray',
    },
  },
}