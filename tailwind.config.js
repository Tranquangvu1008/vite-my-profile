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
  }
};
export const plugins = []
