import jss from '../../jss';
import { createElement } from '../../utils';
import styles from './styles';

const { classes } = jss.createStyleSheet(styles).attach();

const counter = () => {
  const el = createElement(`
    <div class="${classes.wrapper}">
        <button class="${classes.button}" data-hook="decrease">-</button>
        <div class="${classes.count}" data-hook="count">0</div>
        <button class="${classes.button}" data-hook="increase">+</button>
    </div>
  `);

  const decreaseBtn = el.querySelector('[data-hook="decrease"]');
  const increaseBtn = el.querySelector('[data-hook="increase"]');
  const countEl = el.querySelector('[data-hook="count"]');
  
  decreaseBtn.addEventListener('click', () => {
    const currentCount = parseInt(countEl.innerText);
    
    countEl.innerText = (!isNaN(currentCount)) ? currentCount - 1 : 0;
  });

  increaseBtn.addEventListener('click', () => {
    const currentCount = parseInt(countEl.innerText);

    countEl.innerText = (!isNaN(currentCount)) ? currentCount + 1 : 0;
  });

  return el;
};

export default counter;
