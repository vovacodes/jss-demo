import jss from '../../jss';
import { createElement } from '../../utils';
import styles from './styles';

const { classes } = jss.createStyleSheet(styles).attach();

const hero = () => {

  return createElement(`
    <div class="${classes.hero}">
        <h1 class="${classes.heading}">Counter Of Destiny</h1>
    </div>
  `);
};

export default hero;
