export const content = [
  './src/**/*.{js,jsx,ts,tsx}' // Đường dẫn đến tất cả các file JavaScript và TypeScript trong dự án của bạn
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
