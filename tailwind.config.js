export const content = [
  './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    height: {
      'screen-minus-64': 'calc(100vh - 64px)',
      'vh-minus-64': 'calc(100vh - 64px)',
    },
    screens: {
      'mobile': '530px',
    },
    boxShadow: {
      custom: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  }
};
export const plugins = []
