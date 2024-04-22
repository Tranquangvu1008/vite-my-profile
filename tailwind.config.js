export const content = [
  './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    height: {
      'screen-minus-64': 'calc(100vh - 64px)',
      'vh-minus-64': 'calc(100vh - 64px)',
    },
    width: {
      'screen-minus-200': 'calc(100% - 200px)',
      'vw-minus-200': 'calc(100% - 200px)',
      'screen-minus-80': 'calc(100% - 80px)',
      'vw-minus-80': 'calc(100% - 80px)',
    },
    screens: {
      'mobile': '450px',
    },
    boxShadow: {
      custom: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    fontFamily: {
      'dancingScript': ['Dancing Script', 'sans-serif'],
      'notoSerif': ['Noto Serif', 'sans-serif'],
      'asapCondensed': ['Asap Condensed', 'sans-serif'],
      'anton': ['Anton', 'sans-serif'],
      'coiny': ['Coiny', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'lobster': ['Lobster', 'sans-serif'],
      'playfairDisplay': ['Playfair Display', 'sans-serif']
    },
  }
};
export const plugins = []
