function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', () => {
  const colorStyle = getRandomHexColor()
  document.body.style.backgroundColor = colorStyle;
  nameColorEl.textContent = colorStyle;
  nameColorEl.style.backgroundColor = colorStyle;
});


