import { button as baseButton } from '../../baseStyles';
import { colors, mediaBreakpoints } from '../../styles';
import { simpleVerticalGradient } from '../../jssUtils';

const uniqueKeyframesName = `vertical-scanning-${Math.round(Math.random() * 10000000)}`;

export default {

  wrapper: {
    display: 'flex'
  },

  button: {
    ...baseButton,
    width: '110px',
    height: '50px',
    border: '1px solid transparent',
    backgroundImage: simpleVerticalGradient(colors.secondary, colors.primary, colors.tertiary, colors.secondary),
    backgroundSize: '100% 100px',
    backgroundPositionY: '-1px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

    '&:hover': {
      animation: `${uniqueKeyframesName} 1s linear infinite`
    },

    '&:focus': {
      outline: 'none'
    },

    '&:active': {
      transform: 'translate'
    }
  },

  count: {
    margin: '0 50px',
    fontSize: '40px',
    fontWeight: '800',
    color: colors.primary
  },

  [`@media (max-width: ${mediaBreakpoints.mobile})`]: {
    button: {
      background: `${colors.primary} !important`
    },

    count: {
      color: `${colors.tertiary} !important`
    }
  },

  [`@keyframes ${uniqueKeyframesName}`]: {
    from: {
      backgroundPositionY: '-1px'
    },
    to: {
      backgroundPositionY: '100px'
    }
  }

};
