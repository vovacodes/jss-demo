import { simpleVerticalGradient } from './jssUtils';

// !warning webpack magic involved:
// importing url of the local file with webpack file-loader
import backgroundUrl from './images/background.png';

export const colors = {
  primary: '#e0129d',
  secondary: '#f2f52b',
  tertiary: '#196ccc'
};

export const mediaBreakpoints = {
  mobile: '768px'
};

export default {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: `${simpleVerticalGradient('rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)')}, url(${backgroundUrl})`,
    backgroundSize: 'contain',
    columnCount: '1' // use for sake of auto-prefixer demo
  },

  [`@media (max-width: ${mediaBreakpoints.mobile})`]: {
    app: {
      background: `${colors.secondary} !important`
    }
  }
};
