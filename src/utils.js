export const createElement = (htmlString) => {
  const tempEl = document.createElement('div');

  tempEl.innerHTML = htmlString;

  return tempEl.children[0];
};
