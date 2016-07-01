import jss from './jss';

import hero from './views/hero/hero';
import counter from './views/counter/counter';
import styles from './styles';

const { classes } = jss.createStyleSheet(styles).attach();

const appContainer = document.querySelector('#app');
const heroContainer = document.querySelector('#hero-container');
const counterContainer = document.querySelector('#counter-container');

// apply styles to app container
appContainer.classList.add(classes.app);

heroContainer.appendChild(hero());
counterContainer.appendChild(counter());
